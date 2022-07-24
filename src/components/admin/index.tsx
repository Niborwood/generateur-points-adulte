// REDUX
import { useAppSelector } from "../../hooks/redux";

// COMPONENTS
import { CardWrapper } from "../../components/ui";
import Dashboard from "./dashboard";
import Sign from "./sign";

const Admin = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  return (
    <CardWrapper>{isAuthenticated ? <Dashboard /> : <Sign />}</CardWrapper>
  );
};

export default Admin;
