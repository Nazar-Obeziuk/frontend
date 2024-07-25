import React, { useCallback, useState } from "react";
import styles from "../../../../../admin-products-form/AdminProductsForm.module.css";
import { useForm } from "react-hook-form";
import { Accept, useDropzone } from "react-dropzone";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { createProductVariation } from "../../../../../../../../../../services/products/product";

interface Props {
  getAll: () => void;
  productId: number;
  toggleProductVariationForm: () => void;
}

// const getColor = (props: any) => {
//   if (props.isDragAccept) {
//     return "#00e676";
//   }
//   if (props.isDragReject) {
//     return "#ff1744";
//   }
//   if (props.isFocused) {
//     return "#2196f3";
//   }
//   return "#eeeeee";
// };

// const AdminImage = styled.div`
//   width: 100%;
//   padding: 16px 26px 14px 26px;
//   border-width: 1px;
//   border-radius: 12px;
//   border-color: ${(props: any) => getColor(props)};
//   border-style: solid;
//   background-color: transparent;
//   color: rgba(255, 255, 255, 0.5);
//   font-family: "Fixel-Display";
//   font-size: 18px;
//   font-weight: 300;
//   line-height: 20px;
//   outline: none;
//   transition: border 0.24s ease-in-out;
//   display: flex;
//   align-items: center;
//   cursor: pointer;

//   &[isdragactive="true"] {
//     /* Style for drag active */
//   }

//   &[isdragaccept="true"] {
//     /* Style for drag accept */
//     border-color: #ffed00;
//   }

//   &[isdragreject="true"] {
//     /* Style for drag reject */
//     border-color: #ff0000;
//   }

//   &[isfocused="true"] {
//     /* Style for focused */
//     border-color: none;
//   }
// `;

const AdminProductVariationForm: React.FC<Props> = ({
  getAll,
  productId,
  toggleProductVariationForm,
}) => {
  // const [productsImages, setProductsImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [variationImagesPreview, setVariationImagesPreview] = useState<
  //   string[] | null
  // >(null);
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  // const acceptType: Accept = {
  //   "image/*": [".jpeg", ".jpg", ".png", ".gif"],
  // };

  // const onDropProductImages = useCallback((acceptedFiles: File[]) => {
  //   const files = acceptedFiles;
  //   setProductsImages((prevProductImages: any) => [
  //     ...prevProductImages,
  //     ...files,
  //   ]);

  //   const newPreviews = files.map((file) => URL.createObjectURL(file));
  //   setVariationImagesPreview((prevPreviews) => [
  //     ...(prevPreviews || []),
  //     ...newPreviews,
  //   ]);
  // }, []);

  // const {
  //   getRootProps: getSliderRootProps,
  //   getInputProps: getSliderInputProps,
  //   isDragActive: isSliderDragActive,
  //   isDragAccept: isSliderDragAccept,
  //   isDragReject: isSliderDragReject,
  //   isFocused: isSliderFocused,
  // } = useDropzone({
  //   onDrop: onDropProductImages,
  //   multiple: true,
  //   accept: acceptType,
  // });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    // productsImages.forEach((file) => {
    //   formData.append("image", file);
    // });

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    try {
      if (token) {
        const response = await createProductVariation(formData, id!, token);
        notify(response.message);
        reset();
        toggleProductVariationForm();
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
      {/* <div className={styles.admin__block_control}>
        <label htmlFor="image" className={styles.admin__control_label}>
          Зображення варіації
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
            <p>Перетягніть файли сюди, або клацніть...</p>
          )}
        </AdminImage>
        <ul className={styles.admin__drag_slider}>
          {variationImagesPreview &&
            variationImagesPreview.map((preview: string, index: number) => (
              <li key={index} className={styles.admin__drag_preview}>
                <img
                  className={styles.admin__drag_image}
                  src={preview}
                  alt={`variation preview ${index}`}
                />
              </li>
            ))}
        </ul>
      </div> */}
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
          <option value="sizes" defaultValue={"sizes"}>
            Розміра
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
        <select
          style={
            errors["variation_value"] ? { border: "1px solid #EB001B" } : {}
          }
          {...register("variation_value", {
            required: `Це поле обов'язкове!`,
          })}
          className={styles.admin__control_field}
        >
          <option value="21" defaultValue={"21"}>
            21
          </option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
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
          Ціна товару при змінні варіації варіації
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={
            errors["additional_price"] ? { border: "1px solid #EB001B" } : {}
          }
          placeholder="Ціна товару при змінні варіації варіації"
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
        <label htmlFor="description_ua" className={styles.admin__control_label}>
          Текст розміру при змінні варіації (Укр)
        </label>
        <input
          type="text"
          className={styles.admin__control_field}
          style={
            errors["description_ua"] ? { border: "1px solid #EB001B" } : {}
          }
          placeholder="Текст розміру при змінні варіації (Укр)"
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
        <label htmlFor="description_en" className={styles.admin__control_label}>
          Текст розміру при змінні варіації (Англ)
        </label>
        <input
          type="text"
          style={
            errors["description_en"] ? { border: "1px solid #EB001B" } : {}
          }
          className={styles.admin__control_field}
          placeholder="Текст розміру при змінні варіації (Англ)"
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
      <div className={styles.admin__block_actions}>
        <button
          className={styles.admin__actions_button}
          type="submit"
          disabled={isLoading || !isValid}
        >
          {isLoading ? "Загрузка..." : "Підтвердити"}
        </button>
        <button
          onClick={toggleProductVariationForm}
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

export default AdminProductVariationForm;
