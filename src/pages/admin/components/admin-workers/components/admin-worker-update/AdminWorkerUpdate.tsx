import React, { useCallback, useEffect, useState } from "react";
import styles from "../admin-workers-form/AdminWorkersForm.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  getWorkerById,
  updateWorker,
} from "../../../../../../services/workers/workers";
import AdminError from "../../../../admin-error/AdminError";
import styled from "styled-components";
import { Accept, useDropzone } from "react-dropzone";
import { IWorker } from "../../../../../../services/workers/worker.interface";

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

const AdminWorkerUpdate: React.FC = () => {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [sliderImages, setSliderImages] = useState<File[]>([]);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [sliderImagesPreview, setSliderImagesPreview] = useState<
    string[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editWorker, setEditWorker] = useState<IWorker>();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditUploadOpen, setEditUploadOpen] = useState(false);
  const [isEditUploadSlidersOpen, setEditUploadSlidersOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

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

  useEffect(() => {
    const getEditedWorker = async () => {
      try {
        const editedWorker: IWorker = await getWorkerById(id!);
        setEditWorker(editedWorker);

        if (editedWorker) {
          const updatedObject = {
            image_url: editedWorker?.image_url,
            name_ua: editedWorker?.name_ua,
            name_en: editedWorker?.name_en,
            subtitle_ua: editedWorker?.subtitle_ua,
            subtitle_en: editedWorker?.subtitle_en,
            first_description_ua: editedWorker?.first_description_ua,
            first_description_en: editedWorker?.first_description_en,
            second_description_ua: editedWorker?.second_description_ua,
            second_description_en: editedWorker?.second_description_en,
            third_description_ua: editedWorker?.third_description_ua,
            third_description_en: editedWorker?.third_description_en,
            slider_images: editedWorker?.slider_images,
          };

          reset(updatedObject);
        }
      } catch (error) {
        console.log(error);
        return <AdminError />;
      }
    };

    getEditedWorker();
  }, []);

  const notify = (message: string) => toast(message);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    if (mainImage !== null) {
      formData.append("image", mainImage);
    }

    if (sliderImages.length > 0) {
      sliderImages.forEach((file) => {
        formData.append("slider_images", file);
      });
    }

    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await updateWorker(formData, id!, token);
        notify(response.message);
        navigate("/admin");
        reset();
      } else {
        return <AdminError />;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePhoto = () => {
    setEditUploadOpen((prevState) => !prevState);
  };

  const handleChangeSliders = () => {
    setEditUploadSlidersOpen((prevState) => !prevState);
  };

  return (
    <section className={styles.admin__update_section}>
      <div className={styles.container}>
        <div className={styles.admin__update_wrapper}>
          <div className={styles.admin__wrapper_route}>
            <NavLink to={"/"}>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                className={styles.admin__router_icon}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.9412 9.69951C15.61 9.92767 15.2538 9.98393 14.8538 9.96518C14.8507 11.6123 14.8663 13.2251 14.8444 14.866C14.8288 15.7411 14.0819 16.4756 13.207 16.4912C12.332 16.5069 11.454 16.4975 10.5759 16.4944C10.2946 16.4944 10.1071 16.2912 10.1071 15.9911C10.104 15.2504 10.1071 14.5097 10.104 13.7689C10.104 13.2813 10.104 12.7906 10.104 12.3031C10.1009 11.7998 9.78529 11.4779 9.27594 11.4717C8.79783 11.4654 8.31973 11.4654 7.84163 11.4717C7.34478 11.4779 7.02605 11.803 7.02605 12.2999C7.02292 13.5095 7.02292 14.7159 7.02292 15.9255C7.02292 16.3287 6.85418 16.4975 6.44795 16.4975C5.65424 16.4975 4.86053 16.4975 4.06682 16.4975C3.02 16.4944 2.27629 15.763 2.27004 14.7128C2.26379 13.1313 2.26691 11.5467 2.26691 9.96518C0.816983 10.1027 -0.0267248 8.47119 1.01072 7.41789C3.15437 5.2738 5.29801 3.1297 7.44478 0.988734C7.57915 0.848087 7.73539 0.732443 7.90725 0.638678C8.40723 0.388638 9.18532 0.466776 9.66029 0.954354C10.8634 2.18893 12.0914 3.3985 13.3101 4.61744C14.2444 5.55509 15.1725 6.49899 16.1225 7.42414C16.7474 8.03362 16.6881 9.20255 15.9412 9.69951Z"
                  stroke="white"
                  strokeOpacity="0.8"
                />
              </svg>
            </NavLink>
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.admin__router_arrow}
            />
            <NavLink
              to={"/admin"}
              className={`${styles.admin__router_name} ${styles.admin__router_active}`}
            >
              Адмін панель
            </NavLink>
            <img
              src="../../images/navigation-arrow.svg"
              alt="router arrow"
              className={styles.admin__router_arrow}
            />
            <p
              className={`${styles.admin__router_name} ${styles.admin__router_active}`}
            >
              Редагування документу
            </p>
          </div>
          <h2 className={styles.admin__wrapper_title}>
            Оновлення даних працівника
          </h2>
          <div className={styles.admin__wrapper_main}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.admin__form_block}
            >
              <div
                className={`${styles.admin__block_control} ${styles.admin__control_block}`}
              >
                {!isEditUploadOpen && (
                  <div className={styles.admin__control_item}>
                    <label
                      htmlFor="image"
                      className={styles.admin__control_label}
                    >
                      Зображення робітника
                    </label>
                    <img
                      src={editWorker?.image_url}
                      alt="worker banner"
                      className={styles.admin__control_image}
                    />
                  </div>
                )}
                <div className={styles.admin__control_item}>
                  <button
                    onClick={handleChangePhoto}
                    className={styles.admin__control_add}
                    type="button"
                  >
                    {!isEditUploadOpen ? "Змінити фото" : "Скасувати"}
                  </button>
                  {isEditUploadOpen && (
                    <div className={styles.admin__control_upload}>
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
                          <p>Клацніть або перетягніть файли</p>
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
                      {errors["image_url"] && (
                        <span className={styles.error_message}>
                          {errors["image_url"]?.message as string}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`${styles.admin__block_control} ${styles.admin__control_block}`}
              >
                {!isEditUploadSlidersOpen && (
                  <div className={styles.admin__control_item}>
                    <label
                      htmlFor="image"
                      className={styles.admin__control_label}
                    >
                      Зображення фото сертифікатів
                    </label>
                    <ul className={styles.admin__drag_slider}>
                      {editWorker?.slider_images &&
                        editWorker?.slider_images.map(
                          (image_url: string, index: number) => (
                            <li
                              key={index}
                              className={styles.admin__drag_preview}
                            >
                              <img
                                className={styles.admin__drag_image}
                                src={image_url}
                                alt={`slider preview ${index}`}
                              />
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                )}
                <div className={styles.admin__control_item}>
                  <button
                    onClick={handleChangeSliders}
                    className={styles.admin__control_add}
                    type="button"
                  >
                    {!isEditUploadSlidersOpen
                      ? "Змінити фото сертифікатів"
                      : "Скасувати"}
                  </button>
                  {isEditUploadSlidersOpen && (
                    <div className={styles.admin__control_upload}>
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
                          <p>Перетягніть або клацніть для вибору файлів</p>
                        )}
                      </AdminImage>
                      <ul className={styles.admin__drag_slider}>
                        {sliderImagesPreview &&
                          sliderImagesPreview.map((preview, index) => (
                            <li
                              key={index}
                              className={styles.admin__drag_preview}
                            >
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
                  )}
                </div>
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="fullName_ua"
                  className={styles.admin__control_label}
                >
                  Ім'я та прізвище працівника (Укр)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["name_ua"] ? { border: "1px solid #EB001B" } : {}
                  }
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
                <label
                  htmlFor="name_en"
                  className={styles.admin__control_label}
                >
                  Ім'я та прізвище працівника (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["name_en"] ? { border: "1px solid #EB001B" } : {}
                  }
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
                <label
                  htmlFor="subtitle_ua"
                  className={styles.admin__control_label}
                >
                  Напрямок працівника (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["subtitle_ua"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Напрямок працівника (Укр)"
                  {...register("subtitle_ua", {
                    required: `Це поле обов'язкове!`,
                  })}
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
                  style={
                    errors["subtitle_en"] ? { border: "1px solid #EB001B" } : {}
                  }
                  className={styles.admin__control_field}
                  placeholder="Напрямок працівника (Англ)"
                  {...register("subtitle_en", {
                    required: `Це поле обов'язкове!`,
                  })}
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
                  className={`${styles.admin__actions_button} ${styles.admin__button_full}`}
                  type="submit"
                  disabled={isLoading || !isValid}
                >
                  {isLoading ? "Загрузка..." : "Підтвердити"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminWorkerUpdate;
