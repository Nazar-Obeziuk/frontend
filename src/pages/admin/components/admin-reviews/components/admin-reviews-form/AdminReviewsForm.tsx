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

  const notify = (message: string) => toast(message);
  const token = localStorage.getItem("token");

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    if (token) {
      try {
        const response = await createGeneralReview(formData, token);
        resetValues(response);
      } catch (error) {
        console.error("Error creating review:", error);
        notify("Щось пішло не так...");
      }
    }
  };

  const resetValues = (response: any) => {
    getAll();
    notify(response.message);
    reset();
    toggleReviewsForm();
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
        <label htmlFor="category" className={styles.admin__control_label}>
          Категорія відгука
        </label>
        <select
          {...register("category", { required: `Це поле обов'язкове!` })}
          className={styles.admin__control_field}
        >
          <option value="general" defaultValue={"Генеральні"}>
            Генеральні
          </option>
          <option value="certificate">Сертифікату</option>
          <option value="individual">Індивідуальні</option>
        </select>
        {errors["category"] && (
          <span className={styles.error_message}>
            {errors["category"]?.message as string}
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
        <label htmlFor="description_en" className={styles.admin__control_label}>
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
          Плюси (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Плюси (Укр)"
          {...register("pluses_ua", { required: false })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="pluses_en" className={styles.admin__control_label}>
          Плюси (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Плюси (Англ)"
          {...register("pluses_en", { required: false })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="minuses_ua" className={styles.admin__control_label}>
          Мінуси (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Мінуси (Укр)"
          {...register("minuses_ua", { required: false })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="minuses_en" className={styles.admin__control_label}>
          Мінуси (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Мінуси (Англ)"
          {...register("minuses_en", { required: false })}
        />
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
