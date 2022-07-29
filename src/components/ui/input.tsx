import { forwardRef } from "react";
import { PencilIcon } from "@heroicons/react/solid";
interface InputProps {
  type?: "text" | "password" | "number";
  name: string;
  error?: string;
  label?: string;
  small?: boolean;
  labelColor?: "white" | "pink-700";
  defaultValue?: HTMLInputElement["value"];
  editable?: boolean;
  editableArea?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      name,
      error,
      label,
      defaultValue,
      small = false,
      editable = false,
      editableArea = false,
      labelColor = "pink-700",
    },
    ref
  ) => {
    if (editableArea) {
      return (
        <div className="flex flex-row items-start justify-start gap-2">
          <PencilIcon className="relative w-5 text-white top-1" />
          <textarea
            name={name}
            id={name}
            className="font-bold bg-transparent resize-none text-slate-100 focus-visible:border-0 :focus-visible:ring-0 outline-none outline-0"
          >
            {defaultValue}
          </textarea>
        </div>
      );
    }

    return (
      <div className={editable ? "flex flex-row items-center gap-1" : "mb-2"}>
        {label && (
          <label
            className={`ml-2 text-sm font-semibold ${labelColor}`}
            htmlFor={name}
          >
            {label}
          </label>
        )}
        {editable && <PencilIcon className="w-4 text-white" />}
        <input
          type={type}
          name={name}
          id={name}
          className={
            editable
              ? "bg-transparent text-slate-100 w-full break-words fond-semibold outline-0"
              : `w-full ${
                  small ? "p-2 text-center my-0" : "p-4 my-1"
                } my-0 text-sm bg-fuchsia-200 text-pink-800 font-bold border-0 rounded-xl focus-visible:ring-transparent transition-all outline-0 ${
                  error && "bg-purple-200!important"
                }`
          }
          autoComplete="on"
          ref={ref}
          defaultValue={defaultValue}
        />
        {error && (
          <div className="pl-2 mb-2 text-sm text-fuchsia-700">{error}</div>
        )}
      </div>
    );
  }
);

export default Input;
