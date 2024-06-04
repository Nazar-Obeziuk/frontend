import React, { useState } from "react";
import styles from "./HomeInfo.module.css";

const HomeInfo: React.FC = () => {
  const [isOpenMobileInfoBlock, setIsOpenMobileInfoBlock] = useState(false);

  const handleInfoBlock = () => {
    setIsOpenMobileInfoBlock((prevState) => !prevState);
  };

  return (
    <section className={styles.home__info_section}>
      <div className={styles.container}>
        <div className={styles.home__info_wrapper}>
          <div className={styles.home__wrapper_about}>
            <p className={styles.home__info_text}>
              Індивідуальні ортопедичні устілки{" "}
              <span className={styles.home__info_primary}>
                PROSTOPOO (Простопу){" "}
              </span>{" "}
              — український бренд, який пропонує швидке та легке розв’язання
              проблем зі стопами.
            </p>
            <p className={styles.home__info_text}>
              Згідно зі статистикою
              <span className={styles.home__info_primary}>*</span>{" "}
              <span className={styles.home__info_white}>
                81% населення України
              </span>{" "}
              потребує допомоги лікарів-ортопедів.
            </p>
            <p className={styles.home__info_text}>
              Так, така значна частина населення має хвороби та деформації стоп,
              відчувають болі та дискомфорт. Ми пропонуємо індивідуальні
              ортопедичні устілки на замовлення, придбавши які ви не тільки
              дізнаєтесь стан своїх стоп, отримаєте консультацію з експертом, а
              й матимете зручне та дієве рішення для підтримання вашого
              здоров’я.
            </p>
            <p className={styles.home__info_university}>
              <span className={styles.home__info_primary}>*</span>згідно з
              дослідженням А.Б. ДОМБРОВСЬКИЙ, І.Т. СОЛТИК Хмельницький
              національний університет.
            </p>
          </div>
          <div onClick={handleInfoBlock} className={styles.home__info_details}>
            <p className={styles.home__details_text}>
              {isOpenMobileInfoBlock ? "згорнути" : "детальніше"}
            </p>
            <svg
              className={`${styles.home__details_icon} ${
                isOpenMobileInfoBlock ? `${styles.active}` : ""
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
          <div className={styles.home__wrapper_more}>
            <p className={styles.home__info_bold}>
              Індивідуальна ортопедична устілка, замовити яку можна не виходячи
              з дому, — це:
            </p>
            <p className={styles.home__info_text}>
              отримання діагностичного боксу в будь-яке відділення Нової пошти,
              а протягом 48 годин отримання вже готових устілок. Замовивши
              індивідуальну устілку ви отримаєте виріб, змодельований відповідно
              до проблем саме ваших стоп.
            </p>
            <p className={styles.home__info_bold}>МИ ПРОПОНУЄМО:</p>
            <div className={styles.home__info_offer}>
              <p className={styles.home__info_text}>
                <span className={styles.home__info_white}>
                  точність виконання
                </span>{" "}
                — завдяки сучасній технології CAD/CAM, яка зі 100% точністю
                формує компенсаційні зони;
              </p>
              <p className={styles.home__info_text}>
                <span className={styles.home__info_white}>відмінну якість</span>{" "}
                — ми використовуємо матеріали та основу устілок преміумякості,
                матеріал ЕVA німецького виробництва
              </p>
              <p className={styles.home__info_text}>
                <span className={styles.home__info_white}>якісний сервіс</span>{" "}
                — ви отримуєте консультацію та відповіді на всі ваші запитання.
              </p>
            </div>
          </div>
          {isOpenMobileInfoBlock && (
            <div className={styles.home__more_mobile}>
              <p className={styles.home__info_bold}>
                Індивідуальна ортопедична устілка, замовити яку можна не
                виходячи з дому, — це:
              </p>
              <p className={styles.home__info_text}>
                отримання діагностичного боксу в будь-яке відділення Нової
                пошти, а протягом 48 годин отримання вже готових устілок.
                Замовивши індивідуальну устілку ви отримаєте виріб,
                змодельований відповідно до проблем саме ваших стоп.
              </p>
              <p className={styles.home__info_bold}>МИ ПРОПОНУЄМО:</p>
              <div className={styles.home__info_offer}>
                <p className={styles.home__info_text}>
                  <span className={styles.home__info_white}>
                    точність виконання
                  </span>{" "}
                  — завдяки сучасній технології CAD/CAM, яка зі 100% точністю
                  формує компенсаційні зони;
                </p>
                <p className={styles.home__info_text}>
                  <span className={styles.home__info_white}>
                    відмінну якість
                  </span>{" "}
                  — ми використовуємо матеріали та основу устілок преміумякості,
                  матеріал ЕVA німецького виробництва
                </p>
                <p className={styles.home__info_text}>
                  <span className={styles.home__info_white}>
                    якісний сервіс
                  </span>{" "}
                  — ви отримуєте консультацію та відповіді на всі ваші
                  запитання.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeInfo;
