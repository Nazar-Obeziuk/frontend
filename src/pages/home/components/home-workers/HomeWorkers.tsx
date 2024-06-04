import React from "react";
import HomeWorker from "./home-worker/HomeWorker";
import styles from "./HomeWorkers.module.css";

const workersData = [
  {
    id: 1,
    worker_image_path: "./images/worker-test-1.svg",
    worker_title: "Ян Степаненко",
    worker_subtitle: "фізичний терапевт / ерготерапевт",
    worker_first_text: "Працює фізичним терапевтом із 2019 року.",
    worker_second_text:
      "Закінчив Національний технічний університет України «Київський політехнічний інститут імені Ігоря Сікорського» За спеціальністю фізична терапія / ерготерапія.",
    worker_third_text:
      "Працює з пацієнтами за патологіями неврологічного і вертеброгенного характеру, та ортопедії. Закінчив курси кінезіотейпування, педіатричної та ортопедичної діагностики. Пройшов курси пліометрики і різних методів фізичного вдосконалення.",
  },
  {
    id: 2,
    worker_image_path: "./images/worker-2.png",
    worker_title: "Ігор Фалько",
    worker_subtitle: "Майстер з виготовлення ортопедичних устілок",
    worker_first_text:
      "За якість виготовлення устілок відповідає наш досвідчений майстер. Має досвід понад 20 років у конструюванні взуття й взуттєвого оздоблення.",
    worker_second_text:
      "Завдяки сумлінній праці й дотриманню всіх норм і стандартів виготовлення ортопедичних устілок, Ви отримуєте  якісний і надійний продукт.",
    worker_third_text:
      "Наш майстер має профільну освіту, яку отримав в Професійно-технічному училищі №12, за спеціальністю майстер взуттєвої справи.",
  },
];

const HomeWorkers: React.FC = () => {
  return (
    <React.Fragment>
      <section className={styles.home__workers_section}>
        <div className={styles.container}>
          <div className={styles.home__workers_wrapper}>
            <h2 className={styles.home__workers_title}>
              НАШІ{" "}
              <span className={styles.home__workers_primary}>ЕКСПЕРТИ</span> З
              ВИГОТОВЛЕННЯ УСТІЛОК
            </h2>
          </div>
        </div>
      </section>
      <div className={styles.home__workers_box}>
        {workersData.map((worker) => (
          <HomeWorker worker={worker} key={worker.id} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default HomeWorkers;
