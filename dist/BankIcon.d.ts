import React from "react";
type dataIconProps = {
    dataName: string;
    dataIcon: Record<string, string>;
    determineType: React.Dispatch<React.SetStateAction<string>>;
    selectType: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const BankIcon: ({ dataName, dataIcon, determineType, selectType, }: dataIconProps) => JSX.Element;
export default BankIcon;
