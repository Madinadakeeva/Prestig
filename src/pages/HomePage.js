import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ContextLogin } from "../components/Context";
import Main from "../components/Main";

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({username: '', password: ''})

  const handleLogin = (userData) => {
    if (userData.username === '' && userData.password === ''){
      setIsLoggedIn(true)
      setUser(userData)
    } else {console.error('Данные введены не верно')}
  }
 
  return (
    <div className="App">
    <ContextLogin.Provider value={{ ...user, isLoggedIn}}>
        <LoginForm login={handleLogin} />
        <Main/>
        <Header />
        <Outlet />
        <Footer />
    </ContextLogin.Provider>
    </div>
  );
}
