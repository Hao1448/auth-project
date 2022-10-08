import { Navigate } from "react-router-dom";

import { useAuth } from "utilities/hooks/useAuth";

import { UiButton } from "components/Ui/UiButton";

import "./MainPage.scss";

export const MainPage = () => {
  const { signOut } = useAuth();
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="page-content">
      <div className="main-page">
        <p>{user}</p>
        <p> Вы успешно вошли!</p>
        <UiButton onClick={signOut}>Выйти</UiButton>
      </div>
    </div>
  );
};
