import React, { useState } from "react";
import styles from "./AdminWorkersForm.module.css";
import { useForm } from "react-hook-form";

interface Props {
  toggleWorkersForm: () => void;
}

const AdminWorkersForm: React.FC<Props> = ({ toggleWorkersForm }) => {
  const [fileInputs, setFileInputs] = useState<string[]>(["worker-image"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const addFileInput = () => {
    const newFileInputName = `worker-slider-image-${fileInputs.length}`;
    setFileInputs([...fileInputs, newFileInputName]);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleUploadFile = (event: any) => {
    const file = event.target.files[0];
    const urlImage = URL.createObjectURL(file);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.admin__form_block}
    >
      <div className={styles.admin__block_control}>
        <label htmlFor="worker-image" className={styles.admin__control_label}>
          Зображення працівника
        </label>
        <input
          type="file"
          className={styles.admin__control_field}
          {...register("worker-image", { required: `Це поле обов'язкове!` })}
          style={errors["worker-image"] ? { border: "1px solid #EB001B" } : {}}
          onChange={handleUploadFile}
        />
        {errors["worker-image"] && (
          <span className={styles.error_message}>
            {errors["worker-image"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="fullName_ua" className={styles.admin__control_label}>
          Ім'я та прізвище працівника (Укр)
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["fullName_ua"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Ім'я та прізвище працівника (Укр)"
          {...register("fullName_ua", { required: `Це поле обов'язкове!` })}
        />
        {errors["fullName_ua"] && (
          <span className={styles.error_message}>
            {errors["fullName_ua"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="fullName_en" className={styles.admin__control_label}>
          Ім'я та прізвище працівника (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["fullName_en"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Ім'я та прізвище працівника (Англ)"
          {...register("fullName_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["fullName_en"] && (
          <span className={styles.error_message}>
            {errors["fullName_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="subtitle_ua" className={styles.admin__control_label}>
          Напрямок працівника (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["subtitle_ua"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Напрямок працівника (Укр)"
          {...register("subtitle_ua", { required: `Це поле обов'язкове!` })}
        />
        {errors["subtitle_ua"] && (
          <span className={styles.error_message}>
            {errors["subtitle_ua"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-subtitle-en"
          className={styles.admin__control_label}
        >
          Напрямок працівника (Англ)
        </label>
        <input
          type="text"
          style={errors["subtitle_en"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder="Напрямок працівника (Англ)"
          {...register("subtitle_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["subtitle_en"] && (
          <span className={styles.error_message}>
            {errors["subtitle_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-1-ua"
          className={styles.admin__control_label}
        >
          Перший опис працівника (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Перший опис працівника (Укр)"
          {...register("worker-desc-1-ua", { required: false })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-1-en"
          className={styles.admin__control_label}
        >
          Перший опис працівника (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Перший опис працівника (Англ)"
          {...register("worker-desc-1-en", { required: false })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-2-ua"
          className={styles.admin__control_label}
        >
          Другий опис працівника (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Другий опис працівника (Укр)"
          {...register("worker-desc-2-ua", { required: false })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-2-en"
          className={styles.admin__control_label}
        >
          Другий опис працівника (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Другий опис працівника (Англ)"
          {...register("worker-desc-2-en", { required: false })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-3-ua"
          className={styles.admin__control_label}
        >
          Третій опис працівника (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Третій опис працівника (Укр)"
          {...register("worker-desc-3-ua", { required: false })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="worker-desc-3-en"
          className={styles.admin__control_label}
        >
          Третій опис працівника (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Третій опис працівника (Англ)"
          {...register("worker-desc-3-en", { required: false })}
        />
      </div>
      {fileInputs.map((fileInputName, index) => (
        <div key={index} className={styles.admin__block_control}>
          <label
            htmlFor={fileInputName}
            className={styles.admin__control_label}
          >
            Зображення для слайдера працівника {index + 1}
          </label>
          <input
            type="file"
            className={styles.admin__control_field}
            {...register(`worker-slider-image-${index + 1}`, {
              required: false,
            })}
          />
        </div>
      ))}
      <button
        onClick={addFileInput}
        className={`${styles.admin__actions_button} ${styles.admin__button_slider}`}
        type="button"
      >
        Додати зображення для слайдера працівника
      </button>
      <div className={styles.admin__block_actions}>
        <button className={styles.admin__actions_button} type="submit">
          Підтвердити
        </button>
        <button
          onClick={toggleWorkersForm}
          className={styles.admin__actions_button}
          type="button"
        >
          Скасувати
        </button>
      </div>
    </form>
  );
};

export default AdminWorkersForm;
