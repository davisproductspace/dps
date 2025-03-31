import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export default function CustomButton({
  onClick,
  children,
  disabled = false,
}: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-[152px] h-[24px] flex-shrink-0 rounded-[5px] bg-white
                 shadow-[0px_1.43px_2.86px_0px_rgba(0,0,0,0.25)]
                 hover:bg-[#f2f2f2] active:bg-[#F7EDFF] transition-colors duration-150
                 flex items-center justify-center text-sm font-medium
                 disabled:opacity-30 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
