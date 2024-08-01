import React, { useState } from "react";
import styles from "./AdminFopForm.module.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createFop } from "../../../../../../services/fop/fop";

interface Props {
  toggleFopsForm: () => void;
  getAll: () => void;
}

const AdminFopForm: React.FC<Props> = ({ toggleFopsForm, getAll }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    if (data.fop_language === "en") {
      formData.append("language", "en");
    } else {
      formData.append("language", "ua");
    }

    const token = localStorage.getItem("token");
    const notify = (message: string) => toast(message);

    if (token) {
      try {
        console.log(data);
        const response = await createFop(formData, token);
        notify(response.message);
        getAll();
        reset();
        toggleFopsForm();
      } catch (error) {
        console.error("Error creating fop:", error);
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
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.admin__form_block}
      >
        <div className={styles.admin__block_control}>
          <label htmlFor="fop_language" className={styles.admin__control_label}>
            Оберіть мову
          </label>
          <select
            className={styles.admin__control_field}
            {...register("fop_language", {
              required: `Це поле обов'язкове!`,
            })}
          >
            <option value="en">Англ</option>
            <option value="ua">Укр</option>
          </select>
        </div>
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
              errors["first_fop_text"] ? { border: "1px solid #EB001B" } : {}
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
              errors["second_fop_text"] ? { border: "1px solid #EB001B" } : {}
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
              errors["third_fop_text"] ? { border: "1px solid #EB001B" } : {}
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
              errors["fourth_fop_text"] ? { border: "1px solid #EB001B" } : {}
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
              errors["first_date_fop"] ? { border: "1px solid #EB001B" } : {}
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
              errors["second_date_fop"] ? { border: "1px solid #EB001B" } : {}
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
          <label htmlFor="code_edr_fop" className={styles.admin__control_label}>
            Код ЄДРПОУ
          </label>
          <input
            type="text"
            className={`${styles.admin__control_field} `}
            style={
              errors["code_edr_fop"] ? { border: "1px solid #EB001B" } : {}
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
              errors["register_date_fop"] ? { border: "1px solid #EB001B" } : {}
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
          <label htmlFor="bank_fop" className={styles.admin__control_label}>
            Банк (ПАТ КБ «ПРИВАТБАНК», м. Київ, Україна)
          </label>
          <input
            type="text"
            className={`${styles.admin__control_field} `}
            style={errors["bank_fop"] ? { border: "1px solid #EB001B" } : {}}
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
          <label htmlFor="number_fop" className={styles.admin__control_label}>
            Номер (№20520000000002678)
          </label>
          <input
            type="text"
            className={`${styles.admin__control_field} `}
            style={errors["number_fop"] ? { border: "1px solid #EB001B" } : {}}
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
          <label htmlFor="address_fop" className={styles.admin__control_label}>
            Адреса
          </label>
          <input
            type="text"
            className={`${styles.admin__control_field} `}
            style={errors["address_fop"] ? { border: "1px solid #EB001B" } : {}}
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
            className={styles.admin__actions_button}
            type="submit"
            disabled={isLoading || !isValid}
          >
            {isLoading ? "Загрузка..." : "Підтвердити"}
          </button>
          <button
            onClick={toggleFopsForm}
            className={styles.admin__actions_button}
            type="button"
            disabled={isLoading}
          >
            Скасувати
          </button>
        </div>
      </form>
    </>
  );
};

export default AdminFopForm;
