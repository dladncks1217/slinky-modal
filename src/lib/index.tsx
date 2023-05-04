import React from "react";

import BankIcon from "./BankIcon";
import "./index.css";

type modalProps = {
  determineType: React.Dispatch<React.SetStateAction<string>>;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  dataList: string[];
  dataIcon: Record<string, string>;
};

const Modal = ({
  determineType,
  closeModal,
  dataList,
  dataIcon,
}: modalProps) => {
  return (
    <>
      <div
        className="select-modal-backdrop"
        onClick={() => closeModal(false)}
      ></div>
      <div className="select-modal">
        {dataList.map((name) => (
          <BankIcon
            dataIcon={dataIcon}
            key={name}
            dataName={name}
            determineType={determineType}
            selectType={closeModal}
          />
        ))}
      </div>
    </>
  );
};

export default Modal;
