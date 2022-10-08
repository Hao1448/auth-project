import { FC, FormEvent, useState } from "react";
import { UiInputProps } from "./model/UiInputProps.model";

import "./UiInput.scss";

export const UiInput: FC<UiInputProps> = ({
  className,
  error,
  onChange,
  ...rest
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    isTouched && setIsTouched(false);
    onChange(e);
  };

  return (
    <div className={`input-wrapper ${className}`}>
      <input
        className={`input-wrapper__input`}
        onBlur={() => setIsTouched(true)}
        onChange={handleChange}
        {...rest}
      />
      {error && isTouched && (
        <div className="input-wrapper__error">{error}</div>
      )}
    </div>
  );
};
