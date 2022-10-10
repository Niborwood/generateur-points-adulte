// REDUX
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { checkIfLoggedIn } from "../../features/user/userSlice";

// COMPONENTS
import Sign from "./sign";
import { useEffect } from "react";
import supabase from "../../../lib/supabase";
import { CardWrapper } from "../../components/ui";

const AdminWrapper = ({ children }: AdminWrapperProps) => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.user);

  useEffect(() => {
    const user = supabase.auth.user();
    dispatch(checkIfLoggedIn(user));
  }, []);

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <CardWrapper>
      <Sign />
    </CardWrapper>
  );
};

type AdminWrapperProps = {
  children: React.ReactNode;
};

export default AdminWrapper;
