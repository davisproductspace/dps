import { ReactNode } from "react";

interface LogoBoxProps {
  children: ReactNode;
}

export default function LogoBox({ children }: LogoBoxProps) {
  return (
    <div className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-black shadow-[0_1px_2px_rgba(255,255,255,0.1)]">
      <div className="w-6 h-6">
        {children}
      </div>
    </div>
  );
}
