import { useState } from "react";
import { CardWrapper, Input, Button } from "../../components/ui";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <CardWrapper>
      <h1 className="text-2xl font-bold">Log In</h1>
      <div className="my-4">
        <form onSubmit={handleFormSubmit}>
          <Input name="email" value={email} onChange={setEmail} />
          <Input
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <Button text="Se connecter" />
        </form>
      </div>
    </CardWrapper>
  );
};

export default Admin;
