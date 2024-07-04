import React, { useCallback, useState } from "react";
import styles from "./AdminWorkersForm.module.css";
import { useForm } from "react-hook-form";
import { createWorker } from "../../../../../../services/workers/workers";
import { useDropzone, Accept } from "react-dropzone";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface Props {
  toggleWorkersForm: () => void;
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

const AdminWorkersForm: React.FC<Props> = ({ toggleWorkersForm, getAll }) => {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [sliderImages, setSliderImages] = useState<File[]>([]);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [sliderImagesPreview, setSliderImagesPreview] = useState<
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

  const onDropMainImage = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  }, []);

  const {
    getRootProps: getMainRootProps,
    getInputProps: getMainInputProps,
    isDragActive: isMainDragActive,
    isDragAccept: isMainDragAccept,
    isDragReject: isMainDragReject,
    isFocused: isMainFocused,
  } = useDropzone({
    onDrop: onDropMainImage,
    multiple: false,
    accept: acceptType,
  });

  const onDropSliderImages = useCallback((acceptedFiles: File[]) => {
    const files = acceptedFiles;
    setSliderImages((prevSliderImages) => [...prevSliderImages, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setSliderImagesPreview((prevPreviews) => [
      ...(prevPreviews || []),
      ...newPreviews,
    ]);
  }, []);

  const {
    getRootProps: getSliderRootProps,
    getInputProps: getSliderInputProps,
    isDragActive: isSliderDragActive,
    isDragAccept: isSliderDragAccept,
    isDragReject: isSliderDragReject,
    isFocused: isSliderFocused,
  } = useDropzone({
    onDrop: onDropSliderImages,
    multiple: true,
    accept: acceptType,
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    if (mainImage) {
      formData.append("image", mainImage);
    }

    sliderImages.forEach((file) => {
      formData.append("slider_images", file);
    });

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    if (token) {
      try {
        const response = await createWorker(formData, token);
        getAll();
        notify(response.message);
        navigate("/admin");
        reset();
        toggleWorkersForm();
      } catch (error) {
        console.error("Error creating worker:", error);
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
          Зображення працівника
        </label>
        <AdminImage
          {...getMainRootProps({
            isdragactive: isMainDragActive.toString(),
            isdragaccept: isMainDragAccept.toString(),
            isdragreject: isMainDragReject.toString(),
            isfocused: isMainFocused.toString(),
          })}
        >
          <input {...getMainInputProps()} />
          {isMainDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть файли сюди, або клацніть для вибору файлів</p>
          )}
        </AdminImage>
        {mainImagePreview && (
          <div className={styles.admin__drag_preview}>
            <img
              src={mainImagePreview}
              alt="banner preview"
              className={styles.admin__drag_image}
            />
          </div>
        )}
        {errors["image"] && (
          <span className={styles.error_message}>
            {errors["image"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="certificates" className={styles.admin__control_label}>
          Зображення сертифікатів
        </label>
        <AdminImage
          {...getSliderRootProps({
            isdragactive: isSliderDragActive.toString(),
            isdragaccept: isSliderDragAccept.toString(),
            isdragreject: isSliderDragReject.toString(),
            isfocused: isSliderFocused.toString(),
          })}
        >
          <input {...getSliderInputProps()} />
          {isSliderDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть файли сюди, або клацніть для вибору файлів</p>
          )}
        </AdminImage>
        <ul className={styles.admin__drag_slider}>
          {sliderImagesPreview &&
            sliderImagesPreview.map((preview, index) => (
              <li key={index} className={styles.admin__drag_preview}>
                <img
                  className={styles.admin__drag_image}
                  src={preview}
                  alt={`Slider preview ${index}`}
                  width={100}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="name_ua" className={styles.admin__control_label}>
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
      <div className={styles.admin__block_actions}>
        <button
          className={styles.admin__actions_button}
          type="submit"
          disabled={isLoading || !isValid}
        >
          {isLoading ? "Загрузка..." : "Підтвердити"}
        </button>
        <button
          onClick={toggleWorkersForm}
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

export default AdminWorkersForm;
