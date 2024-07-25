import React, { useCallback, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import styles from "./AdminIndividualInsolesForm.module.css";
import { createIndividualInsole } from "../../../../../../services/individual-insoles/individualInsoles";

interface Props {
  toggleIndividualForm: () => void;
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

const AdminIndividualInsolesForm: React.FC<Props> = ({
  toggleIndividualForm,
  getAll,
}) => {
  const [individualImages, setIndividualImages] = useState<File[]>([]);
  const [individualImagesPreview, setIndividualImagesPreview] = useState<
    string[] | null
  >(null);
  const [characteristicsUA, setCharacteristicsUA] = useState<
    { key: string; value: string }[]
  >([]);
  const [characteristicsEN, setCharacteristicsEN] = useState<
    { key: string; value: string }[]
  >([]);
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

  const onDropIndividualImages = useCallback((acceptedFiles: File[]) => {
    const files = acceptedFiles;
    setIndividualImages((prevSliderImages) => [...prevSliderImages, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setIndividualImagesPreview((prevPreviews) => [
      ...(prevPreviews || []),
      ...newPreviews,
    ]);
  }, []);

  const {
    getRootProps: getIndividualRootProps,
    getInputProps: getIndividualInputProps,
    isDragActive: isIndividualDragActive,
    isDragAccept: isIndividualDragAccept,
    isDragReject: isIndividualDragReject,
    isFocused: isIndividualFocused,
  } = useDropzone({
    onDrop: onDropIndividualImages,
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

    individualImages.forEach((file) => {
      formData.append("image_url", file);
    });

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
        const response = await createIndividualInsole(formData, token);
        getAll();
        notify(response.message);
        navigate("/admin");
        reset();
        toggleIndividualForm();
      } catch (error) {
        console.error("Error creating individual:", error);
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
          Зображення індивідуальних устілок
        </label>
        <AdminImage
          {...getIndividualRootProps({
            isdragactive: isIndividualDragActive.toString(),
            isdragaccept: isIndividualDragAccept.toString(),
            isdragreject: isIndividualDragReject.toString(),
            isfocused: isIndividualFocused.toString(),
          })}
        >
          <input {...getIndividualInputProps()} />
          {isIndividualDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть файли сюди, або клацніть</p>
          )}
        </AdminImage>
        <ul className={styles.admin__drag_slider}>
          {individualImagesPreview &&
            individualImagesPreview.map(
              (individualImagePreview: string, index: number) => (
                <li key={index} className={styles.admin__drag_preview}>
                  <img
                    className={styles.admin__drag_image}
                    src={individualImagePreview}
                    alt={`individual preview ${index}`}
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
          Назва індивідуальних устілок (Укр)
        </label>
        <input
          type="text"
          className={`${styles.admin__control_field} `}
          style={errors["name_ua"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Назва індивідуальних устілок (Укр)"
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
          Назва індивідуальних устілок (Англ)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={errors["name_en"] ? { border: "1px solid #EB001B" } : {}}
          placeholder="Назва індивідуальних устілок (Англ)"
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
          Ціна індивідуальних устілок
        </label>
        <input
          type="text"
          style={errors["base_price"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder="Ціна індивідуальних устілок"
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
          Артикул індивідуальних устілок
        </label>
        <input
          type="text"
          style={errors["article"] ? { border: "1px solid #EB001B" } : {}}
          className={styles.admin__control_field}
          placeholder="Артикул індивідуальних устілок"
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
          htmlFor="article_variation_ua"
          className={styles.admin__control_label}
        >
          Артикул покриття (Укр)
        </label>
        <input
          type="text"
          style={
            errors["article_variation_ua"]
              ? { border: "1px solid #EB001B" }
              : {}
          }
          className={styles.admin__control_field}
          placeholder="Артикул покриття (Укр)"
          {...register("article_variation_ua", {
            required: `Це поле обов'язкове!`,
          })}
        />
        {errors["article_variation_ua"] && (
          <span className={styles.error_message}>
            {errors["article_variation_ua"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label
          htmlFor="article_variation_en"
          className={styles.admin__control_label}
        >
          Артикул покриття (Англ)
        </label>
        <input
          type="text"
          style={
            errors["article_variation_en"]
              ? { border: "1px solid #EB001B" }
              : {}
          }
          className={styles.admin__control_field}
          placeholder="Артикул покриття (Англ)"
          {...register("article_variation_en", {
            required: `Це поле обов'язкове!`,
          })}
        />
        {errors["article_variation_en"] && (
          <span className={styles.error_message}>
            {errors["article_variation_en"]?.message as string}
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
          onClick={toggleIndividualForm}
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

export default AdminIndividualInsolesForm;
