import React, { createContext, useContext, useState } from "react";
import { IWorker } from "../../services/workers/worker.interface";

interface AdminWorkersContextProps {
  editWorker: IWorker | null;
  setEditWorker: (worker: IWorker) => void;
}

const AdminWorkersContext = createContext<AdminWorkersContextProps | undefined>(
  undefined
);

export const useAdminWorkersContext = () => {
  const context = useContext(AdminWorkersContext);
  if (!context) {
    throw new Error("Щось пішло не так при редагуванні документа...");
  }
  return context;
};

export const AdminWorkersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [editWorker, setEditWorker] = useState<IWorker | null>(null);

  return (
    <AdminWorkersContext.Provider value={{ editWorker, setEditWorker }}>
      {children}
    </AdminWorkersContext.Provider>
  );
};
