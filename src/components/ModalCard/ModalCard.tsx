import React from "react";
import { ModalCardChildren, ModalCardContainer } from "./styles/ModalCard";
interface ModalCardProps {
  children?: React.ReactNode;
}
const ModalCardModal = ({ children }: ModalCardProps) => {
  return (
    <ModalCardContainer>
      <ModalCardChildren>{children}</ModalCardChildren>
    </ModalCardContainer>
  );
};

export default ModalCardModal;
