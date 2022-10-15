import React, { createContext, useState } from "react";

interface ContextProps {
  isModalOpen: {
    openModal: boolean;
    componentOnModal: string;
  };
  toggleModal: (data: string) => void;
}
interface ContextProviderProps {
  children: React.ReactNode;
}
export const AppContext = createContext<ContextProps>({
  isModalOpen: {
    openModal: false,
    componentOnModal: "",
  },
  toggleModal: () => {},
});
export const AppContextProvider = ({ children }: ContextProviderProps) => {
  const [isModalOpen, setIsModalOpen] = useState({
    openModal: false,
    componentOnModal: "",
  });

  const updateModal = (data: string) => {
    setIsModalOpen({
      openModal: !isModalOpen.openModal,
      componentOnModal: data,
    });
  };
  const value: ContextProps = {
    isModalOpen,
    toggleModal: updateModal,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
