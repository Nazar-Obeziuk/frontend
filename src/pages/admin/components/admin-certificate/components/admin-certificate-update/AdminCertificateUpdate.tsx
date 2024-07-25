import React, { useCallback, useEffect, useState } from "react";
import styles from "../admin-certificate-form/AdminCertificateForm.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AdminError from "../../../../admin-error/AdminError";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Accept, useDropzone } from "react-dropzone";
import styled from "styled-components";
import { ICertificate } from "../../../../../../services/gift-certificate/gift-certificate.interface";
import AdminCertificateUpdateReviews from "./components/admin-individual-insoles-update-reviews/AdminCertificateUpdateReviews";
import {
  getCertificateById,
  updateCertificate,
} from "../../../../../../services/gift-certificate/gift-certificate";

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

const AdminCertificateUpdate: React.FC = () => {
  const [certificateImages, setCertificateImages] = useState<File[]>([]);
  const [certificateImagesPreview, setCertificateImagesPreview] = useState<
    string[] | null
  >(null);
  const [isEditUploadOpen, setEditUploadOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editCertificate, setEditCertificate] = useState<ICertificate>();
  const [activeTab, setActiveTab] = useState<"reviews">("reviews");
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();

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

  useEffect(() => {
    const getEditedCertificate = async () => {
      try {
        const editedCertificate: ICertificate = await getCertificateById(id!);
        setEditCertificate(editedCertificate);

        if (editedCertificate) {
          const updatedObject = {
            image_url: editedCertificate.image_url,
            name_ua: editedCertificate.name_ua,
            name_en: editedCertificate.name_en,
            reviews_count: editedCertificate.reviews_count,
            article: editedCertificate.article,
            description_ua: editedCertificate.description_ua,
            description_en: editedCertificate.description_en,
            base_price: editedCertificate.base_price,
            first_about_description_ua:
              editedCertificate.first_about_description_ua,
            first_about_description_en:
              editedCertificate.first_about_description_en,
            second_about_description_ua:
              editedCertificate.second_about_description_ua,
            second_about_description_en:
              editedCertificate.second_about_description_en,
            third_about_description_ua:
              editedCertificate.third_about_description_ua,
            third_about_description_en:
              editedCertificate.third_about_description_en,
            first_use_description_ua:
              editedCertificate.first_use_description_ua,
            first_use_description_en:
              editedCertificate.first_use_description_en,
            second_use_description_ua:
              editedCertificate.second_use_description_ua,
            second_use_description_en:
              editedCertificate.second_use_description_en,
            third_use_description_ua:
              editedCertificate.third_use_description_ua,
            third_use_description_en:
              editedCertificate.third_use_description_en,
            fourth_use_description_ua:
              editedCertificate.fourth_use_description_ua,
            fourth_use_description_en:
              editedCertificate.fourth_use_description_en,
            fifth_use_description_ua:
              editedCertificate.fifth_use_description_ua,
            fifth_use_description_en:
              editedCertificate.fifth_use_description_en,
            sixth_use_description_ua:
              editedCertificate.sixth_use_description_ua,
            sixth_use_description_en:
              editedCertificate.sixth_use_description_en,
            seventh_use_description_ua:
              editedCertificate.seventh_use_description_ua,
            seventh_use_description_en:
              editedCertificate.seventh_use_description_en,
            eighth_use_description_ua:
              editedCertificate.eighth_use_description_ua,
            eighth_use_description_en:
              editedCertificate.eighth_use_description_en,
            nineth_use_description_ua:
              editedCertificate.nineth_use_description_ua,
            nineth_use_description_en:
              editedCertificate.nineth_use_description_en,
          };
          reset(updatedObject);
        }
      } catch (error) {
        console.log(error);
        return <AdminError />;
      }
    };

    getEditedCertificate();
  }, [id, reset]);

  const notify = (message: string) => toast(message);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    if (certificateImages.length > 0) {
      certificateImages.forEach((file) => {
        formData.append("image_url", file);
      });
    }

    const token = localStorage.getItem("token");

    if (token) {
      try {
        // const response = await updateCertificate(formData, id!, token);
        // notify(response.message);
        // navigate("/admin");
        formData.forEach((value, key) => {
          console.log(key, value);
        });
        reset();
      } catch (error) {
        console.log(error);
      }
    } else {
      return <AdminError />;
    }
  };

  const handleChangePhoto = () => {
    setEditUploadOpen((prevState) => !prevState);
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
            Оновлення даних сертифікату
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
                      Зображення сертифікату
                    </label>
                    <ul className={styles.admin__drag_slider}>
                      {editCertificate?.image_url &&
                        editCertificate?.image_url.map(
                          (image_url: string, index: number) => (
                            <li
                              key={index}
                              className={styles.admin__drag_preview}
                            >
                              <img
                                className={styles.admin__drag_image}
                                src={image_url}
                                alt={`certificate preview ${index}`}
                              />
                            </li>
                          )
                        )}
                    </ul>
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
                            (
                              certificateImagePreview: string,
                              index: number
                            ) => (
                              <li
                                key={index}
                                className={styles.admin__drag_preview}
                              >
                                <img
                                  className={styles.admin__drag_image}
                                  src={certificateImagePreview}
                                  alt={`certificate preview ${index}`}
                                />
                              </li>
                            )
                          )}
                      </ul>
                      {errors["image_url"] && (
                        <span className={styles.error_message}>
                          {errors["image_url"]?.message as string}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="name_ua"
                  className={styles.admin__control_label}
                >
                  Назва сертифікату (Укр)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["name_ua"] ? { border: "1px solid #EB001B" } : {}
                  }
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
                <label
                  htmlFor="name_en"
                  className={styles.admin__control_label}
                >
                  Назва сертифікату (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["name_en"] ? { border: "1px solid #EB001B" } : {}
                  }
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
                <label
                  htmlFor="base_price"
                  className={styles.admin__control_label}
                >
                  Ціна сертифікату
                </label>
                <input
                  type="text"
                  style={
                    errors["base_price"] ? { border: "1px solid #EB001B" } : {}
                  }
                  className={styles.admin__control_field}
                  placeholder="Ціна сертифікату"
                  {...register("base_price", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["base_price"] && (
                  <span className={styles.error_message}>
                    {errors["base_price"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="article"
                  className={styles.admin__control_label}
                >
                  Артикул сертифікату
                </label>
                <input
                  type="text"
                  style={
                    errors["article"] ? { border: "1px solid #EB001B" } : {}
                  }
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
                <label
                  htmlFor="description_ua"
                  className={styles.admin__control_label}
                >
                  Опис сертифікату (Укр)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["description_ua"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Опис сертифікату (Укр)"
                  {...register("description_ua", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["description_ua"] && (
                  <span className={styles.error_message}>
                    {errors["description_ua"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="description_en"
                  className={styles.admin__control_label}
                >
                  Опис сертифікату (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["description_en"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Опис сертифікату (Англ)"
                  {...register("description_en", {
                    required: `Це поле обов'язкове!`,
                  })}
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
                  className={`${styles.admin__actions_button} ${styles.admin__button_full}`}
                  type="submit"
                  disabled={isLoading || !isValid}
                >
                  {isLoading ? "Оновлення..." : "Підтвердити"}
                </button>
              </div>
            </form>
            <div className={styles.admin__main_tabs}>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`${styles.admin__tabs_button} ${
                  activeTab === "reviews" ? styles.admin__tabs_active : {}
                }`}
                type="button"
              >
                Відгуки сертифікатів
              </button>
            </div>
            {activeTab === "reviews" && (
              <AdminCertificateUpdateReviews
                key={"uniq1"}
                editCertificate={editCertificate!}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminCertificateUpdate;
