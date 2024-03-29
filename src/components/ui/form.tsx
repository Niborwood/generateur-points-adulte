import { ReactNode, FormEvent, useRef, InputHTMLAttributes } from "react";

const Form = ({ children, className, onSubmit }: FormProps) => {
  const form = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    const formValues = Object.fromEntries(new FormData(form.current));
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleFormSubmit} ref={form} className={className}>
      {children}
    </form>
  );
};

interface FormProps {
  children: ReactNode;
  onSubmit: (param: { [k: string]: FormDataEntryValue }) => void;
  className?: string;
}

export default Form;
