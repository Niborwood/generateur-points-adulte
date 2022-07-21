import { useRef, useState } from "react";
import { CardWrapper, Input, Button } from "../../components/ui";

const Admin = () => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  console.log("🚀 ~ file: index.tsx ~ line 11 ~ Admin ~ error", error);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Handling validation
    if (!email.current?.value.trim())
      setError({ ...error, email: "Email is required" });
    else setError({ ...error, email: "" });

    if (!password.current?.value.trim())
      setError({ ...error, password: "Password is required" });
    else setError({ ...error, password: "" });

    console.log(email.current?.value, password.current?.value);
  };

  return (
    <CardWrapper>
      <h1 className="text-2xl font-bold">Log In</h1>
      <div className="my-4">
        <form onSubmit={handleFormSubmit}>
          <Input name="email" ref={email} error={error.email} />
          <Input
            name="password"
            type="password"
            ref={password}
            error={error.password}
          />
          <Button text="Se connecter" />
        </form>
      </div>
    </CardWrapper>
  );
};

export default Admin;
