import { ReactNode } from "react";

const CardWrapper = ({ children, large }: CardWrapperProps) => {
  return (
    <div
      className={`relative  px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl skew-x-1 $ ${
        large ? "" : "max-w-lg"
      }`}
    >
      {children}
    </div>
  );
};
interface CardWrapperProps {
  children: ReactNode;
  large: boolean;
}

export default CardWrapper;
