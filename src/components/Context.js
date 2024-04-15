import { createContext } from "react";

export const ContextLogin = createContext({
    username: '',
    password: '',
    isLoggedin: false
});