import { useContext } from "react";
import { ContextLogin } from "./Context";
export default function Main() {
    const { username, isLoggedIn} = useContext(ContextLogin)
    console.log(isLoggedIn)
    return (
      <>
       {isLoggedIn ? (
        <h4>Добро пожаловать {username}!</h4>
       ):( 
        <h4>Пожалуйста, введите свое имя пользователя и пароль!</h4>
       )} 
        
      </>
    );
  }