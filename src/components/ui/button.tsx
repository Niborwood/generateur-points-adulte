const Button = ({ text, onClick = () => {} }: ButtonProps) => {
  return (
    <button
      className="flex justify-center w-full p-4 mt-4 mb-2 font-bold text-white transition-all ease-in-out shadow-lg shadow-fuchsia-600/30 rounded-xl hover:shadow-md bg-gradient-to-tr from-pink-600 to-fuchsia-600 hover:to-fuchsia-700"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default Button;
