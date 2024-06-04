import React from "react";
import styles from "./AboutPolicy.module.css";

const AboutPolicy: React.FC = () => {
  return (
    <>
      <section
        className={`${styles.about__policy_section} ${styles.about__policy_first}`}
      >
        <div className={styles.container}>
          <div className={styles.about__policy_wrapper}>
            <div className={styles.about__policy_route}>
              <img
                src="../../images/home-icon.svg"
                alt="home icon"
                className={styles.about__router_icon}
              />
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.about__router_arrow}
              />
              <p className={styles.about__router_name}>ПРО PROSTOPOO</p>
              <img
                src="../../images/navigation-arrow.svg"
                alt="router arrow"
                className={styles.about__router_arrow}
              />
              <p
                className={`${styles.about__router_name} ${styles.about__router_active}`}
              >
                Політика конфіденційності
              </p>
            </div>
            <div className={styles.about__policy_name}>
              <h2 className={styles.about__name_title}>
                Політика конфіденційності
              </h2>
            </div>
            <div className={styles.about__policy_main}>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>1.</span>
                  Загальні положення
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.1.</span>
                  Фізична особа-підприємець Стадольська Лілія Іванівна (далі —
                  Підприємець) приймає на себе зобов’язання стосовно захисту
                  персональних даних всіх осіб, які відвідали сайт —
                  https://www.prostopoo.com.ua (далі — Сайт), у зв'язку з чим
                  прагне захищати конфіденційність персональних даних
                  відвідувачів Сайту, тим самим створивши та забезпечивши
                  максимально комфортні умови використання Сайту.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.2.</span>
                  Цю Політику конфіденційності затверджено з метою охорони та
                  захисту персональних даних клієнтів (включно з користувачами
                  сайту), конфіденційної інформації, що містить персональні
                  дані.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.3.</span>У цій
                  Політиці конфіденційності та захисту персональних даних (далі
                  — Політика) встановлено порядок здійснення фізичною особою —
                  підприємцем Стадольською Лілією Іванівною обробки персональних
                  даних, види персональних даних, які збираються, цілі
                  використання таких персональних даних, взаємодія Підприємця з
                  третіми особами, заходи безпеки для захисту персональних
                  даних, умови доступу до персональних даних, а також контактна
                  інформація замовників послуг Підприємця та відвідувачів сайту
                  (далі — Користувачів) щодо отримання доступу, внесення змін,
                  блокування або видалення своїх персональних даних та звернення
                  з будь-якими питаннями, які можуть виникнути у Користувача
                  щодо практики захисту персональних даних.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.4.</span>
                  Обробка та зберігання персональних даних здійснюється фізичною
                  особою-підприємцем Стадольською Лілією Іванівною відповідно до
                  вимог Закону України «Про захист персональних даних» від
                  01.06.2010 року, Регламенту Європейського Парламенту і Ради
                  (ЄС) 2016/679 від 27.04.2016 року про захист фізичних осіб у
                  зв’язку з опрацюванням персональних даних і про вільний рух
                  таких даних та інших законодавчих актів, що регулюють порядок
                  взаємодії із персональними даними користувачів мережі
                  Інтернет.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.5.</span>
                  Ця Політика не поширюється на сайти, перехід на які
                  здійснюється за допомогою гіперпосилань, розміщених на Сайті.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.6.</span>
                  Правовою основою для обробки персональних даних є згода
                  Користувача на опрацювання персональних даних з метою надання
                  фізичною особою-підприємцем Стадольською Лілією Іванівною
                  своїх послуг, та/або необхідність виконання договору, стороною
                  якого є Користувач.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>1.7.</span>
                  Повідомляємо, що фізична особа-підприємець Стадольська Лілія
                  Іванівна застосовує файли сookie. Із кожним відвідуванням
                  Сайту може збиратися інформація, що стосується пристроїв, які
                  використовують Користувачі, і мереж, до яких Користувачі
                  приєднуються, коли користуються Сайтом.
                </p>
                <ol className={styles.about__main_list}>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>1.7.1.</span>{" "}
                    Файли сookie — це невеликі блоки даних, які розміщуються на
                    тимчасове зберігання на жорсткий диск комп’ютера або у
                    мобільний пристрій Користувачів для того, щоб Користувачі
                    могли більш ефективно користуватися Сайтом.
                  </li>
                  <li className={styles.about__list_numeric}>
                    <span className={styles.about__list_count}>1.7.2.</span>{" "}
                    Якщо Користувач надає згоду на опрацювання персональних
                    даних, то це дозволяє фізичній особі-підприємцю Стадольській
                    Лілії Іванівні використовувати файли cookie кожного разу,
                    коли Користувач користується Сайтом.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${styles.about__policy_section} ${styles.about__section_second}`}
      >
        <div className={styles.container}>
          <div className={styles.about__main_wrapper}>
            <div className={styles.about__policy_main}>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>2.</span>
                  Мета обробки персональних даних
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>2.1.</span>
                  Метою обробки персональних даних є надання послуг, підвищення
                  їх якості та взаємодії з Користувачами.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>3.</span>
                  Персональні дані та неперсоніфікована інформація
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.1.</span>
                  Персональні дані — відомості чи сукупність відомостей про
                  Користувача, який ідентифікований або може бути конкретно
                  ідентифікований.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.2.</span>
                  МНеперсоніфікована інформація — інформація, яка не прив’язана
                  до конкретного Користувача Послуг.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.3.</span>
                  Персональні дані, які збирає, обробляє та зберігає фізична
                  особа-підприємець Стадольська Лілія Іванівна, охоплюють
                  персональні дані, які надаються Користувачами при оформленні
                  замовлення на надання фізичною особою-підприємцем Стадольською
                  Лілією Іванівною послуг через оператора або ж при оформленні
                  замовлення на Сайті, шляхом заповнення відповідної
                  форми-замовлення.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>3.4.</span>
                  Неперсоніфікована інформація використовується виключно для
                  формування статистичних даних та з метою покращення наших
                  послуг, також можливе інформування Користувачів про Послуги.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>4.</span>
                  Згода на обробку та зберігання
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.1.</span>
                  Обробка та зберігання персональних даних, які надаються
                  Користувачами при оформленні замовлення на надання фізичною
                  особою-підприємцем Стадольською Лілією Іванівною послуг
                  здійснюється виключно за умови згоди Користувача про таку
                  обробку та зберігання шляхом вчинення відповідних дій:
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    під час оформлення замовлення на надання послуг на Сайті
                    шляхом проставлення відмітки (галочки) про згоду на обробку
                    персональних даних;
                  </li>
                  <li className={styles.about__list_item}>
                    під час оформлення замовлення на надання послуг через
                    оператора шляхом оплати таких послуг.
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.2.</span>У такому
                  випадку фізична особа-підприємець Стадольська Лілія Іванівна
                  вважає, що Користувач:
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    безумовно, повністю та без будь-яких змін приймає умови цієї
                    Політики;
                  </li>
                  <li className={styles.about__list_item}>
                    повідомлений, що на Сайті може відбуватися збір персональних
                    даних Користувача та їх обробка;
                  </li>
                  <li className={styles.about__list_item}>
                    надає згоду на збір та обробку усіх наданих Користувачем
                    персональних даних з метою, вказаною у цій Політиці;
                  </li>
                  <li className={styles.about__list_item}>
                    надає згоду на збір та зберігання персональних даних
                    Користувача без обмеження терміну дії доти, доки Користувач
                    особисто не звернеться з вимогою або побажанням щодо
                    припинення обробки персональних даних та/або їх знищення або
                    до моменту припинення відносин за ініціативи фізичної особи
                    — підприємця Стадольської Лілії Іванівни чи інших підстав
                    відповідно до вимог законодавства.
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>4.3.</span>
                  Приймаючи умови Політики, Користувач дає згоду на обробку
                  своїх персональних даних на умовах, зазначених у цій Політиці
                  конфіденційності.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>5.</span>
                  Перелік персональних даних
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>5.1.</span>
                  Перелік персональних даних користувачів, які можуть бути
                  зібрані, збережені та використані під час роботи з Сайтом:
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    інформація, яку Користувач надає під час замовлення послуг
                    (прізвище, ім’я, по батькові, номер телефону, адреса
                    електронної пошти тощо);
                  </li>
                  <li className={styles.about__list_item}>
                    інформація, що міститься в будь-яких повідомленнях, які
                    Користувач надсилає електронною поштою, за допомогою засобів
                    мобільного зв’язку або через Сайт, включно з його
                    комунікаційним контентом і метаданими;
                  </li>
                  <li className={styles.about__list_item}>
                    будь-яку іншу особисту інформацію, яку Користувач нам
                    надсилає та надає у контактних формах на Сайті;
                  </li>
                  <li className={styles.about__list_item}>
                    cookie-файли, які мають важливе значення і без яких робота
                    Сайту неможлива та cookie-файли, які збираються та
                    надсилаються до відповідних серверів, щоб ми мали можливість
                    використовувати їхні інструменти для покращення роботи Сайту
                    (такі журнали сервера можуть містити інформацію про
                    веб-запити, IP-адресу, типи і мову браузера, дату і час
                    запитів, а також містити один або декілька файлів cookie, за
                    якими можна визначити браузер або інформацію про пристрої
                    Користувача);
                  </li>
                  <li className={styles.about__list_item}>
                    у процесі надання послуг можуть бути затребувані інші
                    персональні дані, що необхідні для ефективнішого надання
                    послуг та задоволення потреб та/або запитів Користувачів.
                  </li>
                </ul>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>6.</span>
                  Цілі опрацювання персональних даних
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.1.</span>
                  Персональні дані надані Користувачами через Сайт, будуть
                  використовуватись для таких цілей:
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    адміністрування Сайту і бізнесу;
                  </li>
                  <li className={styles.about__list_item}>
                    надання послуг та задоволення запитів Користувачів;
                  </li>
                  <li className={styles.about__list_item}>
                    відправка Користувачам повідомлень електронною поштою та/або
                    за допомогою засобів мобільного зв’язку;
                  </li>
                  <li className={styles.about__list_item}>
                    відправка Користувачам повідомлень електронною поштою та/або
                    за допомогою засобів мобільного зв’язку (за запитом
                    Користувачів);
                  </li>
                  <li className={styles.about__list_item}>
                    розгляд запитів та/або скарг, надісланих Користувачами з
                    приводу функціонування Сайту;
                  </li>
                  <li className={styles.about__list_item}>
                    забезпечення безпеки Сайту і запобігання шахрайству;
                  </li>
                  <li className={styles.about__list_item}>
                    перевірка дотримання умов, що регулюють використання нашого
                    сайту (включаючи моніторинг особистих повідомлень,
                    відправлених через контактну форму приватними повідомленнями
                    на сайті);
                  </li>
                  <p className={styles.about__policy_text}>тощо.</p>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>6.2.</span>
                  Крім того, фізична особа-підприємець Стадольська Лілія
                  Іванівна може використовувати персональні дані Користувачів у
                  маркетингових цілях відповідно до закону. А саме використання
                  персональних даних для прямого маркетингу (комерційна розсилка
                  і маркетингові повідомлення про нові продукти, послуги та
                  пропозиції, які, на нашу думку, будуть цікаві). Користувачі
                  можуть відмовитися від підписки на такі повідомлення в
                  майбутньому, зв’язавшись з фізичною особою-підприємцем
                  Стадольською Лілією Іванівною.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>7.</span>
                  Доступ до персональних даних Користувачів третіми особами
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.1.</span>
                  Фізична особа-підприємець Стадольська Лілія Іванівна має право
                  розкрити особисту інформацію Користувачів у виключних випадках
                  тільки для цілей, викладених в цій Політиці, будь-якому зі
                  співробітників, посадових осіб, страховиків, професійних
                  консультантів, агентів, постачальників тощо.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.2.</span>
                  Персональні дані можуть бути передані третім особам у таких
                  випадках:
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    у разі необхідності укладення чи виконання правочину між
                    фізичною особою – підприємцем Стадольською Лілією Іванівною
                    та третіми особами, внаслідок чого останні зможуть отримати
                    доступ до таких даних з метою участі у наданні послуг та/або
                    наданні відповідних послуг самостійно;
                  </li>
                  <li className={styles.about__list_item}>
                    у разі необхідності для формування та здійснення юридичних
                    процедур (складання претензій, позовів, звернень, запитів
                    тощо);
                  </li>
                  <li className={styles.about__list_item}>
                    за наявності важливих підстав суспільного інтересу;
                  </li>
                  <li className={styles.about__list_item}>
                    за обґрунтованими запитами державних органів, які мають
                    право вимагати і одержувати такі дані та інформацію.
                  </li>
                  <li className={styles.about__list_item}>
                    розгляд запитів та/або скарг, надісланих Користувачами з
                    приводу функціонування Сайту;
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.3.</span>
                  Якщо Користувач надає інформацію від імені чи в інтересах
                  третіх осіб (наприклад, своїх клієнтів), то інформація, яка
                  надається про таких третіх осіб, збирається та обробляється на
                  тих самих умовах, на яких обробляються персональні дані
                  Користувачів.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.4.</span>
                  За винятком випадків, передбачених у цій Політиці, ми
                  зобов’язуємось не надавати персональні дані третім особам.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>7.5.</span>
                  Треті особи, що отримують доступ до персональних даних
                  Користувачів, не мають права їх розголошення за винятком
                  випадків, передбачених законом та у цією Політикою.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>8.</span>
                  Період зберігання персональних даних
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.1.</span>
                  Згода Користувачів на обробку та зберігання персональних даних
                  діє протягом невизначеного строку. Строк зберігання
                  персональних даних Користувачів необмежений.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>8.2.</span>
                  Персональні дані Користувачів обробляються у строк, не більший
                  ніж це необхідно відповідно до їх законного призначення та
                  цілей, визначених цією Політикою.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>9.</span>
                  Права Користувачів
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.1.</span>
                  При наданні персональних даних для обробки та зберігання,
                  Користувачі мають такі права:
                </p>
                <ul className={styles.about__policy_list}>
                  <li className={styles.about__list_item}>
                    вимагати доступ до персональних даних;
                  </li>
                  <li className={styles.about__list_item}>
                    вимагати виправлення будь-яких неточностей у персональних
                    даних;
                  </li>
                  <li className={styles.about__list_item}>
                    вимагати часткове або повне видалення персональних даних;
                  </li>
                  <li className={styles.about__list_item}>
                    право на обмеження та заперечення проти обробки персональних
                    даних, а також право на мобільність даних;
                  </li>
                  <li className={styles.about__list_item}>
                    надавати оновлені персональні дані Користувача;
                  </li>
                  <li className={styles.about__list_item}>
                    відкликання згоди на обробку персональних даних.
                  </li>
                </ul>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.2.</span>
                  Для реалізації вказаних прав, необхідно звернутись до фізичної
                  особи-підприємця Стадольської Лілії Іванівни з письмовою
                  заявою, направленою на електронну адресу:
                  info@prostopoo.com.ua
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>9.3.</span>
                  Якщо у Користувачів є скарга щодо будь-якої обробки
                  персональних даних, вони можуть звернутися до фізичної особи –
                  підприємця., до Уповноваженого Верховної Ради України з прав
                  людини або до суду.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>10.</span>
                  Безпека даних
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>10.1.</span>
                  Повідомляємо, що для захисту персональних даних Користувачів
                  вжито всіх необхідних заходів від несанкціонованого доступу,
                  зміни, розкриття чи знищення із застосуванням відповідних
                  технічних і організаційних інструментів.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>11.</span>
                  Зміни до умов Політики
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>11.1.</span>
                  Фізична особа-підприємець Стадольська Лілія Іванівна може
                  вносити у будь-який момент зміни до умов Політики шляхом
                  оприлюднення нової редакції на Сайті із зазначенням про
                  відповідні зміни.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>12.1.</span>
                  Усі зміни набувають чинності з моменту їх оприлюднення на
                  Сайті.
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>13.1.</span>
                  Продовжуючи використовувати сайт, Користувач підтверджує згоду
                  з новими умовами Політики у редакції, чинній на момент
                  використання Сайту.
                </p>
              </div>
              <div className={styles.about__main_block}>
                <p className={styles.about__primary_numeric}>
                  <span className={styles.about__text_count}>12.</span>
                  Контактна інформація
                </p>
                <p className={styles.about__list_numeric}>
                  <span className={styles.about__list_count}>12.1.</span>
                  Якщо у Користувачів виникнуть будь-які запитання щодо Політики
                  конфіденційності, можна звертатися за електронною адресою:
                  info@prostopoo.com.ua або за адресою: 03045 Київ, вул.
                  Набережно-Корчуватська, 14.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPolicy;
