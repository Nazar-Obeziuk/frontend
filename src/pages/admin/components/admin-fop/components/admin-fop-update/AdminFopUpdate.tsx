import React, { useEffect, useState } from "react";
import styles from "../admin-fop-form/AdminFopForm.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AdminError from "../../../../admin-error/AdminError";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { IFop } from "../../../../../../services/fop/fop.interface";
import { getFopById, updateFop } from "../../../../../../services/fop/fop";

const AdminFopUpdate: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [editFop, setEditFop] = useState<IFop>();
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

  useEffect(() => {
    const getEditedFop = async () => {
      try {
        const editedFop: IFop = await getFopById(id!);
        setEditFop(editedFop);

        if (editedFop) {
          const updatedObject = {
            first_fop_text: editedFop?.first_fop_text,
            second_fop_text: editedFop?.second_fop_text,
            third_fop_text: editedFop?.third_fop_text,
            fourth_fop_text: editedFop?.fourth_fop_text,
            first_date_fop: editedFop?.first_date_fop,
            second_date_fop: editedFop?.second_date_fop,
            code_edr_fop: editedFop?.code_edr_fop,
            register_date_fop: editedFop?.register_date_fop,
            bank_fop: editedFop?.bank_fop,
            number_fop: editedFop?.number_fop,
            address_fop: editedFop?.address_fop,
          };
          reset(updatedObject);
        }
      } catch (error) {
        console.log(error);
        return <AdminError />;
      }
    };

    getEditedFop();
  }, [id, reset]);

  const notify = (message: string) => toast(message);

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const token = localStorage.getItem("token");

    if (token) {
      try {
        const response = await updateFop(formData, id!, token);
        notify(response.message);
        navigate("/prostopoo-admin-panel");
        reset();
      } catch (error) {
        console.log(error);
      }
    } else {
      return <AdminError />;
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
              to={"/prostopoo-admin-panel"}
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
            Оновлення даних сертифікату
          </h2>
          <div className={styles.admin__wrapper_main}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.admin__form_block}
            >
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="first_fop_text"
                  className={styles.admin__control_label}
                >
                  Стадольська Лілія Іванівна
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["first_fop_text"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Стадольська Лілія Іванівна"
                  {...register("first_fop_text", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["first_fop_text"] && (
                  <span className={styles.error_message}>
                    {errors["first_fop_text"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="second_fop_text"
                  className={styles.admin__control_label}
                >
                  Стадольською Лілією Іванівною
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["second_fop_text"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Стадольською Лілією Іванівною"
                  {...register("second_fop_text", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["second_fop_text"] && (
                  <span className={styles.error_message}>
                    {errors["second_fop_text"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="third_fop_text"
                  className={styles.admin__control_label}
                >
                  Стадольській Лілії Іванівні
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["third_fop_text"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Стадольській Лілії Іванівні"
                  {...register("third_fop_text", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["third_fop_text"] && (
                  <span className={styles.error_message}>
                    {errors["third_fop_text"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="fourth_fop_text"
                  className={styles.admin__control_label}
                >
                  Стадольської Лілії Іванівни
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["fourth_fop_text"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Стадольської Лілії Іванівни"
                  {...register("fourth_fop_text", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["fourth_fop_text"] && (
                  <span className={styles.error_message}>
                    {errors["fourth_fop_text"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="first_date_fop"
                  className={styles.admin__control_label}
                >
                  Перша дата (від 01.06.2010)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["first_date_fop"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Перша дата (від 01.06.2010)"
                  {...register("first_date_fop", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["first_date_fop"] && (
                  <span className={styles.error_message}>
                    {errors["first_date_fop"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="second_date_fop"
                  className={styles.admin__control_label}
                >
                  Друга дата (від 27.04.2016)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["second_date_fop"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Друга дата (від 27.04.2016)"
                  {...register("second_date_fop", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["second_date_fop"] && (
                  <span className={styles.error_message}>
                    {errors["second_date_fop"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="code_edr_fop"
                  className={styles.admin__control_label}
                >
                  Код ЄДРПОУ
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["code_edr_fop"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Код ЄДРПОУ"
                  {...register("code_edr_fop", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["code_edr_fop"] && (
                  <span className={styles.error_message}>
                    {errors["code_edr_fop"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="register_date_fop"
                  className={styles.admin__control_label}
                >
                  Дата реєстрації
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["register_date_fop"]
                      ? { border: "1px solid #EB001B" }
                      : {}
                  }
                  placeholder="Дата реєстрації"
                  {...register("register_date_fop", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["register_date_fop"] && (
                  <span className={styles.error_message}>
                    {errors["register_date_fop"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="bank_fop"
                  className={styles.admin__control_label}
                >
                  Банк (ПАТ КБ «ПРИВАТБАНК», м. Київ, Україна)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["bank_fop"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Банк (ПАТ КБ «ПРИВАТБАНК», м. Київ, Україна)"
                  {...register("bank_fop", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["bank_fop"] && (
                  <span className={styles.error_message}>
                    {errors["bank_fop"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="number_fop"
                  className={styles.admin__control_label}
                >
                  Номер (№20520000000002678)
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["number_fop"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Номер (№20520000000002678)"
                  {...register("number_fop", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["number_fop"] && (
                  <span className={styles.error_message}>
                    {errors["number_fop"]?.message as string}
                  </span>
                )}
              </div>
              <div className={styles.admin__block_control}>
                <label
                  htmlFor="address_fop"
                  className={styles.admin__control_label}
                >
                  Адреса
                </label>
                <input
                  type="text"
                  className={`${styles.admin__control_field} `}
                  style={
                    errors["address_fop"] ? { border: "1px solid #EB001B" } : {}
                  }
                  placeholder="Адреса"
                  {...register("address_fop", {
                    required: `Це поле обов'язкове!`,
                  })}
                />
                {errors["address_fop"] && (
                  <span className={styles.error_message}>
                    {errors["address_fop"]?.message as string}
                  </span>
                )}
              </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminFopUpdate;
