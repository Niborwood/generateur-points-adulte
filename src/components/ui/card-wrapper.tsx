import { ReactNode } from "react";

const CardWrapper = ({ children, large = false }: CardWrapperProps) => {
  return (
    <div
      className={`relative px-4 py-8 bg-stone-100 rounded-xl drop-shadow-xl md:min-w-[500px] transition-all $ ${
        large ? "max-w-3xl" : "max-w-lg"
      }`}
    >
      {children}
    </div>
  );
};
interface CardWrapperProps {
  children: ReactNode;
  large?: boolean;
}

export default CardWrapper;
