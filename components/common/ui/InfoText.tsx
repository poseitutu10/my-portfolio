import { InfoTextProps } from "@/interfaces";
import React from "react";

const InfoText: React.FC<InfoTextProps> = ({ header, description, elements }) => {
  return (
    <div>
      <h2 className="header-customized">{header}</h2>
      <p className="text-sm">{description}</p>
      {elements}
    </div>
  );
};

export default InfoText;
