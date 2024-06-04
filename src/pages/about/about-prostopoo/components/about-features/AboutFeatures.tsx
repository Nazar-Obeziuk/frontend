import React from "react";
import styles from "./AboutFeatures.module.css";

const AboutFeatures: React.FC = () => {
  return (
    <section className={styles.about__features_section}>
      <div className={styles.container}>
        <div className={styles.about__features_wrapper}>
          <h2 className={styles.about__features_title}>
            Особливості наших устілок
          </h2>
          <div className={styles.about__features_main}>
            <ul className={styles.about__features_list}>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>1</span>
                <p className={styles.about__item_text}>
                  Надають правильний розподіл навантаження на стопу, знімають
                  напругу та дискомфорт.
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>2</span>
                <p className={styles.about__item_text}>
                  Оскільки деформації не завжди симетричні, наша технологія
                  надає можливість виготовити таку пару, де кожна устілка
                  ідеально повторює особливості правої та лівої стоп.
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>3</span>
                <p className={styles.about__item_text}>
                  Устілки надають оптимальний розподіл динамічного навантаження
                  на опорно-руховий апарат.
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>4</span>
                <p className={styles.about__item_text}>
                  Поглинають ударні хвилі під час занять спортом і підвищують
                  рівень витривалості.
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>5</span>
                <p className={styles.about__item_text}>
                  Безкоштовна консультація допоможе виявити супутні проблеми  та
                  врахувати їх ще на етапі моделювання.
                </p>
              </li>
            </ul>
            <ul className={styles.about__features_list}>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>6</span>
                <p className={styles.about__item_text}>
                  Результатом є не просто підтримання склепінь стопи, а саме
                  тренування м’язового апарату стоп. Щоб м’язи наших стоп
                  функціонували правильно, для підтримання правильної
                  анатомічної форми стопи.
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>7</span>
                <p className={styles.about__item_text}>
                  Надають можливість адаптувати структуру устілки відповідно до
                  будь-якого виду плоскостопості.
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>8</span>
                <p className={styles.about__item_text}>
                  Сприяють стабілізації стопи у разі варусної та вальгусної
                  деформації.
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>9</span>
                <p className={styles.about__item_text}>
                  Забезпечують корекцію конкретної проблеми, виявленої під час
                  діагностики.
                </p>
              </li>
              <li className={styles.about__list_item}>
                <span className={styles.about__item_count}>10</span>
                <p className={styles.about__item_text}>
                  Призупиняють розвиток подальших деформацій.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
