interface InputProps {
  type?: "text" | "password";
}

const Input = ({ type = "text" }: InputProps) => {
  return (
    <input
      type={type}
      className="w-full p-3 my-1 text-sm bg-gray-200 border-4 rounded-xl"
    />
  );
};

export default Input;
