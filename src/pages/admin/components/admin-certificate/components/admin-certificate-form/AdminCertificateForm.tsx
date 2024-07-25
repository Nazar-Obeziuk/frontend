import React, { useCallback, useState } from "react";
import styles from "./AdminCertificateForm.module.css";
import { Accept, useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createCertificate } from "../../../../../../services/gift-certificate/gift-certificate";

interface Props {
  toggleCertificateForm: () => void;
  getAll: () => void;
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
  border-color: ${(props: any) => getColor(props)};
  border-style: solid;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.5);
  font-family: "Fixel-Display";
  font-size: 18px;
  font-weight: 300;
  line-height: 20px;
  outline: none;
  transition: border 0.24s ease-in-out;
  display: flex;
  align-items: center;
  cursor: pointer;

  &[isdragactive="true"] {
    /* Style for drag active */
  }

  &[isdragaccept="true"] {
    /* Style for drag accept */
    border-color: #ffed00;
  }

  &[isdragreject="true"] {
    /* Style for drag reject */
    border-color: #ff0000;
  }

  &[isfocused="true"] {
    /* Style for focused */
    border-color: none;
  }
`;

const AdminCertificateForm: React.FC<Props> = ({
  toggleCertificateForm,
  getAll,
}) => {
  const [certificateImages, setCertificateImages] = useState<File[]>([]);
  const [certificateImagesPreview, setCertificateImagesPreview] = useState<
    string[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const acceptType: Accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif"],
  };

  const onDropCertificateImages = useCallback((acceptedFiles: File[]) => {
    const files = acceptedFiles;
    setCertificateImages((prevCertificateImages) => [
      ...prevCertificateImages,
      ...files,
    ]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setCertificateImagesPreview((prevPreviews) => [
      ...(prevPreviews || []),
      ...newPreviews,
    ]);
  }, []);

  const {
    getRootProps: getCertificateRootProps,
    getInputProps: getCertificateInputProps,
    isDragActive: isCertificateDragActive,
    isDragAccept: isCertificateDragAccept,
    isDragReject: isCertificateDragReject,
    isFocused: isCertificateFocused,
  } = useDropzone({
    onDrop: onDropCertificateImages,
    multiple: true,
    accept: acceptType,
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    certificateImages.forEach((file) => {
      formData.append("image_url", file);
    });

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    if (token) {
      try {
        const response = await createCertificate(formData, token);
        notify(response.message);
        getAll();
        navigate("/admin");
        reset();
        toggleCertificateForm();
        setCertificateImagesPreview(null);
      } catch (error) {
        console.error("Error creating certificate:", error);
        notify("Щось пішло не так...");
      } finally {
        setIsLoading(false);
      }
    } else {
      notify("Авторизуйтеся будь ласка!");
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.admin__form_block}
    >
      <div className={styles.admin__block_control}>
        <label htmlFor="image" className={styles.admin__control_label}>
          Зображення сертифікатів
        </label>
        <AdminImage
          {...getCertificateRootProps({
            isdragactive: isCertificateDragActive.toString(),
            isdragaccept: isCertificateDragAccept.toString(),
            isdragreject: isCertificateDragReject.toString(),
            isfocused: isCertificateFocused.toString(),
          })}
        >
          <input {...getCertificateInputProps()} />
          {isCertificateDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть файли сюди, або клацніть</p>
          )}
        </AdminImage>
        <ul className={styles.admin__drag_slider}>
          {certificateImagesPreview &&
            certificateImagesPreview.map(
              (certificateImagePreview: string, index: number) => (
                <li key={index} className={styles.admin__drag_preview}>
                  <img
                    className={styles.admin__drag_image}
                    src={certificateImagePreview}
                    alt={`certificate preview ${index}`}
                  />
                </li>
              )
            )}
        </ul>
        {errors["image"] && (
          <span className={styles.error_message}>
            {errors["image"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="name_ua" className={styles.admin__control_label}>
          Назва сертифікату (Укр)
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["name_ua"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Назва сертифікату (Укр)"
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
          Назва сертифікату (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["name_en"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Назва сертифікату (Англ)"
          {...register("name_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["name_en"] && (
          <span className={styles.error_message}>
            {errors["name_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="base_price" className={styles.admin__control_label}>
          Ціна сертифікату
        </label>
        <input
          type="text"
          style={errors["base_price"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder="Ціна сертифікату"
          {...register("base_price", { required: `Це поле обов'язкове!` })}
        />
        {errors["base_price"] && (
          <span className={styles.error_message}>
            {errors["base_price"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="article" className={styles.admin__control_label}>
          Артикул сертифікату
        </label>
        <input
          type="text"
          style={errors["article"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder="Артикул сертифікату"
          {...register("article", { required: `Це поле обов'язкове!` })}
        />
        {errors["article"] && (
          <span className={styles.error_message}>
            {errors["article"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="description_ua" className={styles.admin__control_label}>
          Опис сертифікату (Укр)
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={
            errors["description_ua"] ? { border: "1px solid #EB001B" } : {}
          }
          placeholder="Опис сертифікату (Укр)"
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
          Опис сертифікату (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={
            errors["description_en"] ? { border: "1px solid #EB001B" } : {}
          }
          placeholder="Опис сертифікату (Англ)"
          {...register("description_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["description_en"] && (
          <span className={styles.error_message}>
            {errors["description_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="first_about_description_ua"
          className={styles.admin__control_label}
        >
          Перший опис про товар (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Перший опис про товар (Укр)"
          {...register("first_about_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="first_about_description_en"
          className={styles.admin__control_label}
        >
          Перший опис про товар (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Перший опис про товар (Англ)"
          {...register("first_about_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="second_about_description_ua"
          className={styles.admin__control_label}
        >
          Другий опис про товар (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Другий опис про товар (Укр)"
          {...register("second_about_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="second_about_description_en"
          className={styles.admin__control_label}
        >
          Другий опис про товар (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Другий опис про товар (Англ)"
          {...register("second_about_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="third_about_description_ua"
          className={styles.admin__control_label}
        >
          Третій опис про товар (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Третій опис про товар (Укр)"
          {...register("third_about_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="third_about_description_en"
          className={styles.admin__control_label}
        >
          Третій опис про товар (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Третій опис про товар (Англ)"
          {...register("third_about_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="first_use_description_ua"
          className={styles.admin__control_label}
        >
          Перший опис використання (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Перший опис використання (Укр)"
          {...register("first_use_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="first_use_description_en"
          className={styles.admin__control_label}
        >
          Перший опис використання (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Перший опис використання (Англ)"
          {...register("first_use_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="second_use_description_ua"
          className={styles.admin__control_label}
        >
          Другий опис використання (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Другий опис використання (Укр)"
          {...register("second_use_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="second_use_description_en"
          className={styles.admin__control_label}
        >
          Другий опис використання (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Другий опис використання (Англ)"
          {...register("second_use_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="third_use_description_ua"
          className={styles.admin__control_label}
        >
          Третій опис використання (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Третій опис використання (Укр)"
          {...register("third_use_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="third_use_description_en"
          className={styles.admin__control_label}
        >
          Третій опис використання (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Третій опис використання (Англ)"
          {...register("third_use_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="fourth_use_description_ua"
          className={styles.admin__control_label}
        >
          Четвертий опис використання (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Четвертий опис використання (Укр)"
          {...register("fourth_use_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="fourth_use_description_en"
          className={styles.admin__control_label}
        >
          Четвертий опис використання (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Четвертий опис використання (Англ)"
          {...register("fourth_use_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="fifth_use_description_ua"
          className={styles.admin__control_label}
        >
          П'ятий опис використання (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="П'ятий опис використання (Укр)"
          {...register("fifth_use_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="fifth_use_description_en"
          className={styles.admin__control_label}
        >
          П'ятий опис використання (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="П'ятий опис використання (Англ)"
          {...register("fifth_use_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="sixth_use_description_ua"
          className={styles.admin__control_label}
        >
          Шостий опис використання (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Шостий опис використання (Укр)"
          {...register("sixth_use_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="sixth_use_description_en"
          className={styles.admin__control_label}
        >
          Шостий опис використання (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Шостий опис використання (Англ)"
          {...register("sixth_use_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="seventh_use_description_ua"
          className={styles.admin__control_label}
        >
          Сьомий опис використання (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Сьомий опис використання (Укр)"
          {...register("seventh_use_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="seventh_use_description_en"
          className={styles.admin__control_label}
        >
          Сьомий опис використання (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Сьомий опис використання (Англ)"
          {...register("seventh_use_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="eighth_use_description_ua"
          className={styles.admin__control_label}
        >
          Восьмий опис використання (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Восьмий опис використання (Укр)"
          {...register("eighth_use_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="eighth_use_description_en"
          className={styles.admin__control_label}
        >
          Восьмий опис використання (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Восьмий опис використання (Англ)"
          {...register("eighth_use_description_en", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="nineth_use_description_ua"
          className={styles.admin__control_label}
        >
          Дев'ятий опис використання (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Дев'ятий опис використання (Укр)"
          {...register("nineth_use_description_ua", {
            required: false,
          })}
        />
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="nineth_use_description_en"
          className={styles.admin__control_label}
        >
          Дев'ятий опис використання (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          placeholder="Дев'ятий опис використання (Англ)"
          {...register("nineth_use_description_en", {
            required: false,
          })}
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
          onClick={toggleCertificateForm}
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

export default AdminCertificateForm;
