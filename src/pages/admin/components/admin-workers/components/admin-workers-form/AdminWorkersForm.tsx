import React, { useCallback, useState } from "react";
import styles from "./AdminWorkersForm.module.css";
import { useForm } from "react-hook-form";
import { createWorker } from "../../../../../../services/workers/workers";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

interface Props {
  toggleWorkersForm: () => void;
}

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const AdminImage = styled.div`
  width: 100%;
  padding: 16px 26px 14px 26px;
  border-width: 1px;
  border-radius: 12px;
  border-color: ${(props) => getColor(props)};
  border-style: solid;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Fixel-Display";
  font-size: 18px;
  font-weight: 300;
  line-height: 20px;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const AdminWorkersForm: React.FC<Props> = ({ toggleWorkersForm }) => {
  const [fileInputs, setFileInputs] = useState<string[]>(["worker-image"]);
  const [uploadedFiles, setUploadedFiles] = useState<any[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });
  // const onDrop = useCallback((acceptedFiles: any) => {
  //   const newFiles = acceptedFiles.map((file: any) =>
  //     URL.createObjectURL(file)
  //   );
  //   setUploadedFiles([...uploadedFiles, ...newFiles]);
  // }, []);
  // const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
  //   useDropzone({ accept: "image/*", onDrop });

  const addFileInput = () => {
    const newFileInputName = `worker-slider-image-${fileInputs.length}`;
    setFileInputs([...fileInputs, newFileInputName]);
  };

  const onSubmit = async (data: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      const fullData = {
        ...data,
        image: uploadedFiles,
        slider_images: null,
      };
      await createWorker(fullData, token);
      console.log(fullData);
      reset();
    }
  };

  const handleUploadFile = (event: any) => {
    const file = event.target.files[0];
    // const urlImage = URL.createObjectURL(file);
    // console.log(file);
    setUploadedFiles(file);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.admin__form_block}
    >
      <div className={styles.admin__block_control}>
        <label htmlFor="image" className={styles.admin__control_label}>
          Зображення працівника
        </label>
        <input
          type="file"
          className={styles.admin__control_field}
          {...register("image", { required: `Це поле обов'язкове!` })}
          style={errors["image"] ? { border: "1px solid #EB001B" } : {}}
          onChange={handleUploadFile}
        />
        {errors["image"] && (
          <span className={styles.error_message}>
            {errors["image"]?.message as string}
          </span>
        )}
        {/* <div className="admin__worker_image">
          <AdminImage
            {...getRootProps({ isFocused, isDragAccept, isDragReject })}
          >
            <input {...getInputProps()} />
            <p>Перетягніть файли</p>
          </AdminImage>
        </div> */}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="fullName_ua" className={styles.admin__control_label}>
          Ім'я та прізвище працівника (Укр)
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["name_ua"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Ім'я та прізвище працівника (Укр)"
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
          Ім'я та прізвище працівника (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["name_en"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Ім'я та прізвище працівника (Англ)"
          {...register("name_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["name_en"] && (
          <span className={styles.error_message}>
            {errors["name_en"]?.message as string}
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
          htmlFor="first_description_ua"
          className={styles.admin__control_label}
        >
          Перший опис працівника (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Перший опис працівника (Укр)"
          {...register("first_description_ua", { required: false })}
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
          {...register("first_description_en", { required: false })}
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
          {...register("second_description_ua", { required: false })}
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
          {...register("second_description_en", { required: false })}
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
          {...register("third_description_ua", { required: false })}
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
          {...register("third_description_en", { required: false })}
        />
      </div>
      {/* {fileInputs.map((fileInputName, index) => (
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
            {...register(`slider-images`, {
              required: false,
            })}
          />
        </div>
      ))} */}
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
