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
    border-color: #00e676;
  }

  &[isdragaccept="true"] {
    border-color: #00e676;
  }

  &[isdragreject="true"] {
    border-color: #ff1744;
  }

  &[isfocused="true"] {
    border-color: #2196f3;
  }
`;

const AdminProductsForm: React.FC<Props> = ({ toggleProductsForm, getAll }) => {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [characteristics, setCharacteristics] = useState<{ key: string; value: string }[]>([]);
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

  const handleAddCharacteristic = () => {
    setCharacteristics([...characteristics, { key: "", value: "" }]);
  };

  const handleCharacteristicChange = (index: number, key: string, value: string) => {
    const newCharacteristics = [...characteristics];
    newCharacteristics[index] = { key, value };
    setCharacteristics(newCharacteristics);
  };

  const handleRemoveCharacteristic = (index: number) => {
    const newCharacteristics = characteristics.filter((_, i) => i !== index);
    setCharacteristics(newCharacteristics);
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    if (mainImage) {
      formData.append("image", mainImage);
    }

    const characteristicsObject = characteristics.reduce((obj: any, item) => {
      if (item.key && item.value) {
        obj[item.key] = item.value;
      }
      return obj;
    }, {});
    formData.append("characteristics", JSON.stringify(characteristicsObject));

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    if (token) {
      try {
        const response = await createProduct(formData, token);
        getAll();
        notify(response.message);
        reset();
        toggleProductsForm();
        setMainImage(null);
        setMainImagePreview(null);
        setCharacteristics([]);
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
    <form onSubmit={handleSubmit(onSubmit)} className={styles.admin__form_block}>
      <div className={styles.admin__block_control}>
        <label htmlFor="image" className={styles.admin__control_label}>
          Зображення товару
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
        <label className={styles.admin__control_label}>Характеристики</label>
        {characteristics.map((char, index) => (
          <div key={index} className={styles.admin__dynamic_field}>
            <input
              type="text"
              className={styles.admin__control_field}
              placeholder="Ключ"
              value={char.key}
              onChange={(e) =>
                handleCharacteristicChange(index, e.target.value, char.value)
              }
            />
            <input
              type="text"
              className={styles.admin__control_field}
              placeholder="Значення"
              value={char.value}
              onChange={(e) =>
                handleCharacteristicChange(index, char.key, e.target.value)
              }
            />
            <button
              type="button"
              onClick={() => handleRemoveCharacteristic(index)}
              className={styles.admin__remove_button}
            >
              Видалити
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
