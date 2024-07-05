import React, { useCallback, useEffect, useState } from "react";
import styles from "../admin-products-form/AdminProductsForm.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteProductVariation,
  getAllProductsVariations,
  getProductById,
  updateProduct,
} from "../../../../../../services/products/product";
import AdminError from "../../../../admin-error/AdminError";
import {
  IProduct,
  IProductDetails,
  IProductVariation,
} from "../../../../../../services/products/product.interface";
import { Accept, useDropzone } from "react-dropzone";
import styled from "styled-components";
import AdminProductUpdateVariations from "./components/admin-product-update-variations/AdminProductUpdateVariations";
import AdminProductUpdateReviews from "./components/admin-product-update-reviews/AdminProductUpdateReviews";

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
    border-color: #00e676;
  }

  &[isdragreject="true"] {
    /* Style for drag reject */
    border-color: #ff1744;
  }

  &[isfocused="true"] {
    /* Style for focused */
    border-color: #2196f3;
  }
`;

const AdminProductUpdate: React.FC = () => {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [isEditUploadOpen, setEditUploadOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editProduct, setEditProduct] = useState<IProduct>();
  const [activeTab, setActiveTab] = useState<"variations" | "reviews">(
    "variations"
  );
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
  } = useForm({
    mode: "onChange",
  });
  const { fields } = useFieldArray({
    control,
    name: "characteristics",
  });
  const navigate = useNavigate();

  const acceptType: Accept = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif"],
  };

  const onDropMainImage = useCallback((acceptedFiles: File[]) => {
    setMainImage(acceptedFiles[0]);
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

  useEffect(() => {
    const getEditedProduct = async () => {
      try {
        const editedProduct: IProduct = await getProductById(id!);
        setEditProduct(editedProduct);
        console.log(editedProduct);

        if (editedProduct) {
          const updatedObject = {
            image_url: editedProduct.image_url[0],
            name_ua: editedProduct.name_ua,
            name_en: editedProduct.name_en,
            description_ua: editedProduct.description_ua,
            description_en: editedProduct.description_en,
            base_price: editedProduct.base_price,
            article: editedProduct.article,
          };

          reset(updatedObject);

          if (editedProduct.characteristics) {
            const characteristicsArray = Object.entries(
              editedProduct.characteristics
            ).map(([key, value]) => ({
              key,
              value,
            }));
            reset({ characteristics: characteristicsArray });
          }
        }
      } catch (error) {
        console.log(error);
        return <AdminError />;
      }
    };

    getEditedProduct();
  }, [id, reset]);

  const notify = (message: string) => toast(message);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key !== "characteristics") {
        formData.append(key, data[key]);
      }
    });

    if (mainImage) {
      formData.append("image", mainImage);
    }

    if (data.characteristics) {
      const characteristics = data.characteristics.reduce(
        (obj: any, item: any) => {
          obj[item.key] = item.value;
          return obj;
        },
        {}
      );
      formData.append("characteristics", JSON.stringify(characteristics));
    }

    try {
      const token = localStorage.getItem("token");

      if (token) {
        // const response = await updateProduct(formData, id!, token);
        // notify(response.message);
        // navigate("/admin");
        console.log(data);
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
            Оновлення даних товарів
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
                      Зображення товару
                    </label>
                    <img
                      src={editProduct?.image_url[0]}
                      alt="product banner"
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
                      {mainImage && <p>{mainImage.name}</p>}
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
                  Назва товару (Укр)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["name_ua"] ? { border: "1px solid #EB001B" } : {}
                  }
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
                <label
                  htmlFor="name_en"
                  className={styles.admin__control_label}
                >
                  Назва товару (Англ)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["name_en"] ? { border: "1px solid #EB001B" } : {}
                  }
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
                <label
                  htmlFor="description_ua"
                  className={styles.admin__control_label}
                >
                  Опис товару (Укр)
                </label>
                <input
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["description_ua"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Опис товару (Укр)"
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
                  Опис товару (Англ)
                </label>
                <input
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["description_en"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Опис товару (Англ)"
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
                  htmlFor="base_price"
                  className={styles.admin__control_label}
                >
                  Ціна товару
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["base_price"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Базова ціна товару"
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
                  Артикул товару
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["article"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Артикул товару"
                  {...register("article", { required: `Це поле обов'язкове!` })}
                />
                {errors["article"] && (
                  <span className={styles.error_message}>
                    {errors["article"]?.message as string}
                  </span>
                )}
              </div>
              {fields.map((item, index) => (
                <div key={index} className={styles.admin__block_control}>
                  <label className={styles.admin__control_label}>
                    Характеристики {index + 1}
                  </label>
                  <input
                    type="text"
                    placeholder="Назва характеристики"
                    {...register(`characteristics.${index}.key`, {
                      required: `Це поле обов'язкове!`,
                    })}
                    className={styles.admin__control_field}
                  />
                  <input
                    type="text"
                    placeholder="Значення характеристики"
                    {...register(`characteristics.${index}.value`, {
                      required: `Це поле обов'язкове!`,
                    })}
                    className={styles.admin__control_field}
                  />
                </div>
              ))}
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
                onClick={() => setActiveTab("variations")}
                className={`${styles.admin__tabs_button} ${
                  activeTab === "variations" ? styles.admin__tabs_active : {}
                }`}
                type="button"
              >
                Варіації продукта
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`${styles.admin__tabs_button} ${
                  activeTab === "reviews" ? styles.admin__tabs_active : {}
                }`}
                type="button"
              >
                Відгуки продукта
              </button>
            </div>
            {activeTab === "variations" && (
              <AdminProductUpdateVariations
                key={"uniq1"}
                editProduct={editProduct!}
              />
            )}
            {activeTab === "reviews" && (
              <AdminProductUpdateReviews
                key={"uniq1"}
                editProduct={editProduct!}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProductUpdate;
