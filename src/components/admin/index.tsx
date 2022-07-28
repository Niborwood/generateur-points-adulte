// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { checkIfLoggedIn } from "../../features/user/userSlice";

// COMPONENTS
import { CardWrapper } from "../../components/ui";
import Dashboard from "./dashboard";
import Sign from "./sign";
import { useEffect } from "react";
import supabase from "../../../lib/supabase";

const Admin = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.user);

  useEffect(() => {
    const user = supabase.auth.user();
    dispatch(checkIfLoggedIn(user));
  }, []);

  return (
    <CardWrapper large={isAuthenticated}>
      {isAuthenticated ? <Dashboard /> : <Sign />}
    </CardWrapper>
  );
};

export default Admin;
