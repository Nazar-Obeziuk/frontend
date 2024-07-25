import React, { useEffect, useState } from "react";
import AdminError from "../../../../admin-error/AdminError";
import {
  getReviewById,
  updateReview,
} from "../../../../../../services/reviews/reviews";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import styles from "../admin-reviews-form/AdminReviewsForm.module.css";
import { IReviewGeneral } from "../../../../../../services/reviews/review.interface";

const AdminReviewsUpdate: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [editReview, setEditReview] = useState<IReviewGeneral>();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    const getEditedReview = async () => {
      try {
        const editedReview: IReviewGeneral = await getReviewById(id!);
        setEditReview(editedReview);
        console.log(editReview);

        if (editedReview) {
          const updatedObject = {
            stars: editedReview.stars,
            name_ua: editedReview.name_ua,
            name_en: editedReview.name_en,
            description_ua: editedReview.description_ua,
            description_en: editedReview.description_en,
            pluses_ua: editedReview.pluses_ua,
            pluses_en: editedReview.pluses_en,
            minuses_ua: editedReview.minuses_ua,
            minuses_en: editedReview.minuses_en,
          };

          reset(updatedObject);
        }
      } catch (error) {
        console.log(error);
        return <AdminError />;
      }
    };

    getEditedReview();
  }, [id, reset]);

  const notify = (message: string) => toast(message);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await updateReview(formData, id!, token);
        notify(response.message);
        navigate("/admin");
      } else {
        return <AdminError />;
      }
    } catch (error) {
      console.log(error);
    }
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
              <div className={styles.admin__block_control}>
                <label htmlFor="stars" className={styles.admin__control_label}>
                  Кількість зірочок
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={errors["stars"] ? { border: "1px solid #EB001B" } : {}}
                  placeholder="Кількість зірочок"
                  {...register("stars", { required: `Це поле обов'язкове!` })}
                />
                {errors["stars"] && (
                  <span className={styles.error_message}>
                    {errors["stars"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="name_ua"
                  className={styles.admin__control_label}
                >
                  Ім'я клієнта (Укр)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["name_ua"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Ім'я клієнта (Укр)"
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
                  Ім'я клієнта (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["name_en"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Ім'я клієнта (Англ)"
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
                  Текст відгука (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["description_ua"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Текст відгука (Укр)"
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
                  htmlFor="worker-subtitle-en"
                  className={styles.admin__control_label}
                >
                  Текст відгука (Англ)
                </label>
                <input
                  type="text"
                  style={
                    errors["description_en"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  className={styles.admin__control_field}
                  placeholder="Текст відгука (Англ)"
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
                  htmlFor="pluses_ua"
                  className={styles.admin__control_label}
                >
                  Плюси (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Плюси (Укр)"
                  {...register("pluses_ua", { required: false })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="pluses_en"
                  className={styles.admin__control_label}
                >
                  Плюси (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Плюси (Англ)"
                  {...register("pluses_en", { required: false })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="minuses_ua"
                  className={styles.admin__control_label}
                >
                  Мінуси (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Мінуси (Укр)"
                  {...register("minuses_ua", { required: false })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="minuses_en"
                  className={styles.admin__control_label}
                >
                  Мінуси (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Мінуси (Англ)"
                  {...register("minuses_en", { required: false })}
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

export default AdminReviewsUpdate;
