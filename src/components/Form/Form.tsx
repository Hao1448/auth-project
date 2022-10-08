import { FC, FormEvent, useEffect, useState } from "react";

import { UiButton } from "components/Ui/UiButton";
import { UiInput } from "components/Ui/UiInput";

import { patternEmail } from "./Form.const";

import { FormProps } from "./model/FormProps.model";

import "./Form.scss";

export const Form: FC<FormProps> = ({ title, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [passError, setPassError] = useState<string | undefined>(undefined);

  const [isFormValid, setIsFormValid] = useState(!!email && !!pass);

  const handleChangeEmail = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setEmail(value);
    if (!value) {
      setEmailError("Обязательное поле");
      setIsFormValid(false);
      return;
    }
    if (!patternEmail.test(String(value).toLowerCase())) {
      setEmailError("Некорректный формат почты");
      setIsFormValid(false);
      return;
    }
    setEmailError(undefined);
  };

  const handleChangePass = (e: FormEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    setPass(value);
    if (!value) {
      setPassError("Обязательное поле");
      setIsFormValid(false);
      return;
    }
    if (value.length <= 5) {
      setPassError("Пароль должен быть больше 5 символов");
      setIsFormValid(false);
      return;
    }
    setPassError(undefined);
  };

  const handleSubmit = () => {
    onSubmit(email, pass);
    setEmail("");
    setPass("");
  };

  useEffect(() => {
    if (!emailError && !passError && pass && email) {
      setIsFormValid(true);
    }
  }, [email, emailError, pass, passError]);

  return (
    <div className="form">
      <UiInput
        type="email"
        placeholder="Введите почту"
        className="form__input"
        onChange={handleChangeEmail}
        value={email}
        error={emailError}
      />
      <UiInput
        type="password"
        placeholder="Введите пароль(минимум 6 символов)"
        className="form__input"
        onChange={handleChangePass}
        value={pass}
        error={passError}
      />
      <UiButton
        className="form__button"
        onClick={handleSubmit}
        disabled={!isFormValid}
      >
        {title}
      </UiButton>
    </div>
  );
};
