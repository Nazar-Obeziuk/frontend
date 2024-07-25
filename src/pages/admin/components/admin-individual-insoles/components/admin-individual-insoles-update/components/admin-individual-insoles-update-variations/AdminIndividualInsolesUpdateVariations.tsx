import React, { useEffect, useState } from "react";
import styles from "./AdminIndividualInsolesUpdateVariations.module.css";
import { IProductVariation } from "../../../../../../../../services/products/product.interface";
import { getAllProductsVariations } from "../../../../../../../../services/products/product";
import { useParams } from "react-router-dom";
import AdminProductVariationForm from "./components/admin-individual-insoles-variation-form/AdminIndividualInsolesVariationForm";
import AdminProductVariationTable from "./components/admin-individual-insoles-variation-table/AdminIndividualInsolesVariationTable";
import {
  IIndividualInsole,
  IIndividualVariation,
} from "../../../../../../../../services/individual-insoles/individualInsoles.interface";
import { getAllIndividualVariations } from "../../../../../../../../services/individual-insoles/individualInsoles";

interface Props {
  editIndividual: IIndividualInsole;
}

const AdminIndividualInsolesUpdateVariations: React.FC<Props> = ({
  editIndividual,
}) => {
  const [isProductsVariationFormOpen, setProductsVariationFormOpen] =
    useState(true);
  const [individualVariation, setIndividualVariation] = useState<
    IIndividualVariation[]
  >([]);
  const { id } = useParams();

  const getAll = async () => {
    const individualVariationData = await getAllIndividualVariations(+id!);
    setIndividualVariation(individualVariationData);
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleIndividualVariationForm = () => {
    setProductsVariationFormOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.admin__main_reviews}>
      <div className={styles.admin__reviews_form}>
        {isProductsVariationFormOpen && (
          <button
            onClick={handleIndividualVariationForm}
            className={styles.admin__form_show}
            type="button"
          >
            Додати варіацію індивідуальних устілок
          </button>
        )}
        {!isProductsVariationFormOpen && (
          <AdminProductVariationForm
            getAll={getAll}
            productId={editIndividual.id}
            toggleIndividualVariationForm={handleIndividualVariationForm}
            key={"uniq1"}
          />
        )}
      </div>
      <AdminProductVariationTable
        getAll={getAll}
        individualVariation={individualVariation}
        key={"uniq1"}
      />
    </div>
  );
};

export default AdminIndividualInsolesUpdateVariations;
