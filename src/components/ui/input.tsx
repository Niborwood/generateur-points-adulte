import { forwardRef } from "react";

interface InputProps {
  type?: "text" | "password";
  name: string;
  error?: string;
  label?: string;
  small?: boolean;
  labelColor?: "white" | "pink-700";
  value?: HTMLInputElement["value"];
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      name,
      error,
      label,
      value,
      small = false,
      labelColor = "pink-700",
    },
    ref
  ) => {
    return (
      <div className="mb-2">
        {label && (
          <label
            className={`ml-2 text-sm font-semibold ${labelColor}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          id={name}
          className={`w-full ${
            small ? "p-2" : "p-4"
          } my-1 text-sm bg-fuchsia-200 text-pink-800 font-semibold border-0 rounded-xl transition-all ${
            error && "bg-purple-200!important"
          }`}
          autoComplete="on"
          ref={ref}
          value={value}
        />
        {error && (
          <div className="pl-2 mb-2 text-sm text-fuchsia-700">{error}</div>
        )}
      </div>
    );
  }
);

export default Input;
