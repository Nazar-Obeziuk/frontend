import React, { useCallback, useEffect, useState } from "react";
import styles from "../../../../../admin-individual-insoles-form/AdminIndividualInsolesForm.module.css";
import AdminError from "../../../../../../../../admin-error/AdminError";
import { toast } from "react-toastify";
import { Accept, useDropzone } from "react-dropzone";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useFieldArray, useForm } from "react-hook-form";
import styled from "styled-components";
import { IIndividualVariation } from "../../../../../../../../../../services/individual-insoles/individualInsoles.interface";
import {
  getIndividualVariationById,
  updateIndividualVariation,
} from "../../../../../../../../../../services/individual-insoles/individualInsoles";

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

const AdminIndividualInsolesVariationUpdate: React.FC = () => {
  const [coverageImage, setCoverageImage] = useState<File | null>(null);
  const [coverageImagePreview, setCoverageImagePreview] = useState<
    string | null
  >(null);
  const [individualImages, setIndividualImages] = useState<File[]>([]);
  const [individualImagesPreview, setIndividualImagesPreview] = useState<
    string[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [editVariation, setEditVariation] = useState<IIndividualVariation>();
  const [isEditUploadOpen, setEditUploadOpen] = useState(false);
  const [isEditUploadIndividualsOpen, setEditUploadIndividualsOpen] =
    useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
  } = useForm({
    mode: "onChange",
  });
  const { fields: fieldsUA } = useFieldArray({
    control,
    name: "characteristics_ua",
  });
  const { fields: fieldsEN } = useFieldArray({
    control,
    name: "characteristics_en",
  });

  const acceptType: Accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif"],
  };

  const onDropCoverageImage = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setCoverageImage(file);
    setCoverageImagePreview(URL.createObjectURL(file));
  }, []);

  const {
    getRootProps: getCoverageImageRootProps,
    getInputProps: getCoverageImageInputProps,
    isDragActive: isCoverageImageDragActive,
    isDragAccept: isCoverageImageDragAccept,
    isDragReject: isCoverageImageDragReject,
    isFocused: isCoverageImageFocused,
  } = useDropzone({
    onDrop: onDropCoverageImage,
    multiple: false,
    accept: acceptType,
  });

  const onDroIndividualImages = useCallback((acceptedFiles: File[]) => {
    const files = acceptedFiles;
    setIndividualImages((prevIndividualImages) => [
      ...prevIndividualImages,
      ...files,
    ]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setIndividualImagesPreview((prevPreviews) => [
      ...(prevPreviews || []),
      ...newPreviews,
    ]);
  }, []);

  const {
    getRootProps: getIndividualImagesRootProps,
    getInputProps: getIndividualImagesInputProps,
    isDragActive: isIndividualImagesDragActive,
    isDragAccept: isIndividualImagesDragAccept,
    isDragReject: isIndividualImagesDragReject,
    isFocused: isIndividualImagesFocused,
  } = useDropzone({
    onDrop: onDroIndividualImages,
    multiple: true,
    accept: acceptType,
  });

  useEffect(() => {
    const getEditedVariation = async () => {
      try {
        const editedVariation: IIndividualVariation =
          await getIndividualVariationById(+id!);
        setEditVariation(editedVariation);

        if (editedVariation) {
          const characteristicsArrayUA = editedVariation.characteristics_ua
            ? Object.entries(editedVariation.characteristics_ua).map(
                ([key, value]) => ({
                  key,
                  value,
                })
              )
            : [];

          const characteristicsArrayEN = editedVariation.characteristics_en
            ? Object.entries(editedVariation.characteristics_en).map(
                ([key, value]) => ({
                  key,
                  value,
                })
              )
            : [];

          const updatedObject = {
            variation_type: editedVariation.variation_type,
            variation_value: editedVariation.variation_value,
            additional_price: editedVariation.additional_price,
            image: editedVariation.image,
            image_url: editedVariation.image_url,
            article: editedVariation.article,
            category: editedVariation.category,
            variation_description_en: editedVariation.variation_description_en,
            variation_description_ua: editedVariation.variation_description_ua,
            first_about_description_ua:
              editedVariation.first_about_description_ua,
            first_about_description_en:
              editedVariation.first_about_description_en,
            second_about_description_ua:
              editedVariation.second_about_description_ua,
            second_about_description_en:
              editedVariation.second_about_description_en,
            third_about_description_ua:
              editedVariation.third_about_description_ua,
            third_about_description_en:
              editedVariation.third_about_description_en,
            fourth_about_description_ua:
              editedVariation.fourth_about_description_ua,
            fourth_about_description_en:
              editedVariation.fourth_about_description_en,
            characteristics_subtitle_ua:
              editedVariation.characteristics_subtitle_ua,
            characteristics_subtitle_en:
              editedVariation.characteristics_subtitle_en,
            characteristics_description_ua:
              editedVariation.characteristics_description_ua,
            characteristics_description_en:
              editedVariation.characteristics_description_en,
            characteristics_ua: characteristicsArrayUA,
            characteristics_en: characteristicsArrayEN,
          };

          reset(updatedObject);
        }
      } catch (error) {
        console.log(error);
        return <AdminError />;
      }
    };

    getEditedVariation();
  }, [id, reset]);

  const notify = (message: string) => toast(message);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key !== "characteristics_ua" && key !== "characteristics_en") {
        formData.append(key, data[key]);
      }
    });

    if (coverageImage) {
      formData.append("image", coverageImage);
    }

    if (individualImages.length > 0) {
      individualImages.forEach((file) => {
        formData.append("image_url", file);
      });
    }

    if (data.characteristics_ua) {
      const characteristicsUA = data.characteristics_ua.reduce(
        (obj: any, item: any) => {
          obj[item.key] = item.value;
          return obj;
        },
        {}
      );
      formData.append("characteristics_ua", JSON.stringify(characteristicsUA));
    }

    if (data.characteristics_en) {
      const characteristicsEN = data.characteristics_en.reduce(
        (obj: any, item: any) => {
          obj[item.key] = item.value;
          return obj;
        },
        {}
      );
      formData.append("characteristics_en", JSON.stringify(characteristicsEN));
    }

    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await updateIndividualVariation(id!, formData, token);
        notify(response.message);
        navigate("/admin");
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

  const handleChangeIndividuals = () => {
    setEditUploadIndividualsOpen((prevState) => !prevState);
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
              Редагування варіації
            </p>
          </div>
          <h2 className={styles.admin__wrapper_title}>
            Оновлення даних варіації
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
                      Зображення покриття
                    </label>
                    <img
                      src={editVariation?.image}
                      alt="individual banner"
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
                        {...getCoverageImageRootProps({
                          isdragactive: isCoverageImageDragActive.toString(),
                          isdragaccept: isCoverageImageDragAccept.toString(),
                          isdragreject: isCoverageImageDragReject.toString(),
                          isfocused: isCoverageImageFocused.toString(),
                        })}
                      >
                        <input {...getCoverageImageInputProps()} />
                        {isCoverageImageDragActive ? (
                          <p>Перетягніть сюди файли ...</p>
                        ) : (
                          <p>Клацніть або перетягніть файли</p>
                        )}
                      </AdminImage>
                      {coverageImagePreview && (
                        <ul className={styles.admin__drag_slider}>
                          <img
                            className={styles.admin__drag_image}
                            src={coverageImagePreview!}
                            alt={"coverage preview"}
                          />
                        </ul>
                      )}
                      {errors["image"] && (
                        <span className={styles.error_message}>
                          {errors["image"]?.message as string}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div
                className={`${styles.admin__block_control} ${styles.admin__control_block}`}
              >
                {!isEditUploadIndividualsOpen && (
                  <div className={styles.admin__control_item}>
                    <label
                      htmlFor="image"
                      className={styles.admin__control_label}
                    >
                      Зображення індивідуальних устілок
                    </label>
                    <ul className={styles.admin__drag_slider}>
                      {editVariation?.image_url &&
                        editVariation?.image_url.map(
                          (individual_image: string, index: number) => (
                            <img
                              key={index}
                              src={individual_image}
                              alt="individual img"
                              className={styles.admin__control_image}
                            />
                          )
                        )}
                    </ul>
                  </div>
                )}
                <div className={styles.admin__control_item}>
                  <button
                    onClick={handleChangeIndividuals}
                    className={styles.admin__control_add}
                    type="button"
                  >
                    {!isEditUploadIndividualsOpen
                      ? "Змінити фото товару"
                      : "Скасувати"}
                  </button>
                  {isEditUploadIndividualsOpen && (
                    <div className={styles.admin__control_upload}>
                      <AdminImage
                        {...getIndividualImagesRootProps({
                          isdragactive: isIndividualImagesDragActive.toString(),
                          isdragaccept: isIndividualImagesDragAccept.toString(),
                          isdragreject: isIndividualImagesDragReject.toString(),
                          isfocused: isIndividualImagesFocused.toString(),
                        })}
                      >
                        <input {...getIndividualImagesInputProps()} />
                        {isIndividualImagesDragActive ? (
                          <p>Перетягніть сюди файли ...</p>
                        ) : (
                          <p>Перетягніть або клацніть для вибору файлів</p>
                        )}
                      </AdminImage>
                      <ul className={styles.admin__drag_slider}>
                        {individualImagesPreview &&
                          individualImagesPreview.map(
                            (individualImagePreview: string, index: number) => (
                              <li
                                key={index}
                                className={styles.admin__drag_preview}
                              >
                                <img
                                  className={styles.admin__drag_image}
                                  src={individualImagePreview}
                                  alt={`individual preview ${index}`}
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
                  htmlFor="variation_type"
                  className={styles.admin__control_label}
                >
                  Тип варіації
                </label>
                <select
                  style={
                    errors["variation_type"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  {...register("variation_type", {
                    required: `Це поле обов'язкове!`,
                  })}
                  className={styles.admin__control_field}
                >
                  <option value="coverage" defaultValue={"Покриття"}>
                    Покриття
                  </option>
                </select>
                {errors["variation_type"] && (
                  <span className={styles.error_message}>
                    {errors["variation_type"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="variation_value"
                  className={styles.admin__control_label}
                >
                  Значення варіації
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["variation_value"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Значення варіації"
                  {...register("variation_value", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["variation_value"] && (
                  <span className={styles.error_message}>
                    {errors["variation_value"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="additional_price"
                  className={styles.admin__control_label}
                >
                  Ціна товару при змінні варіації
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["additional_price"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Ціна товару при змінні варіації"
                  {...register("additional_price", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["additional_price"] && (
                  <span className={styles.error_message}>
                    {errors["additional_price"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="article"
                  className={styles.admin__control_label}
                >
                  Артикул товару при змінні варіації
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["article"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Артикул товару при змінні варіації"
                  {...register("article", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["article"] && (
                  <span className={styles.error_message}>
                    {errors["article"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="category"
                  className={styles.admin__control_label}
                >
                  Категорія індивідуальних устілок
                </label>
                <select
                  style={
                    errors["category"] ? { border: "1px solid #EB001B" } : {}
                  }
                  {...register("category", {
                    required: `Це поле обов'язкове!`,
                  })}
                  className={styles.admin__control_field}
                >
                  <option value="people" defaultValue={"Для дітей та дорослих"}>
                    Для дітей та дорослих
                  </option>
                  <option value="sport">Спортивні устілки</option>
                  <option value="diabetic">Діабетичні устілки</option>
                </select>
                {errors["category"] && (
                  <span className={styles.error_message}>
                    {errors["category"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="variation_description_ua"
                  className={styles.admin__control_label}
                >
                  Текст покриття при змінні варіації (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["variation_description_ua"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Текст покриття при змінні варіації (Укр)"
                  {...register("variation_description_ua", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["variation_description_ua"] && (
                  <span className={styles.error_message}>
                    {errors["variation_description_ua"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="variation_description_en"
                  className={styles.admin__control_label}
                >
                  Текст покриття при змінні варіації (Англ)
                </label>
                <input
                  type="text"
                  style={
                    errors["variation_description_en"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  className={styles.admin__control_field}
                  placeholder="Текст покриття при змінні варіації (Англ)"
                  {...register("variation_description_en", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["variation_description_en"] && (
                  <span className={styles.error_message}>
                    {errors["variation_description_en"]?.message as string}
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
                  htmlFor="fourth_about_description_ua"
                  className={styles.admin__control_label}
                >
                  Четвертий опис про товар (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Четвертий опис про товар (Укр)"
                  {...register("fourth_about_description_ua", {
                    required: false,
                  })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="fourth_about_description_en"
                  className={styles.admin__control_label}
                >
                  Четвертий опис про товар (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Четвертий опис про товар (Англ)"
                  {...register("fourth_about_description_en", {
                    required: false,
                  })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="characteristics_subtitle_ua"
                  className={styles.admin__control_label}
                >
                  Підзаголовок характеристики (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Підзаголовок характеристики (Укр)"
                  {...register("characteristics_subtitle_ua", {
                    required: false,
                  })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="characteristics_subtitle_en"
                  className={styles.admin__control_label}
                >
                  Підзаголовок характеристики (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Підзаголовок характеристики (Англ)"
                  {...register("characteristics_subtitle_en", {
                    required: false,
                  })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="characteristics_description_ua"
                  className={styles.admin__control_label}
                >
                  Текст опис характеристики (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Текст опис характеристики (Укр)"
                  {...register("characteristics_description_ua", {
                    required: false,
                  })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="characteristics_description_en"
                  className={styles.admin__control_label}
                >
                  Текст опис характеристики (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Текст опис характеристики (Англ)"
                  {...register("characteristics_description_en", {
                    required: false,
                  })}
                />
              </div>
              <div className={styles.admin__block_control}>
                {fieldsUA.map((item, index) => (
                  <div key={index} className={styles.admin__control_char}>
                    <label className={styles.admin__control_label}>
                      Характеристика {index + 1} (UA)
                    </label>
                    <input
                      type="text"
                      placeholder="Назва характеристики"
                      {...register(`characteristics_ua.${index}.key`, {
                        required: "Це поле обов'язкове!",
                      })}
                      className={styles.admin__control_field}
                    />
                    <input
                      type="text"
                      placeholder="Значення характеристики"
                      {...register(`characteristics_ua.${index}.value`, {
                        required: "Це поле обов'язкове!",
                      })}
                      className={styles.admin__control_field}
                    />
                  </div>
                ))}
              </div>
              <div className={styles.admin__block_control}>
                {fieldsEN.map((item, index) => (
                  <div key={index} className={styles.admin__control_char}>
                    <label className={styles.admin__control_label}>
                      Характеристика {index + 1} (EN)
                    </label>
                    <input
                      type="text"
                      placeholder="Назва характеристики"
                      {...register(`characteristics_en.${index}.key`, {
                        required: "Це поле обов'язкове!",
                      })}
                      className={styles.admin__control_field}
                    />
                    <input
                      type="text"
                      placeholder="Значення характеристики"
                      {...register(`characteristics_en.${index}.value`, {
                        required: "Це поле обов'язкове!",
                      })}
                      className={styles.admin__control_field}
                    />
                  </div>
                ))}
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

export default AdminIndividualInsolesVariationUpdate;
