import { ReactNode } from "react";

export interface AuthContextProviderProps {
  user?: UserProps;
  signIn?: (newUser: UserProps) => void;
  signOut?: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface UserProps {
  email: string | null;
}
