// // import React from "react";
// // import styles from "./CatalogIndividualCharacteristics.module.css";
// // import {
// //   IIndividualInsole,
// //   IIndividualVariation,
// // } from "../../../../../services/individual-insoles/individualInsoles.interface";
// // import Loader from "../../../../../components/loader/Loader";

// // interface Props {
// //   individualInsoles: IIndividualInsole[];
// //   activeCoverage: IIndividualVariation;
// // }

// // const CatalogIndividualCharacteristics: React.FC<Props> = ({
// //   individualInsoles,
// //   activeCoverage,
// // }) => {
// //   if (!individualInsoles[0]) {
// //     return <Loader />;
// //   }

// //   return (
// //     <div className={styles.catalog__main_characteristics}>
// //       <div className={styles.catalog__characteristics_info}>
// //         <p className={styles.catalog__characteristics_title}>
// //           {individualInsoles[0].characteristics_subtitle_ua}
// //         </p>
// //         <p className={styles.catalog__info_text}>
// //           {individualInsoles[0].characteristics_description_ua}
// //         </p>
// //       </div>
// //       <div className={styles.catalog__characteristics_table}>
// //         <table className={styles.catalog__table_item}>
// //           <tbody>
// //             {activeCoverage ? (Object.entries(individualInsoles[0].characteristics).map(
// //               ([key, value]: any) => (
// //                 <tr className={styles.catalog__item_line} key={key}>
// //                   <th className={styles.catalog__line_key}>{key}</th>
// //                   <td className={styles.catalog__line_value}>{value}</td>
// //                 </tr>
// //               )
// //             )}) : Object.entries(individualInsoles[0].characteristics).map(
// //               ([key, value]: any) => (
// //                 <tr className={styles.catalog__item_line} key={key}>
// //                   <th className={styles.catalog__line_key}>{key}</th>
// //                   <td className={styles.catalog__line_value}>{value}</td>
// //                 </tr>
// //               )
// //             )}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CatalogIndividualCharacteristics;

// import React, { act, useEffect } from "react";
// import styles from "./CatalogIndividualCharacteristics.module.css";
// import {
//   IIndividualInsole,
//   IIndividualVariation,
// } from "../../../../../services/individual-insoles/individualInsoles.interface";
// import Loader from "../../../../../components/loader/Loader";

// interface Props {
//   individualInsoles: IIndividualInsole[];
//   activeCoverage: IIndividualVariation;
// }

// const CatalogIndividualCharacteristics: React.FC<Props> = ({
//   individualInsoles,
//   activeCoverage,
// }) => {
//   useEffect(() => {
//     console.log(individualInsoles);
//     console.log(activeCoverage);
//   }, []);

//   if (!individualInsoles[0]) {
//     return <Loader />;
//   }

//   return (
//     <div className={styles.catalog__main_characteristics}>
//       {/* <div className={styles.catalog__characteristics_info}>
//         <p className={styles.catalog__characteristics_title}>
//           {activeCoverage
//             ? activeCoverage.characteristics_subtitle_ua
//             : individualInsoles[0].characteristics_subtitle_ua}
//         </p>
//         <p className={styles.catalog__info_text}>
//           {activeCoverage
//             ? activeCoverage.characteristics_description_ua
//             : individualInsoles[0].characteristics_description_ua}
//         </p>
//       </div>
//       <div className={styles.catalog__characteristics_table}>
//         <table className={styles.catalog__table_item}>
//           <tbody>
//             {activeCoverage
//               ? Object.entries(activeCoverage.characteristics_ua).map(
//                   ([key, value]: any) => (
//                     <tr className={styles.catalog__item_line} key={key}>
//                       <th className={styles.catalog__line_key}>{key}</th>
//                       <td className={styles.catalog__line_value}>{value}</td>
//                     </tr>
//                   )
//                 )
//               : Object.entries(individualInsoles[0].characteristics_ua).map(
//                   ([key, value]: any) => (
//                     <tr className={styles.catalog__item_line} key={key}>
//                       <th className={styles.catalog__line_key}>{key}</th>
//                       <td className={styles.catalog__line_value}>{value}</td>
//                     </tr>
//                   )
//                 )}
//           </tbody>
//         </table>
//       </div> */}
//     </div>
//   );
// };

// export default CatalogIndividualCharacteristics;

import React, { useEffect, useState } from "react";
import styles from "./CatalogIndividualCharacteristics.module.css";
import {
  IIndividualInsole,
  IIndividualVariation,
} from "../../../../../services/individual-insoles/individualInsoles.interface";
import Loader from "../../../../../components/loader/Loader";
import { useTranslation } from "react-i18next";

interface Props {
  individualInsoles: IIndividualInsole[];
  activeCoverage: IIndividualVariation;
}

const CatalogIndividualCharacteristics: React.FC<Props> = ({
  individualInsoles,
  activeCoverage,
}) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("ua");
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ua") {
      setActiveLanguage("ua");
    } else {
      setActiveLanguage("en");
    }
  }, [individualInsoles, activeCoverage, i18n.language]);

  if (!individualInsoles[0]) {
    return <Loader />;
  }

  return (
    <div className={styles.catalog__main_characteristics}>
      <div className={styles.catalog__characteristics_info}>
        <p className={styles.catalog__characteristics_title}>
          {activeLanguage === "ua"
            ? individualInsoles[0].characteristics_subtitle_ua
            : individualInsoles[0].characteristics_subtitle_en}
        </p>
        <p className={styles.catalog__info_text}>
          {activeLanguage === "ua"
            ? individualInsoles[0].characteristics_description_ua
            : individualInsoles[0].characteristics_description_en}
        </p>
      </div>
      <div className={styles.catalog__characteristics_table}>
        <table className={styles.catalog__table_item}>
          <tbody>
            {activeCoverage
              ? Object.entries(activeCoverage.characteristics_ua).map(
                  ([key, value]: any) => (
                    <tr className={styles.catalog__item_line} key={key}>
                      <th className={styles.catalog__line_key}>{key}</th>
                      <td className={styles.catalog__line_value}>{value}</td>
                    </tr>
                  )
                )
              : Object.entries(individualInsoles[0].characteristics_ua).map(
                  ([key, value]: any) => (
                    <tr className={styles.catalog__item_line} key={key}>
                      <th className={styles.catalog__line_key}>{key}</th>
                      <td className={styles.catalog__line_value}>{value}</td>
                    </tr>
                  )
                )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CatalogIndividualCharacteristics;
