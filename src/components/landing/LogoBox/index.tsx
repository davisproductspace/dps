import { ReactNode } from "react";

interface LogoBoxProps {
  children: ReactNode;
}

export default function LogoBox({ children }: LogoBoxProps) {
  return (
    <div className="w-[70px] h-[70px] flex items-center justify-center rounded-2xl bg-black shadow-[0_1px_2px_rgba(255,255,255,0.1)]">
      {/* auto-scaling container */}
      <div className="flex items-center justify-center w-10 h-10">
        <div className="w-full h-full flex items-center justify-center">
          {/* ensures svg shrinks if needed */}
          <div className="max-w-full max-h-full scale-100">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
