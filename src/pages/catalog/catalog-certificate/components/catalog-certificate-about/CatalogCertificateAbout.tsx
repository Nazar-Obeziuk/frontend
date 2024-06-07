import React from "react";
import styles from "./CatalogCertificateAbout.module.css";

const CatalogCertificateAbout: React.FC = () => {
  return (
    <div className={styles.catalog__info_main}>
      <div className={styles.catalog__main_about}>
        <p className={styles.catalog__info_text}>
          Дбайливий подарунок для близьких — це подарунковий сертифікат від{" "}
          <span className={styles.catalog__info_primary}>PROSTOPOO</span>.
          Презентуйте сертифікат чоловікові/дружині, мамі/батькові,
          бабусі/дідусеві, колезі — будь-кому.
        </p>
        <p className={styles.catalog__info_text}>
          Чудова можливість отримати устілки, які ідеально підходять будові
          Вашої стопи, не виходячи з дому, та з можливістю використання
          безкоштовної доставки до найближчого відділення Нової Пошти.
        </p>
        <p className={styles.catalog__info_text}>
          <span className={styles.catalog__info_primary}>
            У вартість індивідуальних устілок Prostopoo входить
          </span>{" "}
          діагностичний бокс, доставка боксу покупцеві до відділення Нової
          пошти, зворотна доставка (від покупця до нас), доставка готового
          виробу. В комплект для самодіагностики входить: діагностичний бокс для
          зняття відбитків стоп, анкета, інструкція.
        </p>
      </div>
      <div className={styles.catalog__main_steps}>
        <p className={styles.catalog__info_primaryBold}>
          Процес замовлення устілок передбачає:
        </p>
        <ul className={styles.catalog__steps_list}>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>КРОК 1</span>
            <p className={styles.catalog__steps_text}>
              Оформлюйте замовлення за телефоном{" "}
              <span className={styles.catalog__info_bold}>0 800 500 127</span>
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>КРОК 2</span>
            <p className={styles.catalog__steps_text}>
              Отримайте консультацію від менеджера кол-центру
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>КРОК 3</span>
            <p className={styles.catalog__steps_text}>
              Отримайте бокс самодіагностики
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>КРОК 4</span>
            <p className={styles.catalog__steps_text}>Зробіть відтиск стоп</p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>КРОК 5</span>
            <p className={styles.catalog__steps_text}>
              Заповніть анкету, яка знаходиться всередині боксу
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>КРОК 6</span>
            <p className={styles.catalog__steps_text}>
              Запакуйте все в пакет, що йде в комплекті до боксу
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>КРОК 7</span>
            <p className={styles.catalog__steps_text}>
              Відправте нам з будь-якого відділення Нової Пошти (доставку
              сплачує отримувач), зворотна адреса вказана на пакеті
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>КРОК 8</span>
            <p className={styles.catalog__steps_text}>
              Очікуйте на зв’язок із фізичним терапевтом для погодження всіх
              деталей
            </p>
          </li>
          <li className={styles.catalog__steps_item}>
            <span className={styles.catalog__steps_block}>КРОК 9</span>
            <p className={styles.catalog__steps_text}>
              Час виготовлення — 24 години від моменту отримання скану стопи
              клієнта
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.catalog__main_rules}>
        <p className={styles.catalog__info_primaryBold}>
          Правила використання подарункового сертифіката
        </p>
        <ul className={styles.catalog__main_list}>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>1.</span>
            <p className={styles.catalog__info_text}>
              Подарунковий сертифікат — пластикова карта з QR-кодом певного
              номіналу та визначеного строку дії, не є платіжним документом,
              платіжним засобом або цінним папером.
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>2.</span>
            <p className={styles.catalog__info_text}>
              Подарунковий сертифікат надає право отримати{" "}
              <span className={styles.catalog__info_primaryBold}>
                1 пару індивідуальних ортопедичних устілок бренда Prostopoo.
              </span>
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>3.</span>
            <p className={styles.catalog__info_text}>
              Покупець має право передавати подарунковий сертифікат третім
              особам. У разі передачі подарункового сертифіката третім особам
              Покупець зобов’язаний попередити таку третю особу про термін дії
              подарункового сертифіката та умови цих «Правил використання
              Подарункового сертифікату».
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>4.</span>
            <p className={styles.catalog__info_text}>
              Утримувач Подарункового сертифіката — будь-яка особа, що
              пред’являє подарунковий сертифікат для придбання товарів.
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>5.</span>
            <p className={styles.catalog__info_text}>
              Подарунковий сертифікат може бути використаний виключно під час
              однієї торгової операції (покупки 1 пари устілок).
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>6.</span>
            <p className={styles.catalog__info_text}>
              Дія подарункового сертифіката обмежується терміном дії{" "}
              <span className={styles.catalog__info_bold}>
                (вказано на сертифікаті).
              </span>
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>7.</span>
            <p className={styles.catalog__info_text}>
              Термін дії подарункового сертифіката не може бути зміненим,
              продовженим або відновленим.
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>8.</span>
            <p className={styles.catalog__info_text}>
              Якщо протягом терміну дії Подарункового сертифіката
              Покупцем/Утримувачем Подарункового сертифіката не реалізовано
              право на придбання товару, то зобов’язання Продавця подарункового
              сертифіката вважаються припиненими, а грошова сума, сплачена за
              подарунковий сертифікат, поверненню не підлягає й залишається в
              розпорядженні Продавця.
            </p>
          </li>
          <li className={styles.catalog__list_item}>
            <span className={styles.catalog__item_count}>9.</span>
            <p className={styles.catalog__info_text}>
              Подарунковий сертифікат не підлягає поверненню та зворотній
              конвертації в грошовий еквівалент.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CatalogCertificateAbout;
