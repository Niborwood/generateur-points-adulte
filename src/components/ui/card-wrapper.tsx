import { ReactNode } from "react";

const CardWrapper = ({ children, large }: CardWrapperProps) => {
  return (
    <div
      className={`relative px-4 py-8 bg-stone-100 rounded-2xl drop-shadow-xl $ ${
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
