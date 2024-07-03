import React, { createContext, useContext, useState } from "react";
import {
  IProduct,
  IProductVariation,
} from "../../services/products/product.interface";

interface AdminProductsContextProps {
  editProduct: IProduct | null;
  setEditProduct: (worker: IProduct) => void;
}

const AdminProductsContext = createContext<
  AdminProductsContextProps | undefined
>(undefined);

export const useAdminProductsContext = () => {
  const context = useContext(AdminProductsContext);
  if (!context) {
    throw new Error("Щось пішло не так при редагуванні документа...");
  }
  return context;
};

export const AdminProductsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [editProduct, setEditProduct] = useState<IProduct | null>(null);

  return (
    <AdminProductsContext.Provider value={{ editProduct, setEditProduct }}>
      {children}
    </AdminProductsContext.Provider>
  );
};

interface AdminVariationContextProps {
  editVariation: IProductVariation | null;
  setEditVariation: (variation: IProductVariation) => void;
}

const VariationContext = createContext<AdminVariationContextProps | undefined>(
  undefined
);

export const useAdminVariationsContext = () => {
  const context = useContext(VariationContext);
  if (!context) {
    throw new Error(
      "useAdminVariationsContext must be used within a VariationProvider"
    );
  }
  return context;
};

export const VariationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [editVariation, setEditVariation] = useState<IProductVariation | null>(
    null
  );

  return (
    <VariationContext.Provider value={{ editVariation, setEditVariation }}>
      {children}
    </VariationContext.Provider>
  );
};
