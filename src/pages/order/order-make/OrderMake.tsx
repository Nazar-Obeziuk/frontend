import React from "react";
import styles from "./OrderMake.module.css";

const OrderMake: React.FC = () => {
  return (
    <>
      <section className={styles.order__first_section}>
        <div className={styles.container}>
          <div className={styles.order__make_wrapper}>
            <div className={styles.order__make_route}>
              <img
                src="../../images/home-icon.svg"
                alt="home icon"
                className={styles.order__router_icon}
              />
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.order__router_arrow}
              />
              <p className={styles.order__router_name}>Як замовити</p>
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.order__router_arrow}
              />
              <p
                className={`${styles.order__router_name} ${styles.order__router_active}`}
              >
                Як зробити замовлення?
              </p>
            </div>
            <div className={styles.order__make_main}>
              <h2 className={styles.order__main_title}>
                Як зробити замовлення індивідуальних устілок?
              </h2>
            </div>
            <div className={styles.order__make_main}>
              <div className={styles.order__main_point}>
                <h2 className={styles.order__point_title}>
                  <span className={styles.order__title_count}>1.</span> Оформіть
                  замовлення:
                </h2>
                <div className={styles.order__point_block}>
                  <div className={styles.order__block_website}>
                    <span className={styles.order__block_circle}>
                      <img
                        src="../../images/website-icon.svg"
                        alt="website icon"
                        className={styles.order__circle_icon}
                      />
                    </span>
                    <p className={styles.order__block_text}>
                      на сайті <br /> prostopoo.com.ua
                    </p>
                  </div>
                  <div className={styles.order__block_phone}>
                    <span className={styles.order__block_circle}>
                      <img
                        src="../../images/phone-icon.svg"
                        alt="phone icon"
                        className={styles.order__circle_icon}
                      />
                    </span>
                    <p className={styles.order__block_text}>
                      телефоном <br /> 0 800 500 127
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.order__main_point}>
                <h2 className={styles.order__point_title}>
                  <span className={styles.order__title_count}>2.</span>{" "}
                  Отримайте діагностичний бокс
                </h2>
              </div>
              <div className={styles.order__main_point}>
                <h2 className={styles.order__point_title}>
                  <span className={styles.order__title_count}>3.</span> Зробіть
                  відтиск стопи:
                </h2>
                <ul className={styles.order__point_list}>
                  <li className={styles.order__list_item}>
                    після відкриття коробки потрібно правильно стати на піну –
                    так, щоб у ній помістилася вся стопа;
                  </li>
                  <li className={styles.order__list_item}>
                    стоячи, перекочуючись з п’ятки на носок, зробіть зліпок
                    спочатку лівої, а потім правої стопи. У місці пальців
                    необхідно дотиснути відбиток, за допомогою руки;
                  </li>
                  <li className={styles.order__list_item}>
                    заповніть анкету замовника.
                  </li>
                </ul>
                <div className={styles.order__point_instruction}>
                  <p className={styles.order__point_primary}>
                    Відеоінструкція:
                  </p>
                  <a href="#" className={styles.order__instruction_link}>
                    <span className={styles.order__link_circle}>
                      <img
                        src="../../images/button-play-video.svg"
                        alt="play video"
                        className={styles.order__circle_play}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.order__make_section}>
        <div className={styles.container}>
          <div className={styles.order__make_wrapper}>
            <div className={styles.order__make_main}>
              <div className={styles.order__main_point}>
                <h2 className={styles.order__point_title}>
                  <span className={styles.order__title_count}>4.</span>{" "}
                  Відправте діагностичний бокс нам за зворотною адресою (вказано
                  на пакуванні).
                </h2>
              </div>
              <div className={styles.order__main_point}>
                <h2 className={styles.order__point_title}>
                  <span className={styles.order__title_count}>5.</span>{" "}
                  Отримайте безкоштовну консультацію ерготерапевта.
                </h2>
              </div>
              <div className={styles.order__main_point}>
                <h2 className={styles.order__point_title}>
                  <span className={styles.order__title_count}>6.</span>{" "}
                  Дочекайтеся виготовлення та заберіть ваші індивідуальні
                  устілки у відділенні Нової пошти.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderMake;
