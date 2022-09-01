const Button = ({
  text,
  children,
  small = false,
  style = "primary",
  type = "button",
  full = false,
  isLoading = false,
  onClick = () => {},
}: ButtonProps) => {
  const getStyle = () => {
    switch (style) {
      case "secondary":
        return "bg-gradient-to-tr from-purple-600 to-purple-700 hover:to-purple-800 shadow-purple-600/30";
      case "light":
        return "bg-gray-100 hover:bg-gray-200 text-xl text-fuchsia-600 hover:text-fuchsia-700 shadow-slate-500/10 px-16";
      default:
        return "bg-gradient-to-tr from-pink-600 to-fuchsia-600 hover:to-fuchsia-700 shadow-fuchsia-600/30";
    }
  };

  return (
    <button
      type={type}
      className={`flex justify-center mt-2 mb-2 font-bold text-white transition-all ease-in-out hover:shadow-md ${
        full ? "w-full" : "w-fit-content"
      } ${
        small
          ? "px-3 py-2 text-sm shadow-sm rounded-md"
          : "p-4 shadow-lg rounded-xl"
      }  ${
        isLoading
          ? "from-slate-300 to-slate-500 hover:to-slate-500"
          : "from-purple-600 to-purple-900"
      } ${getStyle()}`}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : text || children}
    </button>
  );
};

type ButtonProps = {
  text?: string;
  children?: React.ReactNode;
  small?: boolean;
  type?: "button" | "submit" | "reset";
  full?: boolean;
  isLoading?: boolean;
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
