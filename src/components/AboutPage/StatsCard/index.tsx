import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="bg-gradient-to-r from-[#E06287] to-[#765DF2] bg-clip-text text-transparent text-[64px] font-semibold leading-normal">
        {value}
      </h1>
      <p className="text-[#3A3A3A] font-inter text-[16px] font-medium leading-normal mt-[8px]">
        {label}
      </p>
    </div>
  );
};

export default StatCard;
