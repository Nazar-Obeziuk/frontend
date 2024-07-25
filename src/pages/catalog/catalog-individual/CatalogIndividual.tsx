import React, { useEffect, useState } from "react";
import styles from "./CatalogIndividual.module.css";
import CatalogIndividualProduct from "./components/catalog-individual-product/CatalogIndividualProduct";
import CatalogIndividualAbout from "./components/catalog-individual-about/CatalogIndividualAbout";
import CatalogIndividualCharacteristics from "./components/catalog-individual-characteristics/CatalogIndividualCharacteristics";
import { NavLink } from "react-router-dom";
import Reviews from "../../../components/reviews/Reviews";
import ReviewPopup from "../../../components/review-popup/ReviewPopup";
import {
  createIndividualReview,
  getAllIndividualReviews,
} from "../../../services/reviews/reviews";
import { IProductReview } from "../../../services/products/product.interface";
import {
  getAllIndividualInsoles,
  getAllIndividualVariations,
} from "../../../services/individual-insoles/individualInsoles";
import {
  IIndividualInsole,
  IIndividualVariation,
} from "../../../services/individual-insoles/individualInsoles.interface";
import { useTranslation } from "react-i18next";

const CatalogIndividual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "about" | "characteristics" | "reviews"
  >("about");
  const [individualInsoles, setIndividualInsoles] = useState<
    IIndividualInsole[]
  >([]);
  const [isOpenReviewPopup, setIsOpenReviewPopup] = useState(false);
  const [individualReviews, setIndividualReviews] = useState<IProductReview[]>(
    []
  );
  const [variations, setVariations] = useState<IIndividualVariation[]>([]);
  const [productId, setProductId] = useState<number | null>(null);
  const [activeCoverage, setActiveCoverage] =
    useState<IIndividualVariation | null>(null);
  const { t } = useTranslation();

  const toggleReviewPopup = () => {
    setIsOpenReviewPopup((prevState) => !prevState);
  };

  const getAll = async () => {
    try {
      const response = await getAllIndividualInsoles();
      setIndividualInsoles(response);
      if (response.length > 0) {
        setProductId(response[0].id);
        getAllVariations(response[0].id); // Load variations when the product is set
        getReviews(response[0].id); // Load reviews when the product is set
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllVariations = async (productId: number) => {
    try {
      const response = await getAllIndividualVariations(productId);
      setVariations(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getReviews = async (productId: number) => {
    try {
      const response = await getAllIndividualReviews(productId);
      setIndividualReviews(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createReview = async (formData: FormData) => {
    if (productId !== null) {
      try {
        const response = await createIndividualReview(formData, productId);
        await getReviews(productId);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Product ID is not available");
    }
  };

  const handleCoverageChange = (newCoverage: IIndividualVariation) => {
    setActiveCoverage(newCoverage);
    console.log("Coverage changed:", newCoverage);
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    if (productId !== null) {
      getAllVariations(productId);
    }
  }, [productId]);

  return (
    <>
      <section className={styles.catalog__individual_section}>
        <div className={styles.container}>
          <div className={styles.catalog__individual_wrapper}>
            <div className={styles.catalog__wrapper_route}>
              <NavLink to={"/"}>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  className={styles.catalog__router_icon}
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
                className={styles.catalog__router_arrow}
              />
              <p
                className={`${styles.catalog__router_name} ${styles.catalog__router_active}`}
              >
                {t("individualInsoles.individualInsolesRoute")}
              </p>
            </div>
            <div className={styles.catalog__individual_main}>
              <CatalogIndividualProduct
                variations={variations}
                individualInsoles={individualInsoles}
                individualReviews={individualReviews}
                onOpenReviewPopup={toggleReviewPopup}
                onCoverageChange={handleCoverageChange}
              />
              <div className={styles.catalog__main_info}>
                <div className={styles.catalog__info_tabs}>
                  <span
                    className={`${styles.catalog__tabs_item} ${
                      activeTab === "about" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab("about")}
                  >
                    {t("products.productsTab1")}
                  </span>
                  <span
                    className={`${styles.catalog__tabs_item} ${
                      activeTab === "characteristics" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab("characteristics")}
                  >
                    {t("products.productsTab2")}
                  </span>
                  <span
                    className={`${styles.catalog__tabs_item} ${
                      activeTab === "reviews" ? styles.active : ""
                    }`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    {t("products.productsTab3")} ({individualReviews.length})
                  </span>
                </div>
                {activeTab === "about" && (
                  <CatalogIndividualAbout
                    activeCoverage={activeCoverage!}
                    individualInsoles={individualInsoles}
                  />
                )}
                {activeTab === "characteristics" && (
                  <CatalogIndividualCharacteristics
                    activeCoverage={activeCoverage!}
                    individualInsoles={individualInsoles}
                  />
                )}
                {activeTab === "reviews" && (
                  <Reviews
                    reviews={individualReviews}
                    onOpenReviewPopup={toggleReviewPopup}
                    key={"uniq1"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOpenReviewPopup && (
        <ReviewPopup
          createReviews={createReview}
          getReviews={() => getReviews(productId!)}
          isOpen={isOpenReviewPopup}
          onClose={toggleReviewPopup}
          key={"uniq1"}
        />
      )}
    </>
  );
};

export default CatalogIndividual;
