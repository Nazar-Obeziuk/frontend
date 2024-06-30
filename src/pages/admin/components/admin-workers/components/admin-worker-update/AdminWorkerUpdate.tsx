import React, { useEffect } from "react";
import styles from "../admin-workers-form/AdminWorkersForm.module.css";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAdminWorkersContext } from "../../../../../../context/admin-workers/AdminWorkersContext";
import { updateWorker } from "../../../../../../services/workers/workers";

const AdminWorkerUpdate: React.FC = () => {
  const { editWorker } = useAdminWorkersContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name_ua: editWorker?.name_ua,
      name_en: editWorker?.name_en,
      subtitle_ua: editWorker?.subtitle_ua,
      subtitle_en: editWorker?.subtitle_en,
      first_description_ua: editWorker?.first_description_ua,
      first_description_en: editWorker?.first_description_en,
      second_description_ua: editWorker?.second_description_ua,
      second_description_en: editWorker?.second_description_en,
      third_description_ua: editWorker?.third_description_ua,
      third_description_en: editWorker?.third_description_en,
    },
  });

  useEffect(() => {
    if (editWorker) {
      reset(editWorker);
    }
  }, [reset]);

  const notify = (message: string) => toast(message);

  const onSubmit = async (data: any) => {
    const editedWorker = {
      ...data,
      image: null,
      slider_images: null,
    };

    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await updateWorker(
          editedWorker,
          editedWorker.id,
          token
        );
        notify(response.message);
      } else {
        // redirect
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!editWorker) {
    return <p>Щось пішло не так спробуйте ще раз</p>;
  }

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
            Оновлення даних працівника
          </h2>
          <div className={styles.admin__wrapper_main}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.admin__form_block}
            >
              {/* <div className={styles.admin__block_control}>
        <label htmlFor="image" className={styles.admin__control_label}>
          Зображення працівника
        </label>
        <AdminImage
          {...getMainRootProps({
            isDragActive: isMainDragActive,
            isDragAccept: isMainDragAccept,
            isDragReject: isMainDragReject,
            isFocused: isMainFocused,
          })}
        >
          <input {...getMainInputProps()} />
          {isMainDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть файли сюди, або клацніть для вибору файлів</p>
          )}
        </AdminImage>
        {mainImage && <p>{mainImage.name}</p>}
        {errors["image"] && (
          <span className={styles.error_message}>
            {errors["image"]?.message as string}
          </span>
        )}
      </div>
      <div className={styles.admin__block_control}>
        <label htmlFor="certificates" className={styles.admin__control_label}>
          Зображення сертифікатів
        </label>
        <AdminImage
          {...getSliderRootProps({
            isDragActive: isSliderDragActive,
            isDragAccept: isSliderDragAccept,
            isDragReject: isSliderDragReject,
            isFocused: isSliderFocused,
          })}
        >
          <input {...getSliderInputProps()} />
          {isSliderDragActive ? (
            <p>Перетягніть сюди файли ...</p>
          ) : (
            <p>Перетягніть файли сюди, або клацніть для вибору файлів</p>
          )}
        </AdminImage>
        <ul>
          {sliderImages.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div> */}
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="fullName_ua"
                  className={styles.admin__control_label}
                >
                  Ім'я та прізвище працівника (Укр)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["name_ua"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Ім'я та прізвище працівника (Укр)"
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
                  Ім'я та прізвище працівника (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["name_en"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Ім'я та прізвище працівника (Англ)"
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
                  htmlFor="subtitle_ua"
                  className={styles.admin__control_label}
                >
                  Напрямок працівника (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  style={
                    errors["subtitle_ua"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Напрямок працівника (Укр)"
                  {...register("subtitle_ua", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["subtitle_ua"] && (
                  <span className={styles.error_message}>
                    {errors["subtitle_ua"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="worker-subtitle-en"
                  className={styles.admin__control_label}
                >
                  Напрямок працівника (Англ)
                </label>
                <input
                  type="text"
                  style={
                    errors["subtitle_en"] ? { border: "1px solid #EB001B" } : {}
                  }
                  className={styles.admin__control_field}
                  placeholder="Напрямок працівника (Англ)"
                  {...register("subtitle_en", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["subtitle_en"] && (
                  <span className={styles.error_message}>
                    {errors["subtitle_en"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="first_description_ua"
                  className={styles.admin__control_label}
                >
                  Перший опис працівника (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Перший опис працівника (Укр)"
                  {...register("first_description_ua", { required: false })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="worker-desc-1-en"
                  className={styles.admin__control_label}
                >
                  Перший опис працівника (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Перший опис працівника (Англ)"
                  {...register("first_description_en", { required: false })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="worker-desc-2-ua"
                  className={styles.admin__control_label}
                >
                  Другий опис працівника (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Другий опис працівника (Укр)"
                  {...register("second_description_ua", { required: false })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="worker-desc-2-en"
                  className={styles.admin__control_label}
                >
                  Другий опис працівника (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Другий опис працівника (Англ)"
                  {...register("second_description_en", { required: false })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="worker-desc-3-ua"
                  className={styles.admin__control_label}
                >
                  Третій опис працівника (Укр)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Третій опис працівника (Укр)"
                  {...register("third_description_ua", { required: false })}
                />
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="worker-desc-3-en"
                  className={styles.admin__control_label}
                >
                  Третій опис працівника (Англ)
                </label>
                <input
                  type="text"
                  className={styles.admin__control_field}
                  placeholder="Третій опис працівника (Англ)"
                  {...register("third_description_en", { required: false })}
                />
              </div>
              <div className={styles.admin__block_actions}>
                <button
                  className={`${styles.admin__actions_button} ${styles.admin__button_full}`}
                  type="submit"
                >
                  Підтвердити
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminWorkerUpdate;
