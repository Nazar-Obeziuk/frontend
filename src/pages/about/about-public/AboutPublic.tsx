import React from "react";
import styles from "./AboutPublic.module.css";
import { NavLink } from "react-router-dom";

const AboutPublic: React.FC = () => {
  return (
    <>
      <section
        className={`${styles.about__public_section} ${styles.about__public_first}`}
      >
        <div className={styles.container}>
          <div className={styles.about__public_wrapper}>
            <div className={styles.about__public_route}>
              <NavLink to={"/"}>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  className={styles.about__router_icon}
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
                className={styles.about__router_arrow}
              />
              <NavLink to={"/home/prostopoo/about"}>
                <p className={styles.about__router_name}>ПРО PROSTOPOO</p>
              </NavLink>
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.about__router_arrow}
              />
              <p
                className={`${styles.about__router_name} ${styles.about__router_active}`}
              >
                Договір публічної оферти
              </p>
            </div>
            <div className={styles.about__public_name}>
              <h2 className={styles.about__name_title}>
                Договір публічної оферти
              </h2>
            </div>
            <div className={styles.about__public_main}>
              <div className={styles.about__main_block}>
                <p className={styles.about__public_text}>
                  Цей договір між Фізичною особою-підприємцем Стадольською
                  Лілією Іванівною (зареєстрована за адресою: 03045, Україна, м.
                  Київ, вул. Набережно-Корчуватська, 14), в подальшому
                  «Продавець», і користувачем послугами інтернет-магазину, в
                  подальшому «Покупець», є договором купівлі-продажу Товарів і
                  визначає основні умови замовлення, придбання та доставки
                  товарів через інтернет-сайт https//www.prostopoo.com.ua (далі
                  — Сайт).
                </p>
                <p className={styles.about__public_text}>
                  Покупець, діючи з метою придбання Товару, приймає умови цього
                  договору купівлі-продажу товарів (далі – Договір) на наступних
                  умовах.
                </p>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>1.</span>
                  ВИЗНАЧЕННЯ ТЕРМІНІВ
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.1.</span>
                  Публічна оферта (далі — «Оферта») — публічна пропозиція
                  Продавця, адресована невизначеному колу осіб, укласти з
                  Продавцем договір купівлі-продажу товару дистанційним способом
                  (далі — «Договір») на умовах, що містяться в цій Оферті,
                  включаючи іншу інформацію, що розміщена на Сайті для
                  Замовника.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.2.</span>
                  Продавець — Фізична особа-підприємець Стадольська Лілія
                  Іванівна, яка є власником Сайту та продавцем товару, що
                  розміщений на Сайті.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.3.</span>У цій
                  Покупець — фізична або юридична особа незалежно від країни
                  походження, що є користувачем послуг в інтернет-магазині
                  Продавця.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.4.</span>
                  Замовлення — рішення Покупця замовити товар і його доставку,
                  оформлене в інтернет-магазині на Сайті та/або доручення на
                  придбання і доставку товарів.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.5.</span>
                  Сайт — інтернет-магазин розміщений у мережі Інтернет за
                  посиланням: https://www.prostopoo.com.ua та є власністю
                  Продавця.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.about__public_section} ${styles.about__section_second}`}
      >
        <div className={styles.container}>
          <div className={styles.about__main_wrapper}>
            <div className={styles.about__public_main}>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>2.</span>
                  ЗАГАЛЬНІ ПОЛОЖЕННЯ ТА ПРЕДМЕТ ДОГОВОРУ
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.1.</span>
                  Цей документ є офіційною пропозицією (публічною офертою)
                  Фізичної особи-підприємця Стадольської Лілії Іванівни щодо
                  продажу Товару, представленого на Сайті, усім фізичним і
                  юридичним особам, які реєструються в мережі Інтернет на Сайті
                  за відповідну плату.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.2.</span>
                  Договір відповідає вимогам ст. 633, 634 Цивільного кодексу
                  України і містить всі істотні умови договору купівлі-продажу.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.3.</span>У цій
                  Згідно зі статтею 642 Цивільного кодексу України повним і
                  беззастережним прийняттям умов цієї пропозиції (оферти), що
                  підтверджує укладення Договору купівлі-продажу товарів на
                  запропонованих нижче умовах, є факт оформлення та
                  підтвердження замовлення.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.4.</span>
                  Оформленням Замовлення Покупець підтверджує згоду та безумовне
                  прийняття ним умов цієї пропозиції (оферти).
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.5.</span>
                  Укладаючи Договір (тобто акцептуючи умови цієї оферти шляхом
                  оформлення Замовлення), Покупець підтверджує таке:
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>a)</span>{" "}
                    Покупець цілком і повністю ознайомлений і погоджується з
                    умовами цієї пропозиції (оферти);
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>б)</span> Якщо
                    Він дає дозвіл на збір, обробку та передачу персональних
                    даних на умовах, визначених у цьому Договорі та на Сайті у
                    розділі «Політика конфіденційності». Дозвіл на обробку
                    персональних даних діє протягом усього терміну дії Договору,
                    а також протягом необмеженого терміну після закінчення його
                    дії. Крім цього, укладенням Договору Замовник підтверджує,
                    що він повідомлений (без додаткового повідомлення) про
                    права, встановлені Законом України «Про захист персональних
                    даних», про цілі збору даних, а також про те, що його
                    персональні дані передаються Продавцю з метою можливості
                    виконання умов цього Договору, можливості проведення
                    взаєморозрахунків, а також для отримання рахунків, актів та
                    інших документів. Замовник також погоджується з тим, що
                    Продавець має право надавати доступ та передавати його
                    персональні дані третім особам без будь-яких додаткових
                    повідомлень Замовника, не змінюючи при цьому мети обробки
                    персональних даних. Обсяг прав Замовника як суб'єкта
                    персональних даних відповідно до Закону України «Про захист
                    персональних даних» йому відомий і зрозумілий.
                  </li>
                </ol>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>3.</span>
                  ЦІНА ТОВАРУ
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.1.</span>
                  Ціна на кожну позицію Товару порядок оплати за Товар визначені
                  на Сайті.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.2.</span>
                  Продавець має право в односторонньому порядку змінити ціну на
                  будь-яку позицію Товару.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.3.</span>У разі
                  зміни ціни на замовлений Товар після оформлення Замовлення
                  Продавець зобов'язується проінформувати Покупця про зміну ціни
                  Товару.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.4.</span>
                  Покупець має право підтвердити або анулювати Замовлення на
                  придбання Товару, якщо ціна була змінена Продавцем після
                  оформлення Замовлення.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.5.</span>
                  Зміна Продавцем ціни на оплачений Покупцем Товар не
                  допускається.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.6.</span>
                  Вартість доставки Товару не входить в Ціну Товару та
                  сплачується окремо за тарифами кур'єрської служби за вибором
                  Замовника.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.7.</span>
                  Зобов'язання Покупця по оплаті Товару вважаються виконаними з
                  моменту надходження Продавцю коштів на банківський рахунок.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.8.</span>
                  Розрахунки між Продавцем і Покупцем за Товар здійснюються
                  способами, зазначеними на Сайті у розділі «Замовлення та
                  доставка».
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>4.</span>
                  ЦІНА ТОВАРУ
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.1.</span>
                  Замовлення Товару здійснюється Покупцем через інтернет-магазин
                  на Сайті 24 години на добу та 7 днів на тиждень, або шляхом
                  здійснення телефонного дзвінка на номера телефонів Продавця 7
                  днів на тиждень з 8 години 00 хвилин до 20 години 00 хвилин.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.2.</span>
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>4.2.1</span> Під
                    час здійснення замовлення Покупець зобов'язується надати
                    таку реєстраційну інформацію:
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>4.2.2</span>
                    контактний номер телефону;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>4.2.3</span>
                    обрати спосіб доставки Товару;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>4.2.4</span>
                    адресу електронної пошти;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>4.2.5</span>
                    обрати спосіб оплати за замовлений Товар.
                  </li>
                </ol>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.3.</span>
                  Найменування, кількість, ціна обраного Покупцем Товару
                  вказуються в кошику Покупця на Сайті інтернет-магазину або
                  оголошується оператору, вартість Товару повинна обов’язково
                  відповідати ціні, що вказана на Сайті Продавця.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.4.</span>
                  Якщо Продавцю необхідна додаткова інформація, він має право
                  запросити її у Покупця. У разі якщо Покупець не запитує
                  додаткову інформацію у Продавця, Продавець не несе
                  відповідальності за надання якісної послуги Покупцю при
                  купівлі товарів на Сайті в інтернет-магазині.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.5.</span>
                  Ухвалення Покупцем умов цієї Оферти здійснюється за допомогою
                  внесення Покупцем відповідних даних в реєстраційну форму на
                  Сайті інтернет-магазину.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.6.</span>
                  Покупець несе відповідальність за достовірність наданої
                  інформації при оформленні Замовлення.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.7.</span>
                  Договір купівлі-продажу дистанційним способом між Продавцем і
                  Покупцем вважається укладеним з моменту електронного
                  оформлення замовлення на сервісі Сайту інтернет-магазину або
                  видачі Продавцем Покупцеві касового або товарного чеку або
                  іншого документа, що підтверджує оплату Товару.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>5.</span>
                  ДОСТАВКА ТА ПЕРЕДАЧА ТОВАРУ ПОКУПЦЮ
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.1.</span>
                  Способи, порядок і терміни доставки Товарів вказані на Сайті
                  інтернет-магазину в розділі «Замовлення та доставка». Порядок
                  і умови доставки замовленого товару Покупець вибирає
                  самостійно під час оформлення Замовлення на Сайті
                  інтернет-магазину або погоджує з оператором інтернет-магазину
                  в момент оформлення покупки, що здійснюється за номерами
                  телефонів, що розміщенні на Сайті інтернет-магазину.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.2.</span>
                  Продавець не несе відповідальності за термін доставки
                  Замовлення, після того як Замовлення буде передано до
                  компанії, що займається доставками, тому строки у подальшому
                  залежать від дій третіх осіб (перевізників).
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.3.</span>
                  Право власності та ризик випадкової втрати або пошкодження
                  товару переходить до Покупця або до його уповноваженого
                  Представника з моменту отримання товару. Моментом отримання і
                  прийняття Товару Покупцем є момент (залежно від того, який
                  настав раніше): підписання Покупцем акта приймання-передачі
                  Товару (або іншого рівнозначного за змістом документа, що
                  підтверджує факт передачі товару Покупцю), або підписання
                  Продавцем документів перевізника, що підтверджують факт
                  передачі Товару перевізнику на відправку Покупцю, або фактичне
                  отримання Покупцем Товару і вчинення ним дій, що свідчать про
                  прийняття Товару (Продавець передав, а Покупець отримав Товар
                  у пункті його видачі).
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.4.</span>
                  Доставка Товару здійснюється із залученням третіх осіб
                  (кур'єрської служби), яку обирає Покупець під час здійснення
                  замовлення.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.5.</span>
                  При отриманні Товару Покупець повинен у присутності
                  представника кур'єрської служби перевірити відповідність
                  Товару якісним і кількісним характеристикам (найменування
                  товару, кількість, комплектність).
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.6.</span>
                  Покупець або Представник Покупця під час приймання Товару
                  підтверджує своїм підписому документах, зазначених в п. 5.3.
                  Договору, що не має претензій до кількості Товару, зовнішнього
                  вигляду та комплектності Товару.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>6.</span>
                  ПРАВА ТА ОБОВ'ЯЗКИ СТОРІН
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.1.</span>
                  Покупець зобов'язаний:
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>а)</span> до
                    моменту укладення цього договору ознайомитися з його
                    змістом, умовами та цінами пропонованими Продавцем на Сайті;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>б)</span>
                    ознайомитись з інформацією про Товар, який розміщена на
                    Сайті Продавця;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>в)</span>
                    самостійно оформити замовлення в інтернет-магазині або за
                    номерами телефонів, що розміщенні на Сайті в розділі
                    «Замовлення та доставка»;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>г)</span>
                    своєчасно оплатити та отримати замовлення на умовах цього
                    Договору;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>д)</span>
                    під час отримання товару у Продавця або у перевізника
                    впевнитися у його цілісності та комплектності шляхом огляду
                    вмісту упаковки. У випадку виявлення пошкоджень та неповної
                    комплектації – зафіксувати їх у відповідному рекламаційному
                    акті, який разом із Покупцем повинен підписати співробітник
                    перевізника;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>е)</span>
                    використовувати Сайт згідно його функціонального
                    призначення, у цілях оформлення Замовлення.
                  </li>
                </ol>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.2.</span>
                  Покупець має право вимагати від інтернет-магазину дотримання
                  умов цього Договору.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.3.</span>
                  Продавець зобов'язаний:
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>а)</span>{" "}
                    дотримуватися умов цього Договору;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>б)</span>
                    передати Покупцю Товар у відповідності з оформленим
                    замовленням та умовами цього Договору.
                  </li>
                </ol>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.4.</span>
                  Продавець має право:
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>а)</span> в
                    односторонньому порядку призупинити надання послуг за цим
                    Договором у випадку порушення Покупцем умов цього Договору;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>б)</span>
                    залишити за собою право невиконання зобов'язань, у разі
                    виникнення форс-мажорних ситуацій;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>в)</span>
                    Продавець, у разі господарської необхідності, має право на
                    своєму Сайті відкрито повідомляти про співпрацю з Покупцем,
                    шляхом розміщення найменування Покупця (у контексті
                    інформації про партнерів та контрагентів Продавця), під час
                    проведення презентацій тощо. А Покупець, у свою чергу,
                    оформивши Замовлення, надає на це беззаперечне право
                    Продавцю.
                  </li>
                </ol>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>7.</span>
                  ПОВЕРНЕННЯ ТОВАРУ
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.1.</span>
                  Усі Товари, куплені на Сайті в інтернет-магазині,
                  сертифіковано та забезпечено фірмовою гарантією, строк якої
                  встановлює фірма-виробник. Під час виникнення гарантійного
                  випадку (необхідності ремонту) всю продукцію обслуговують
                  авторизовані сервіс-центри. Підставою для гарантійного
                  обслуговування є наявний у Покупця оригінальний гарантійний
                  талон із зазначенням дати продажу та штампом магазину де
                  куплено Товар. Адреси та телефони сервісних центрів містяться
                  в гарантійному талоні. Початок гарантійного строку обчислюють
                  із часу, коли Продавець передав товар покупцеві.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.2.</span>
                  Повернення Товару може відбуватися лише належної якості, якщо
                  він не використовувався і якщо збережено його товарний вигляд,
                  споживчі властивості, упаковка, пломби, ярлики, наліпки та
                  інше, а також наявність розрахункового документу, що виданий
                  Покупцю за оплату Товару. Перелік Товарів, що не підлягають
                  поверненню на підставах, передбачених у цьому пункті,
                  затверджується Постановою Кабінету Міністрів України від
                  19.03.94 №172 «Про реалізацію окремих положень Закону України
                  «Про захист прав споживачів».
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.3.</span>
                  Повернення Покупцеві вартості Товару здійснюється за умови
                  дотримання вимог, передбачених п. 7.2. цього Договору та вимог
                  чинного законодавства України.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.4.</span>У разі
                  повернення вартості Товару, таке повернення відбувається
                  шляхом банківського переказу на рахунок Покупця протягом 30
                  (тридцяти) календарних днів з моменту отримання повернутого
                  Товару від Покупця Продавцю.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.5.</span>
                  Повернення Товару належної якості на адресу Продавця
                  здійснюється за рахунок Покупця та Продавцем Покупцеві не
                  відшкодовується.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.6.</span>
                  Розгляд вимог, передбачених Законом України «Про захист прав
                  споживачів», провадиться Продавцем за умови надання Покупцем
                  документів, передбачених чинним законодавством України.
                  Продавець не відповідає за недоліки Товару, які виникли після
                  його передання Покупцеві внаслідок порушення Покупцем правил
                  зберігання Товару, дій третіх осіб або непереборної сили.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.7.</span>
                  Повернення товару у випадках, передбачених законом та цим
                  Договором, здійснюється за адресою Продавця, що вказана на
                  офіційному Сайті в Розділі «Контакти» або у оператора за
                  номером телефону, що розміщений в розділі «Контакти».
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.8.</span>У разі
                  відмови Покупця від Замовлення (посилки), відправлення
                  повертається відправнику, тобто Продавцю. Оплату зворотного
                  пересилання посилки оплачує Продавець.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.9.</span>З більш
                  детальною інформаціє щодо Гарантії на Товар та обмін Товару
                  Покупець може ознайомитися на Сайті Продавця в розділах
                  «Гарантії» та «Обмін».
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>8.</span>
                  ВІДПОВІДАЛЬНІСТЬ СТОРІН
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.1.</span>
                  Продавець не несе відповідальності за шкоду, заподіяну
                  Покупцеві внаслідок неналежного використання Товарів,
                  придбаних у Продавця.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.2.</span>
                  Продавець не несе відповідальності за неналежне, несвоєчасне
                  виконання Замовлень і своїх зобов'язань в разі надання
                  Покупцем недостовірної або помилкової інформації.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.3.</span>
                  Продавець і Покупець несуть відповідальність за виконання
                  своїх зобов'язань відповідно до чинного законодавства України
                  та положень цього Договору.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.4.</span>
                  Продавець не несе відповідальності за:
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.1</span>
                    змінений виробником зовнішній вигляд, комплектацію
                    Товару(ів);
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.2</span>
                    за незначні розбіжності кольорової гами Товару(ів), що може
                    відрізнятися від зображення Товару(ів) в інтернет-магазині
                    через різній тип та різне налаштування моніторів
                    персональних комп'ютерів та інших пристроїв;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.3</span>
                    за зміст і правдивість інформації, наданої Покупцем при
                    здійсненні Замовлення;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.4</span>
                    за затримку і перебої в обробці Замовлення, надіслання та
                    передання Товару(ів), які відбуваються з причин, що
                    знаходяться поза сферою контролю Продавця;
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>8.4.5</span>
                    за незаконні дії, здійснені Покупцем під час оформлення
                    Замовлення.
                  </li>
                </ol>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.5.</span>
                  Покупець, використовуючи наданий йому доступ до мережі
                  Інтернет, самостійно несе відповідальність за шкоду, заподіяну
                  його діями третім особам або їх майну. Продавець не несе
                  відповідальності за правильність зазначених під час здійснення
                  Замовлення даних Покупця, наслідки несвоєчасного оновлення
                  Покупцем таких даних та наслідки доступу третіх осіб до
                  особистого кабінету Покупця.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.6.</span>
                  Продавець або Покупець звільняються від відповідальності за
                  повне або часткове невиконання своїх зобов'язань, якщо
                  невиконання є наслідком форс-мажорних обставин, таких як:
                  масштабні кібератаки, війна або військові дії, землетрус,
                  повінь, пожежа та інші стихійні лиха, що виникли незалежно від
                  волі Продавця та/або Покупця після укладення цього Договору.
                  Сторона, яка не може виконати свої зобов'язання, негайно
                  повідомляє про це іншу Сторону.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>9.</span>
                  ІНШІ ПОЛОЖЕННЯ
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.1.</span>
                  Цей Договір діє до повного виконання сторонами своїх
                  зобов’язань.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.2.</span>
                  Продавець залишає за собою право в односторонньому порядку
                  вносити зміни до цього Договору, які набувають чинності з
                  моменту їх опублікування на Сайті та розповсюджуються на
                  Замовлення, здійсненні з моменту опублікування відповідних
                  змін на Сайті.
                </p>
              </div>
              <div className={styles.about__main_footer}>
                <p className={styles.about__primary_text}>
                  Фізична особа – підприємець
                </p>
                <p className={styles.about__primary_text}>
                  Стадольська Лілія Іванівна
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPublic;
