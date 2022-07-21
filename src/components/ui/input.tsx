import { forwardRef, Fragment } from "react";

interface InputProps {
  type?: "text" | "password";
  name: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", name, error }, ref) => {
    return (
      <Fragment>
        <input
          type={type}
          name={name}
          id={name}
          className={`w-full p-4 my-1 text-sm bg-fuchsia-200 border-0 rounded-xl transition-all ${
            error && "bg-purple-200!important"
          }`}
          autoComplete="on"
          ref={ref}
        />
        {error && (
          <div className="pl-2 mb-2 text-sm text-fuchsia-700">{error}</div>
        )}
      </Fragment>
    );
  }
);

export default Input;
