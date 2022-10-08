import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { Form } from "components/Form";

import { useDeleteErrorByTimeout } from "utilities/hooks/useDeleteErrorByTimeout";

import { emailAlreadyUse } from "../../utilities/const/ServerErrors.conts";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [serverError, setServerError] = useState<string | null>(null);

  const handleRegister = useCallback(
    (email: string, password: string) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/login");
        })
        .catch((error) => {
          setServerError(
            error.code === emailAlreadyUse
              ? "Email уже зарегистрирован"
              : "Ошибка"
          );
        });
    },
    [navigate]
  );
  useDeleteErrorByTimeout(serverError, setServerError);

  return (
    <div className="page-content">
      <Form title="Зарегистрировать" onSubmit={handleRegister} />
      {serverError && <div className="page-content__error">{serverError}</div>}
      <div className="page-content__bottom">
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </div>
    </div>
  );
};
