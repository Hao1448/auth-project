import { createContext, FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AuthContextProviderProps,
  AuthProviderProps,
  UserProps,
} from "./model/AuthProvider.model";

export const AuthContext = createContext<AuthContextProviderProps>({
  user: undefined,
  signIn: undefined,
  signOut: undefined,
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProps>();

  const signIn = useCallback(
    (user: UserProps) => {
      setUser(user);
      localStorage.setItem("user", user.email!);
      navigate("/");
    },
    [navigate]
  );

  const signOut = useCallback(() => {
    setUser(undefined);
    localStorage.removeItem("user");
    navigate("/login");
  }, [navigate]);

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
