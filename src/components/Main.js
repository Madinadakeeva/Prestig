import { useContext } from "react";
import { ContextLogin } from "./Context";
export default function Main() {
    const { username, isLoggedin} = useContext(ContextLogin)
    return (
      <>
       {isLoggedin ? (
        <h4>Добро пожаловать {username}!</h4>
       ):(
        <h4>Пожалуйста, введите свое имя пользователя и пароль!</h4>
       )}
        
      </>
    );
  }