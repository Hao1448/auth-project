import { FC } from "react";

import { UiButtonProps } from "./model/UiButtonProps.model";

import "./UiButton.scss";

export const UiButton: FC<UiButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
};
