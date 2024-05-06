import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./components/Company";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Oplata from "./components/Oplata";
import { useState } from "react";
import Dostavka from "./components/Dostavka";
import Cart from "./components/cart/Cart";
import { ContextLogin } from "./components/Context";
import { CartContextProvider } from "./components/cart/CartContext";
function App() {
  const [value, setValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };
  const logout = () => {
    setUser({ username: "", password: "" });
    setIsLoggedIn(false);
  };

  return (
    <ContextLogin.Provider value={{ ...user, isLoggedIn, login, logout }}>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<HomePage />}>
              <Route
                path={"/"}
                element={<ProductsPage value={value} setValue={setValue} />}
              />
              <Route path={"/company"} element={<Company />} />
              <Route path={"/oplata"} element={<Oplata />} />
              <Route path={"/dostavka"} element={<Dostavka />} />
              <Route path={"/cart"} element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ContextLogin.Provider>
  );
}

export default App;
