import { useEffect } from "react";

export const useDeleteErrorByTimeout = (
  serverError: string | null,
  setServerError: React.Dispatch<React.SetStateAction<string | null>>
) => {
  useEffect(() => {
    if (serverError) {
      setTimeout(() => {
        setServerError(null);
      }, 4000);
    }
  }, [serverError, setServerError]);
};
