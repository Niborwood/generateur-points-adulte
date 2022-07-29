import { ReactNode, FormEvent, useRef } from "react";

const Form = ({ children, className, onSubmit }: FormProps) => {
  const form = useRef<HTMLFormElement>(null);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;
    console.log(form.current);

    const formValues = new FormData(form.current);

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
  onSubmit: (formData: FormData) => void;
  className?: string;
}

export default Form;
