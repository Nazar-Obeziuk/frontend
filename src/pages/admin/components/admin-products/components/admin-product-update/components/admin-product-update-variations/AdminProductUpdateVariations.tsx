import React, { useEffect, useState } from "react";
import styles from "./AdminProductUpdateVariations.module.css";
import {
  IProduct,
  IProductVariation,
} from "../../../../../../../../services/products/product.interface";
import { getAllProductsVariations } from "../../../../../../../../services/products/product";
import { useParams } from "react-router-dom";
import AdminProductVariationForm from "./components/admin-product-variation-form/AdminProductVariationForm";
import AdminProductVariationTable from "./components/admin-product-variation-table/AdminProductVariationTable";

interface Props {
  editProduct: IProduct;
}

const AdminProductUpdateVariations: React.FC<Props> = ({ editProduct }) => {
  const [isProductsVariationFormOpen, setProductsVariationFormOpen] =
    useState(true);
  const [productVariation, setProductVariation] = useState<IProductVariation[]>(
    []
  );
  const { id } = useParams();

  const getAll = async () => {
    const productVariationData = await getAllProductsVariations(+id!);
    setProductVariation(productVariationData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleProductVariationForm = () => {
    setProductsVariationFormOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.admin__main_reviews}>
      <div className={styles.admin__reviews_form}>
        {isProductsVariationFormOpen && (
          <button
            onClick={handleProductVariationForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати варіацію продукту
          </button>
        )}
        {!isProductsVariationFormOpen && (
          <AdminProductVariationForm
            getAll={getAll}
            productId={editProduct.product_id}
            toggleProductVariationForm={handleProductVariationForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminProductVariationTable
        getAll={getAll}
        productVariation={productVariation}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminProductUpdateVariations;
