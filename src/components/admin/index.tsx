import { CardWrapper, Input, Button } from "../../components/ui";

const Admin = () => {
  return (
    <CardWrapper>
      <h1 className="text-2xl font-bold">Log In</h1>
      <div className="my-4">
        <Input />
        <Input type="password" />
        <Button text="Se connecter" />
      </div>
    </CardWrapper>
  );
};

export default Admin;
