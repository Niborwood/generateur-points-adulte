const Button = ({
  text,
  children,
  small = false,
  style = "primary",
  onClick = () => {},
}: ButtonProps) => {
  const getStyle = () => {
    switch (style) {
      case "secondary":
        return "bg-gradient-to-tr from-purple-600 to-purple-700 hover:to-purple-800 shadow-purple-600/30";
      default:
        return "bg-gradient-to-tr from-pink-600 to-fuchsia-600 hover:to-fuchsia-700 shadow-fuchsia-600/30";
    }
  };

  return (
    <button
      className={`flex justify-center w-full ${
        small
          ? "px-3 py-2 text-sm shadow-sm rounded-md"
          : "p-4 shadow-lg rounded-xl"
      } ${getStyle()} mt-2 mb-2 font-bold text-white transition-all ease-in-out hover:shadow-md`}
      onClick={onClick}
    >
      {text || children}
    </button>
  );
};

type ButtonProps = {
  text?: string;
  children?: React.ReactNode;
  small?: boolean;
  style?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick?: () => void;
};

export default Button;
