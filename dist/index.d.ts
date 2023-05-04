import React from "react";
import "./index.css";
type modalProps = {
    determineType: React.Dispatch<React.SetStateAction<string>>;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    dataList: string[];
    dataIcon: Record<string, string>;
};
declare const Modal: ({ determineType, closeModal, dataList, dataIcon, }: modalProps) => JSX.Element;
export default Modal;
