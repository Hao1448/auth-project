import { useContext } from "react";

import { AuthContext } from "utilities/hocs/AuthProvider/AuthProvider";

export const useAuth = () => useContext(AuthContext);
