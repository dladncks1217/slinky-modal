import React from "react";

type dataIconProps = {
  dataName: string;
  dataIcon: Record<string, string>;
  determineType: React.Dispatch<React.SetStateAction<string>>;
  selectType: React.Dispatch<React.SetStateAction<boolean>>;
};

const BankIcon = ({
  dataName,
  dataIcon,
  determineType,
  selectType,
}: dataIconProps) => {
  return (
    <div
      className="data-icon"
      onClick={() => {
        determineType(dataName);
        selectType(false);
      }}
    >
      <img src={dataIcon[dataName]} alt={dataName} />
      <div>{dataName}</div>
    </div>
  );
};

export default BankIcon;
