import { createContext, FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  AuthContextProviderProps,
  AuthProviderProps,
  UserProps,
} from "./model/AuthProvider.model";

export const AuthContext = createContext<AuthContextProviderProps>({
  signIn: undefined,
  signOut: undefined,
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const signIn = useCallback(
    (user: UserProps) => {
      localStorage.setItem("user", user.email!);
      navigate("/");
    },
    [navigate]
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("user");
    navigate("/login");
  }, [navigate]);

  const value = { signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
