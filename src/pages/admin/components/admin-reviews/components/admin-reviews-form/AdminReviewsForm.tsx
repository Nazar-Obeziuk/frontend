import React, { useState } from "react";
import styles from "./AdminReviewsForm.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { createGeneralReview } from "../../../../../../services/reviews/reviews";

interface Props {
  toggleReviewsForm: () => void;
  getAll: () => void;
}

const AdminReviewsForm: React.FC<Props> = ({ toggleReviewsForm, getAll }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    try {
      if (token) {
        const response = await createGeneralReview(formData, token);
        getAll();
        notify(response.message);
        reset();
        toggleReviewsForm();
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
      {/* <div className={styles.admin__block_control}>
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
      </div> */}
      {/* <div className={styles.admin__block_control}>
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
      </div> */}
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
