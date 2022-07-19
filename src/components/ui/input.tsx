interface InputProps {
  type?: "text" | "password";
  name: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = ({ type = "text", name, value, onChange }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type={type}
      name={name}
      id={name}
      className="w-full p-3 my-1 text-sm bg-gray-200 border-4 rounded-xl"
      autoComplete="on"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
