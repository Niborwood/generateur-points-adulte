import { ReactNode } from "react";

const CardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative max-w-lg px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl skew-x-1">
      {children}
    </div>
  );
};

export default CardWrapper;
