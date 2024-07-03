import React, { useState } from "react";
import styles from "./AdminReviewsForm.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { createGeneralReview } from "../../../../../../services/reviews/reviews";
import { IReview } from "../../../../../../services/reviews/review.interface";

interface Props {
  toggleReviewsForm: () => void;
  getAll: () => void;
}

// const getColor = (props: any) => {
//   if (props.isDragAccept) {
//     return "#00e676";
//   }
//   if (props.isDragReject) {
//     return "#ff1744";
//   }
//   if (props.isFocused) {
//     return "#2196f3";
//   }
//   return "#eeeeee";
// };

// const AdminImage = styled.div`
//   width: 100%;
//   padding: 16px 26px 14px 26px;
//   border-width: 1px;
//   border-radius: 12px;
//   border-color: ${(props: any) => getColor(props)};
//   border-style: solid;
//   background-color: transparent;
//   color: rgba(255, 255, 255, 0.5);
//   font-family: "Fixel-Display";
//   font-size: 18px;
//   font-weight: 300;
//   line-height: 20px;
//   outline: none;
//   transition: border 0.24s ease-in-out;
//   display: flex;
//   align-items: center;
//   cursor: pointer;

//   &[isdragactive="true"] {
//     /* Style for drag active */
//   }

//   &[isdragaccept="true"] {
//     /* Style for drag accept */
//     border-color: #00e676;
//   }

//   &[isdragreject="true"] {
//     /* Style for drag reject */
//     border-color: #ff1744;
//   }

//   &[isfocused="true"] {
//     /* Style for focused */
//     border-color: #2196f3;
//   }
// `;

const AdminReviewsForm: React.FC<Props> = ({ toggleReviewsForm, getAll }) => {
  // const [mainImage, setMainImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  // const acceptType: Accept = {
  //   "image/*": [".jpeg", ".jpg", ".png", ".gif"],
  // };

  // const onDropMainImage = useCallback((acceptedFiles: File[]) => {
  //   setMainImage(acceptedFiles[0]);
  // }, []);

  // const {
  //   getRootProps: getMainRootProps,
  //   getInputProps: getMainInputProps,
  //   isDragActive: isMainDragActive,
  //   isDragAccept: isMainDragAccept,
  //   isDragReject: isMainDragReject,
  //   isFocused: isMainFocused,
  // } = useDropzone({
  //   onDrop: onDropMainImage,
  //   multiple: false,
  //   accept: acceptType,
  // });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    // if (mainImage) {
    //   formData.append("image", mainImage);
    // }

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    try {
      if (token) {
        const response = await createGeneralReview(formData, token);
        getAll();
        notify(response.message);
        console.log(data);
        reset();
      } else {
        notify("Авторизуйтеся будь ласка!");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error creating review:", error);
      notify("Щось пішло не так...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.admin__form_block}
    >
      <div className={styles.admin__block_control}>
        <label htmlFor="stars" className={styles.admin__control_label}>
          Кількість зірочок
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["stars"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Кількість зірочок"
          {...register("stars", { required: `Це поле обов'язкове!` })}
        />
        {errors["stars"] && (
          <span className={styles.error_message}>
            {errors["stars"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="name_ua" className={styles.admin__control_label}>
          Ім'я клієнта (Укр)
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["name_ua"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Ім'я клієнта (Укр)"
          {...register("name_ua", { required: `Це поле обов'язкове!` })}
        />
        {errors["name_ua"] && (
          <span className={styles.error_message}>
            {errors["name_ua"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="name_en" className={styles.admin__control_label}>
          Ім'я клієнта (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["name_en"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Ім'я клієнта (Англ)"
          {...register("name_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["name_en"] && (
          <span className={styles.error_message}>
            {errors["name_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="description_ua" className={styles.admin__control_label}>
          Текст відгука (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={
            errors["description_ua"] ? { border: "1px solid #EB001B" } : {}
          }
          placeholder="Текст відгука (Укр)"
          {...register("description_ua", { required: `Це поле обов'язкове!` })}
        />
        {errors["description_ua"] && (
          <span className={styles.error_message}>
            {errors["description_ua"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-subtitle-en"
          className={styles.admin__control_label}
        >
          Текст відгука (Англ)
        </label>
        <input
          type="text"
          style={
            errors["description_en"] ? { border: "1px solid #EB001B" } : {}
          }
          className={styles.admin__control_field}
          placeholder="Текст відгука (Англ)"
          {...register("description_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["description_en"] && (
          <span className={styles.error_message}>
            {errors["description_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="pluses_ua" className={styles.admin__control_label}>
          Плюси відгука (Укр)
        </label>
        <input
          type="text"
          style={errors["pluses_ua"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder="Плюси відгука (Укр)"
          {...register("pluses_ua", { required: `Це поле обов'язкове!` })}
        />
        {errors["pluses_ua"] && (
          <span className={styles.error_message}>
            {errors["pluses_ua"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="pluses_en" className={styles.admin__control_label}>
          Плюси відгука (Англ)
        </label>
        <input
          type="text"
          style={errors["pluses_en"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder=" Плюси відгука (Англ)"
          {...register("pluses_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["pluses_en"] && (
          <span className={styles.error_message}>
            {errors["pluses_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="minuses_ua" className={styles.admin__control_label}>
          Мінуси відгука (Укр)
        </label>
        <input
          type="text"
          style={errors["minuses_ua"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder="Мінуси відгука (Укр)"
          {...register("minuses_ua", { required: `Це поле обов'язкове!` })}
        />
        {errors["pluses_ua"] && (
          <span className={styles.error_message}>
            {errors["minuses_ua"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="minuses_en" className={styles.admin__control_label}>
          Мінуси відгука (Англ)
        </label>
        <input
          type="text"
          style={errors["minuses_en"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder=" Мінуси відгука (Англ)"
          {...register("minuses_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["pluses_en"] && (
          <span className={styles.error_message}>
            {errors["minuses_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_actions}>
        <button
          className={styles.admin__actions_button}
          type="submit"
          disabled={isLoading || !isValid}
        >
          {isLoading ? "Загрузка..." : "Підтвердити"}
        </button>
        <button
          onClick={toggleReviewsForm}
          className={styles.admin__actions_button}
          type="button"
          disabled={isLoading}
        >
          Скасувати
        </button>
      </div>
    </form>
  );
};

export default AdminReviewsForm;
