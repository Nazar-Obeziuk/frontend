import React, { useCallback, useState } from "react";
import styles from "./AdminProductsForm.module.css";
import { useForm } from "react-hook-form";
import { useDropzone, Accept } from "react-dropzone";
import styled from "styled-components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createProduct } from "../../../../../../services/products/product";

interface Props {
  toggleProductsForm: () => void;
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

const AdminProductsForm: React.FC<Props> = ({ toggleProductsForm, getAll }) => {
  const [productImages, setProductImages] = useState<File[]>([]);
  const [productImagesPreview, setProductImagesPreview] = useState<
    string[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
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

  const onDropProductImages = useCallback((acceptedFiles: File[]) => {
    const files = acceptedFiles;
    setProductImages((prevProductImages) => [...prevProductImages, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setProductImagesPreview((prevPreviews) => [
      ...(prevPreviews || []),
      ...newPreviews,
    ]);
  }, []);

  const {
    getRootProps: getProductsRootProps,
    getInputProps: getProductsInputProps,
    isDragActive: isProductsDragActive,
    isDragAccept: isProductsDragAccept,
    isDragReject: isProductsDragReject,
    isFocused: isProductsFocused,
  } = useDropzone({
    onDrop: onDropProductImages,
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
      formData.append(key, data[key]);
    });

    if (productImages) {
      productImages.forEach((file) => {
        formData.append("images", file);
      });
    }

    const characteristicsObjectUA = characteristicsUA.reduce(
      (obj: any, item) => {
        if (item.key && item.value) {
          obj[item.key] = item.value;
        }
        return obj;
      },
      {}
    );

    const characteristicsObjectEN = characteristicsEN.reduce(
      (obj: any, item) => {
        if (item.key && item.value) {
          obj[item.key] = item.value;
        }
        return obj;
      },
      {}
    );

    formData.append(
      "characteristics_ua",
      JSON.stringify(characteristicsObjectUA)
    );
    formData.append(
      "characteristics_en",
      JSON.stringify(characteristicsObjectEN)
    );

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    if (token) {
      try {
        const response = await createProduct(formData, token);
        getAll();
        notify(response.message);
        reset();
        toggleProductsForm();
        setProductImages([]);
        setProductImagesPreview(null);
        setCharacteristicsUA([]);
        setCharacteristicsEN([]);
      } catch (error) {
        console.error("Error creating product:", error);
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
          Зображення товару
        </label>
        <AdminImage
          {...getProductsRootProps({
            isdragactive: isProductsDragActive.toString(),
            isdragaccept: isProductsDragAccept.toString(),
            isdragreject: isProductsDragReject.toString(),
            isfocused: isProductsFocused.toString(),
          })}
        >
          <input {...getProductsInputProps()} />
          {isProductsDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть файли сюди, або клацніть</p>
          )}
        </AdminImage>
        <ul className={styles.admin__drag_slider}>
          {productImagesPreview &&
            productImagesPreview.map(
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
        <label htmlFor="name_ua" className={styles.admin__control_label}>
          Назва товару (Укр)
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["name_ua"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Назва товару (Укр)"
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
          Назва товару (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["name_en"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Назва товару (Англ)"
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
          Опис товару (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={
            errors["description_ua"] ? { border: "1px solid #EB001B" } : {}
          }
          placeholder="Опис товару (Укр)"
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
          Опис товару (Англ)
        </label>
        <input
          type="text"
          style={
            errors["description_en"] ? { border: "1px solid #EB001B" } : {}
          }
          className={styles.admin__control_field}
          placeholder="Опис товару (Англ)"
          {...register("description_en", { required: `Це поле обов'язкове!` })}
        />
        {errors["description_en"] && (
          <span className={styles.error_message}>
            {errors["description_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="base_price" className={styles.admin__control_label}>
          Ціна товару
        </label>
        <input
          type="text"
          style={errors["base_price"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder="Ціна товару"
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
          Артикул товару
        </label>
        <input
          type="text"
          style={errors["article"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder="Артикул товару"
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
          htmlFor="article_variation"
          className={styles.admin__control_label}
        >
          Артикул варіації
        </label>
        <input
          type="text"
          style={
            errors["article_variation"] ? { border: "1px solid #EB001B" } : {}
          }
          className={styles.admin__control_field}
          placeholder="Артикул варіації"
          {...register("article_variation", {
            required: `Це поле обов'язкове!`,
          })}
        />
        {errors["article_variation"] && (
          <span className={styles.error_message}>
            {errors["article_variation"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="description_details_ua"
          className={styles.admin__control_label}
        >
          Текст опис в середині товару (Укр)
        </label>
        <input
          type="text"
          style={
            errors["description_details_ua"]
              ? { border: "1px solid #EB001B" }
              : {}
          }
          className={styles.admin__control_field}
          placeholder="Текст опис в середині товару (Укр)"
          {...register("description_details_ua", {
            required: `Це поле обов'язкове!`,
          })}
        />
        {errors["description_details_ua"] && (
          <span className={styles.error_message}>
            {errors["description_details_ua"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="description_details_en"
          className={styles.admin__control_label}
        >
          Текст опис в середині товару (Англ)
        </label>
        <input
          type="text"
          style={
            errors["description_details_en"]
              ? { border: "1px solid #EB001B" }
              : {}
          }
          className={styles.admin__control_field}
          placeholder="Текст опис в середині товару (Англ)"
          {...register("description_details_en", {
            required: `Це поле обов'язкове!`,
          })}
        />
        {errors["description_details_en"] && (
          <span className={styles.error_message}>
            {errors["description_details_en"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="description_characteristics_ua"
          className={styles.admin__control_label}
        >
          Текст характеристики (Укр)
        </label>
        <input
          type="text"
          style={
            errors["description_characteristics_ua"]
              ? { border: "1px solid #EB001B" }
              : {}
          }
          className={styles.admin__control_field}
          placeholder="Текст характеристики (Укр)"
          {...register("description_characteristics_ua", {
            required: `Це поле обов'язкове!`,
          })}
        />
        {errors["description_characteristics_ua"] && (
          <span className={styles.error_message}>
            {errors["description_characteristics_ua"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="description_characteristics_en"
          className={styles.admin__control_label}
        >
          Текст характеристики (Англ)
        </label>
        <input
          type="text"
          style={
            errors["description_characteristics_en"]
              ? { border: "1px solid #EB001B" }
              : {}
          }
          className={styles.admin__control_field}
          placeholder="Текст характеристики (Англ)"
          {...register("description_characteristics_en", {
            required: `Це поле обов'язкове!`,
          })}
        />
        {errors["description_characteristics_en"] && (
          <span className={styles.error_message}>
            {errors["description_characteristics_en"]?.message as string}
          </span>
        )}
      </div>
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
          onClick={toggleProductsForm}
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

export default AdminProductsForm;
