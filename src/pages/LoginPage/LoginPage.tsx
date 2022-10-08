import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Form } from "components/Form";

import { useDeleteErrorByTimeout } from "utilities/hooks/useDeleteErrorByTimeout";
import { useAuth } from "utilities/hooks/useAuth";
import { authUserNotFound } from "utilities/const/ServerErrors.conts";

export const LoginPage = () => {
  const { signIn } = useAuth();
  const [serverError, setServerError] = useState<string | null>(null);

  const handleLogin = useCallback(
    (email: string, password: string) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          signIn!({
            email: userCredential.user.email,
          });
        })
        .catch((error) => {
          setServerError(
            error.code === authUserNotFound
              ? "Пользователь не найден"
              : "Ошибка"
          );
        });
    },
    [signIn]
  );

  useDeleteErrorByTimeout(serverError, setServerError);

  return (
    <div className="page-content">
      <Form title="Войти" onSubmit={handleLogin} />
      {serverError && <div className="page-content__error">{serverError}</div>}
      <div className="page-content__bottom">
        Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </div>
    </div>
  );
};
