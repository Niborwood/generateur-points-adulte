const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      className="flex justify-center w-full p-4 mt-4 mb-2 font-bold text-white transition-all ease-in-out rounded-xl drop-shadow-lg hover:drop-shadow-sm bg-fuchsia-600 hover:bg-emerald-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

type ButtonProps = {
  text: string;
  onClick: () => void;
};

export default Button;
