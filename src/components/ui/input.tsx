import { forwardRef, Fragment } from "react";

interface InputProps {
  type?: "text" | "password";
  name: string;
  error?: string;
  // value?: string;
  // onChange?: (value: string) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", name, error }, ref) => {
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   onChange(e.target.value);
    // };

    return (
      <Fragment>
        <input
          type={type}
          name={name}
          id={name}
          className={`w-full p-4 my-1 text-sm bg-gray-200 border-0 rounded-xl ${
            error && " border-purple-600 bg-purple-200"
          }`}
          autoComplete="on"
          ref={ref}
          // value={value}
          // onChange={handleChange}
        />
        {error && (
          <div className="pl-2 mb-4 text-sm text-purple-700">{error}</div>
        )}
      </Fragment>
    );
  }
);

export default Input;
