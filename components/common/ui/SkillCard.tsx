import { SkillCardProps } from "@/interfaces";
import React from "react";

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return <span className="bg-sky-700 py-2 px-4 text-sm text-center rounded-md text-white">{skill}</span>;
};

export default SkillCard;
