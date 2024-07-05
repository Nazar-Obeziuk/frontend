import React, { useEffect, useState } from "react";
import styles from "./AdminProductUpdateVariations.module.css";
import {
  IProduct,
  IProductVariation,
} from "../../../../../../../../services/products/product.interface";
import AdminError from "../../../../../../admin-error/AdminError";
import {
  deleteProductVariation,
  getAllProductsVariations,
} from "../../../../../../../../services/products/product";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
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

  //   const [variations, setVariations] = useState<IProductVariation[]>([]);
  //   const { id } = useParams();
  //   const navigate = useNavigate();

  //   const notify = (message: string) => toast(message);

  //   const getAllVariations = async () => {
  //     try {
  //       const response = await getAllProductsVariations(id!);
  //       setVariations(response);
  //       console.log(variations);
  //     } catch (error) {
  //       console.log("variation error", error);
  //     }
  //   };

  //   useEffect(() => {
  //     getAllVariations();
  //   }, []);

  //   const onDeleteProductVariation = async (variationId: number) => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       if (token) {
  //         const response = await deleteProductVariation(variationId, token);
  //         notify(response.message);
  //         getAllVariations();
  //       } else {
  //         return <AdminError />;
  //       }
  //     } catch (error) {
  //       console.log("delete variation", error);
  //     }
  //   };

  //   const onEditVariation = (adminVariation: IProductVariation) => {
  //     navigate(`/admin/product-variation-update/${editProduct!.product_id}`);
  //   };

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
