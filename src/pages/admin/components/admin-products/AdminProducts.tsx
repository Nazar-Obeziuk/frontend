import React, { useEffect, useState } from "react";
import styles from "./AdminProducts.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminProductsForm from "./components/admin-products-form/AdminProductsForm";
import AdminProductsTable from "./components/admin-products-table/AdminProductsTable";
import { IProduct } from "../../../../services/products/product.interface";
import {
  deleteProduct,
  getAllProducts,
} from "../../../../services/products/product";

const AdminProducts: React.FC = () => {
  const [isAdminProductsFormOpen, setAdminProductsFormOpen] = useState(true);
  const [adminProducts, setAdminProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

  const notify = (message: string) => toast(message);

  const getAll = async () => {
    const productData = await getAllProducts();
    setAdminProducts(productData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleProductsForm = () => {
    setAdminProductsFormOpen((prevState) => !prevState);
  };

  const onEditProduct = (product: IProduct) => {
    navigate(`/prostopoo-admin-panel/update-product/${product.id}`);
  };

  const onDeleteProduct = async (id: number) => {
    const confirmation = window.confirm(
      "Ви впевнені, що хочете видалити цей продукт?"
    );

    if (confirmation) {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await deleteProduct(id, token);
        notify(response.message);
        getAll();
      }
    }
  };

  return (
    <div className={styles.admin__main_workers}>
      <div className={styles.admin__workers_form}>
        {isAdminProductsFormOpen && (
          <button
            onClick={handleProductsForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати товар
          </button>
        )}
        {!isAdminProductsFormOpen && (
          <AdminProductsForm
            getAll={getAll}
            toggleProductsForm={handleProductsForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminProductsTable
        adminProducts={adminProducts}
        handleEditProduct={onEditProduct}
        handleDeleteProduct={onDeleteProduct}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminProducts;
