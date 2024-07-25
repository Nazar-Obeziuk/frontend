import React, { useCallback, useState } from "react";
import styles from "../../../../../admin-individual-insoles-form/AdminIndividualInsolesForm.module.css";
import { useForm } from "react-hook-form";
import { Accept, useDropzone } from "react-dropzone";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createIndividualVariation } from "../../../../../../../../../../services/individual-insoles/individualInsoles";

interface Props {
  getAll: () => void;
  productId: number;
  toggleIndividualVariationForm: () => void;
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

const AdminIndividualInsolesVariationForm: React.FC<Props> = ({
  getAll,
  productId,
  toggleIndividualVariationForm,
}) => {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [individualProductsImages, setIndividualProductsImages] = useState<
    File[]
  >([]);
  const [individualProductsImagesPreview, setIndividualProductsImagesPreview] =
    useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const [characteristicsUA, setCharacteristicsUA] = useState<
    { key: string; value: string }[]
  >([]);
  const [characteristicsEN, setCharacteristicsEN] = useState<
    { key: string; value: string }[]
  >([]);
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

  const onDropIndividualProductsImages = useCallback(
    (acceptedFiles: File[]) => {
      const files = acceptedFiles;
      setIndividualProductsImages((prevProductImages) => [
        ...prevProductImages,
        ...files,
      ]);

      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setIndividualProductsImagesPreview((prevPreviews) => [
        ...(prevPreviews || []),
        ...newPreviews,
      ]);
    },
    []
  );

  const {
    getRootProps: getIndividualProductsRootProps,
    getInputProps: getIndividualProductsInputProps,
    isDragActive: isIndividualProductsDragActive,
    isDragAccept: isIndividualProductsDragAccept,
    isDragReject: isIndividualProductsDragReject,
    isFocused: isIndividualProductsFocused,
  } = useDropzone({
    onDrop: onDropIndividualProductsImages,
    multiple: true,
    accept: acceptType,
  });

  const handleAddCharacteristic = () => {
    setCharacteristicsUA([...characteristicsUA, { key: "", value: "" }]);
    setCharacteristicsEN([...characteristicsEN, { key: "", value: "" }]);
  };

  const handleCharacteristicChange = (
    index: number,
    key: string,
    value: string,
    lang: "UA" | "EN"
  ) => {
    if (lang === "UA") {
      const newCharacteristics = [...characteristicsUA];
      newCharacteristics[index] = { key, value };
      setCharacteristicsUA(newCharacteristics);
    } else {
      const newCharacteristics = [...characteristicsEN];
      newCharacteristics[index] = { key, value };
      setCharacteristicsEN(newCharacteristics);
    }
  };

  const handleRemoveCharacteristic = (index: number, lang: "UA" | "EN") => {
    if (lang === "UA") {
      const newCharacteristics = characteristicsUA.filter(
        (_, i) => i !== index
      );
      setCharacteristicsUA(newCharacteristics);
    } else {
      const newCharacteristics = characteristicsEN.filter(
        (_, i) => i !== index
      );
      setCharacteristicsEN(newCharacteristics);
    }
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (key !== "characteristics_ua" && key !== "characteristics_en") {
        formData.append(key, data[key]);
      }
    });

    if (mainImage) {
      formData.append("image", mainImage);
    }

    if (individualProductsImages) {
      individualProductsImages.forEach((file) => {
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

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    try {
      if (token) {
        const response = await createIndividualVariation(formData, id!, token);
        notify(response.message);
        reset();
        toggleIndividualVariationForm();
        getAll();
      } else {
        notify("Авторизуйтеся будь ласка!");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error creating worker:", error);
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
        <label htmlFor="image" className={styles.admin__control_label}>
          Зображення варіації
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
            <p>Перетягніть файли сюди, або клацніть</p>
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
        <label htmlFor="image" className={styles.admin__control_label}>
          Зображення товару
        </label>
        <AdminImage
          {...getIndividualProductsRootProps({
            isdragactive: isIndividualProductsDragActive.toString(),
            isdragaccept: isIndividualProductsDragAccept.toString(),
            isdragreject: isIndividualProductsDragReject.toString(),
            isfocused: isIndividualProductsFocused.toString(),
          })}
        >
          <input {...getIndividualProductsInputProps()} />
          {isIndividualProductsDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть файли сюди, або клацніть</p>
          )}
        </AdminImage>
        <ul className={styles.admin__drag_slider}>
          {individualProductsImagesPreview &&
            individualProductsImagesPreview.map(
              (productImagesPreview: string, index: number) => (
                <li key={index} className={styles.admin__drag_preview}>
                  <img
                    className={styles.admin__drag_image}
                    src={productImagesPreview}
                    alt={`product preview ${index}`}
                    width={100}
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
        <label htmlFor="variation_type" className={styles.admin__control_label}>
          Тип варіації
        </label>
        <select
          style={
            errors["variation_type"] ? { border: "1px solid #EB001B" } : {}
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
            errors["variation_value"] ? { border: "1px solid #EB001B" } : {}
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
            errors["additional_price"] ? { border: "1px solid #EB001B" } : {}
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
        <label htmlFor="article" className={styles.admin__control_label}>
          Артикул товару при змінні варіації
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["article"] ? { border: "1px solid #EB001B" } : {}}
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
        <label htmlFor="category" className={styles.admin__control_label}>
          Категорія індивідуальних устілок
        </label>
        <select
          style={errors["category"] ? { border: "1px solid #EB001B" } : {}}
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
      <div className={styles.admin__block_control}></div>
      {characteristicsUA.map((char, index) => (
        <div key={index} className={styles.admin__block_control}>
          <label className={styles.admin__control_label}>
            Характеристики {index + 1} (Укр)
          </label>
          <input
            type="text"
            className={styles.admin__control_field}
            placeholder="Ключ"
            value={char.key}
            onChange={(e) =>
              handleCharacteristicChange(
                index,
                e.target.value,
                char.value,
                "UA"
              )
            }
          />
          <input
            type="text"
            className={styles.admin__control_field}
            placeholder="Значення"
            value={char.value}
            onChange={(e) =>
              handleCharacteristicChange(index, char.key, e.target.value, "UA")
            }
          />
          <button
            type="button"
            onClick={() => handleRemoveCharacteristic(index, "UA")}
            className={styles.admin__remove_button}
          >
            Видалити характеристику {index + 1}
          </button>
        </div>
      ))}
      {characteristicsEN.map((char, index) => (
        <div key={index} className={styles.admin__block_control}>
          <label className={styles.admin__control_label}>
            Характеристики {index + 1} (Англ)
          </label>
          <input
            type="text"
            className={styles.admin__control_field}
            placeholder="Ключ"
            value={char.key}
            onChange={(e) =>
              handleCharacteristicChange(
                index,
                e.target.value,
                char.value,
                "EN"
              )
            }
          />
          <input
            type="text"
            className={styles.admin__control_field}
            placeholder="Значення"
            value={char.value}
            onChange={(e) =>
              handleCharacteristicChange(index, char.key, e.target.value, "EN")
            }
          />
          <button
            type="button"
            onClick={() => handleRemoveCharacteristic(index, "EN")}
            className={styles.admin__remove_button}
          >
            Видалити характеристику {index + 1}
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddCharacteristic}
        className={styles.admin__add_button}
      >
        Додати характеристику
      </button>
      <div className={styles.admin__block_actions}>
        <button
          className={styles.admin__actions_button}
          type="submit"
          disabled={isLoading || !isValid}
        >
          {isLoading ? "Загрузка..." : "Підтвердити"}
        </button>
        <button
          onClick={toggleIndividualVariationForm}
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

export default AdminIndividualInsolesVariationForm;
