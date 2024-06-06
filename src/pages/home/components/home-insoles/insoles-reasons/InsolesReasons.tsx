import React, { useState } from "react";
import styles from "./InsoleReasons.module.css";
import { homeInsolesReasons } from "../../../../../utils/data/HomeInsoles.data";
import InsoleItem from "../../../../../components/insole-item/InsoleItem";

const InsolesReasons: React.FC = () => {
  const [isOpenDetailsBlock, setIsOpenDetailsBlock] = useState(false);

  const handleInfoBlock = () => {
    setIsOpenDetailsBlock((prevState) => !prevState);
  };

  return (
    <div className={styles.home__insoles_inner}>
      <h2 className={styles.home__inner_title}>
        Коли необхідні{" "}
        <span className={styles.home__title_primary}>індивідуальні</span>{" "}
        ОРТОПЕДИЧНІ устілки?
      </h2>
      <div className={styles.home__inner_main}>
        {homeInsolesReasons.map((insoleItem) => (
          <InsoleItem insoleItem={insoleItem} key={insoleItem.id} />
        ))}
      </div>
      <div onClick={handleInfoBlock} className={styles.home__inner_details}>
        <p className={styles.home__details_text}>
          {isOpenDetailsBlock ? "згорнути" : "детальніше"}
        </p>
        <svg
          className={`${styles.home__details_icon} ${
            isOpenDetailsBlock ? `${styles.active}` : ""
          }`}
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.47732 6.95899L5.25 5L6 5.75676L3 9L3.86753e-08 5.75676L0.7 5L2.52268 6.97046L2.52268 3.00826e-08L3.47732 4.14667e-08L3.47732 6.95899Z"
            fill="#FFED00"
          />
        </svg>
      </div>
      {isOpenDetailsBlock && (
        <div className={styles.home__inner_more}>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>Плоскостопість</h3>
            <p className={styles.home__more_text}>
              Спричиняє біль у суглобах нижніх кінцівок і стопах, низку
              функціональних змін у хребті, перекіс тазу й сколіоз. Тому важливо
              замовити індивідуальні ортопедичні устілки, щоб зупинити процес
              розвитку деформації стоп і сприятимуть правильній роботі склепіння
              нижніх кінцівок.
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              Вальгусно-варусна деформація
            </h3>
            <p className={styles.home__more_text}>
              У разі проблеми важливо правильно позиціонувати поверхню стопи,
              щоб не допустити «завалювання» поверхні стопи всередину або
              назовні. Завдяки підвищеним супінаторам наших устілок стопа
              залишається в правильному положенні.
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>П’яткова шпора</h3>
            <p className={styles.home__more_text}>
              Ця проблема є наслідком відкладення солей кальцію на поверхні
              підошви або у верхній частині п’яткової кістки. Виготовлення
              індивідуальних ортопедичних устілок розв’язує проблему больового
              синдрому завдяки пом’якшенню в ділянці п’яти.
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>Діабетична стопа</h3>
            <p className={styles.home__more_text}>
              Ускладнення цукрового діабету, яке супроводжується ураженням стоп
              внаслідок порушення кровопостачання. Індивідуальні устілки в разі
              діабетичної стопи мають особливо м’яку поверхню, зберігають ноги в
              гіпоалергенному середовищі, захищають від пошкоджень.
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>Часткова ампутація</h3>
            <p className={styles.home__more_text}>
              Для активного способу життя, навіть у разі часткової ампутації
              стоп, ми виготовимо устілки з компенсаційними зонами, які
              збережуть правильний розподіл навантаження. З устілками «Простопу»
              не доведеться відмовлятися від активного способу життя.
            </p>
          </div>
          <div className={styles.home__more_block}>
            <h3 className={styles.home__more_title}>
              Різна довжина та розмір кінцівок
            </h3>
            <p className={styles.home__more_text}>
              Індивідуальний підхід у моделюванні й виробництві устілок дає
              можливість виготовити для кожної кінцівки унікальну устілку, з
              урахуванням всіх особливостей і потреб.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsolesReasons;
