import React, { useEffect, useState } from "react";
import styles from "./CatalogIndividualProduct.module.css";
import { IReview } from "../../../../../services/reviews/review.interface";
import {
  IIndividualInsole,
  IIndividualVariation,
} from "../../../../../services/individual-insoles/individualInsoles.interface";
import Loader from "../../../../../components/loader/Loader";
import { useTranslation } from "react-i18next";

interface Props {
  individualReviews: IReview[];
  onOpenReviewPopup: () => void;
  individualInsoles: IIndividualInsole[];
  variations: IIndividualVariation[];
  onCoverageChange: (newCoverage: IIndividualVariation) => void;
}

const CatalogIndividualProduct: React.FC<Props> = ({
  individualReviews,
  onOpenReviewPopup,
  individualInsoles,
  variations,
  onCoverageChange,
}) => {
  const [peopleVariations, setPeopleVariations] = useState<
    IIndividualVariation[]
  >([]);
  const [sportVariations, setSportVariations] = useState<
    IIndividualVariation[]
  >([]);
  const [diabeticVariations, setDiabeticVariations] = useState<
    IIndividualVariation[]
  >([]);
  const [countOfCertificate, setCountOfCertificate] = useState<number>(1);
  const [activeCoverage, setActiveCoverage] = useState<IIndividualVariation>();
  const { t } = useTranslation();

  useEffect(() => {
    const people: IIndividualVariation[] = [];
    const sport: IIndividualVariation[] = [];
    const diabetic: IIndividualVariation[] = [];

    variations.forEach((variation: IIndividualVariation) => {
      if (variation.category === "people") {
        people.push(variation);
      } else if (variation.category === "sport") {
        sport.push(variation);
      } else if (variation.category === "diabetic") {
        diabetic.push(variation);
      }
    });

    setPeopleVariations(people);
    setSportVariations(sport);
    setDiabeticVariations(diabetic);
    setActiveCoverage(variations[0]);
  }, [variations]);

  const handleCountOfProduct = (operation: "increment" | "decrement") => {
    setCountOfCertificate((prevCount) => {
      if (operation === "increment") {
        return prevCount + 1;
      } else if (operation === "decrement" && prevCount > 1) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  const handleCoverageClick = (variation: IIndividualVariation) => {
    setActiveCoverage(variation);
    onCoverageChange(variation);
  };

  if (!individualInsoles[0]) {
    return <Loader />;
  }

  return (
    <div className={styles.catalog__main_product}>
      <div className={styles.catalog__product_banners}>
        {activeCoverage?.image_url ? (
          <>
            <img
              src={individualInsoles[0].image_url[0]}
              alt="individual gift banner"
              className={styles.catalog__banners_item}
            />
            {activeCoverage.image_url.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt="individual gift banner"
                className={styles.catalog__banners_item}
              />
            ))}
          </>
        ) : (
          individualInsoles[0].image_url.map((image: string, index: number) => (
            <img
              key={index}
              src={image}
              alt="individual gift banner"
              className={styles.catalog__banners_item}
            />
          ))
        )}
      </div>
      <div className={styles.catalog__product_info}>
        <div className={styles.catalog__info_header}>
          <h3 className={styles.catalog__header_title}>
            {individualInsoles[0].name_ua}
          </h3>
          <div className={styles.catalog__header_info}>
            {individualReviews.length > 0 ? (
              <div className={styles.catalog__header_reviews}>
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <img
                  src="../../images/review-star.svg"
                  alt="review star icon"
                  className={styles.catalog__reviews_star}
                />
                <span className={styles.admin__reviews_count}>
                  (
                  {individualReviews.length === 1
                    ? individualReviews.length +
                      t("products.productsReviewSingle")
                    : individualReviews.length +
                      t("products.productsReviewMulti")}
                  )
                </span>
              </div>
            ) : (
              <p
                onClick={onOpenReviewPopup}
                className={styles.catalog__header_left}
              >
                {t("products.productsLeftReview")}
              </p>
            )}
            <p className={styles.catalog__header_code}>
              {t("products.productsCode")}
              <span className={styles.catalog__code_item}>
                {individualInsoles[0].article}
              </span>
            </p>
          </div>
        </div>
        <div className={styles.catalog__info_main}>
          <h2 className={styles.catalog__main_price}>
            {activeCoverage?.additional_price
              ? activeCoverage?.additional_price
              : individualInsoles[0].base_price}{" "}
            {t("products.productsCurrency")}
          </h2>
          <div className={styles.catalog__main_count}>
            <span
              onClick={() => handleCountOfProduct("decrement")}
              className={styles.catalog__count_button}
            >
              <img
                src="../../images/minus-icon.svg"
                alt="certificate action icon"
                className={styles.catalog__button_action}
              />
            </span>
            <p className={styles.catalog__count_text}>{countOfCertificate}</p>
            <span
              onClick={() => handleCountOfProduct("increment")}
              className={styles.catalog__count_button}
            >
              <img
                src="../../images/plus-icon.svg"
                alt="certificate action icon"
                className={styles.catalog__button_action}
              />
            </span>
          </div>
        </div>
        <div className={styles.catalog__info_footer}>
          <div className={styles.catalog__footer_coverage}>
            <p className={styles.catalog__coverage_title}>
              {t("individualInsoles.individualInsolesChooseCoverage")}
              <span className={styles.catalog__coverage_types}>
                {activeCoverage?.variation_description_ua
                  ? activeCoverage?.variation_description_ua
                  : individualInsoles[0].article_variation_ua}
              </span>
            </p>
            <div className={styles.catalog__coverage_main}>
              <div className={styles.catalog__main_block}>
                <p className={styles.catalog__block_text}>
                  {t("individualInsoles.individualInsolesPeople")}
                </p>
                <div className={styles.catalog__block_items}>
                  {peopleVariations.map(
                    (variation: IIndividualVariation, index: number) => (
                      <span
                        onClick={() => handleCoverageClick(variation)}
                        key={index}
                        className={`${styles.catalog__block_circle} ${
                          activeCoverage === variation ? styles.active : ""
                        }`}
                      >
                        <img
                          src={variation.image}
                          alt="catalog coverage icon"
                          className={styles.catalog__circle_image}
                        />
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className={styles.catalog__main_block}>
                <p className={styles.catalog__block_text}>
                  {t("individualInsoles.individualInsolesSport")}
                </p>
                <div className={styles.catalog__block_items}>
                  {sportVariations.map(
                    (variation: IIndividualVariation, index: number) => (
                      <span
                        key={index}
                        className={`${styles.catalog__block_circle} ${
                          activeCoverage === variation ? styles.active : ""
                        }`}
                        onClick={() => handleCoverageClick(variation)}
                      >
                        <img
                          src={variation.image}
                          alt="catalog coverage icon"
                          className={styles.catalog__circle_image}
                        />
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className={styles.catalog__main_block}>
                <p className={styles.catalog__block_text}>
                  {t("individualInsoles.individualInsolesDiabetic")}
                </p>
                <div className={styles.catalog__block_items}>
                  {diabeticVariations.map(
                    (variation: IIndividualVariation, index: number) => (
                      <span
                        key={index}
                        className={`${styles.catalog__block_circle} ${
                          activeCoverage === variation ? styles.active : ""
                        }`}
                        onClick={() => handleCoverageClick(variation)}
                      >
                        <img
                          src={variation.image}
                          alt="catalog coverage icon"
                          className={styles.catalog__circle_image}
                        />
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
          <button className={styles.catalog__info_order} type="button">
            {t("individualInsoles.individualInsolesButtonText")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogIndividualProduct;
