import { createContext } from "react";

export const ContextLogin = createContext({
  username: "",
  password: "",
  isLoggedIn: false,
  login: undefined,
  logout: undefined,
});
