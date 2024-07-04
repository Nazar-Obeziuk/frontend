import React, { useCallback, useEffect, useState } from "react";
import styles from "../admin-products-form/AdminProductsForm.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  const [variations, setVariations] = useState<IProductVariation[]>([]);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [isEditUploadOpen, setEditUploadOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editProduct, setEditProduct] = useState<IProduct>();
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

  const getAllVariations = async () => {
    try {
      const response = await getAllProductsVariations(editProduct!.id);
      setVariations(response);
    } catch (error) {
      console.log("variation error", error);
    }
  };

  useEffect(() => {
    const getEditedProduct = async () => {
      try {
        const editedProduct: IProduct = await getProductById(id!);
        setEditProduct(editedProduct);

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
      formData.append(key, data[key]);
    });

    if (mainImage) {
      formData.append("image", mainImage);
    }

    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await updateProduct(formData, id!, token);
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

  const handleDeleteProductVariation = async (variationId: number) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await deleteProductVariation(variationId, token);
        notify(response.message);
        getAllVariations();
      } else {
        return <AdminError />;
      }
    } catch (error) {
      console.log("delete variation", error);
    }
  };

  const handleEditVariation = (adminVariation: IProductVariation) => {
    navigate(`/admin/product-variation-update/${editProduct!.product_id}`);
  };

  const onAddVariation = () => {
    console.log(editProduct);
    navigate(`/admin/variation-product/${editProduct!.product_id}`);
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
                  className={styles.admin__control_field}
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
                  type="text"
                  className={styles.admin__control_field}
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
                  type="text"
                  style={
                    errors["description_en"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  className={styles.admin__control_field}
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
                  style={
                    errors["base_price"] ? { border: "1px solid #EB001B" } : {}
                  }
                  className={styles.admin__control_field}
                  placeholder="Ціна товару"
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
                  style={
                    errors["article"] ? { border: "1px solid #EB001B" } : {}
                  }
                  className={styles.admin__control_field}
                  placeholder="Артикул товару"
                  {...register("article", { required: false })}
                />
                {errors["article"] && (
                  <span className={styles.error_message}>
                    {errors["article"]?.message as string}
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
                  onClick={onAddVariation}
                  className={styles.admin__actions_button}
                  type="button"
                >
                  Додати варіацію
                </button>
              </div>
            </form>
            {variations.length > 0 ? (
              <div className={styles.admin__main_table}>
                <table className={styles.admin__table_item}>
                  <thead className={styles.admin__table_head}>
                    <tr className={styles.admin__table_tr}>
                      <th className={styles.admin__table_th}>Зображення</th>
                      <th className={styles.admin__table_th}>Тип варіації</th>
                      <th className={styles.admin__table_th}>
                        Значення варіації
                      </th>
                      <th className={styles.admin__table_th}>Ціна</th>
                      <th className={styles.admin__table_th}>
                        Артикул варіації
                      </th>
                      <th className={styles.admin__table_th}>Опис (Укр)</th>
                      <th className={styles.admin__table_th}>Опис (Англ)</th>
                      <th className={styles.admin__table_th}>Дії</th>
                    </tr>
                  </thead>
                  <tbody className={styles.admin__table_body}>
                    {variations.map(
                      (adminVariation: IProductVariation, index: number) => (
                        <tr key={index} className={styles.admin__table_tr}>
                          <td className={styles.admin__table_td}>
                            <img
                              src={adminVariation.image_url[0]}
                              alt="product variation banner"
                            />
                          </td>
                          <td className={styles.admin__table_td}>
                            {adminVariation.variation_type}
                          </td>
                          <td className={styles.admin__table_td}>
                            {adminVariation.variation_value}
                          </td>
                          <td className={styles.admin__table_td}>
                            {adminVariation.additional_price}
                          </td>
                          <td className={styles.admin__table_td}>
                            {adminVariation.article}
                          </td>
                          <td className={styles.admin__table_td}>
                            {adminVariation.description_ua}
                          </td>
                          <td className={styles.admin__table_td}>
                            {adminVariation.description_en}
                          </td>
                          <td
                            className={`${styles.admin__table_td} ${styles.admin__td_actions}`}
                          >
                            <button
                              onClick={() =>
                                handleDeleteProductVariation(adminVariation.id)
                              }
                              className={styles.admin__td_action}
                              type="button"
                            >
                              Видалити
                            </button>
                            <button
                              onClick={() =>
                                handleEditVariation(adminVariation)
                              }
                              className={styles.admin__td_action}
                              type="button"
                            >
                              Редагувати
                            </button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className={styles.admin__table_empty}>
                Для данного продукту варіацій ще немає!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProductUpdate;
