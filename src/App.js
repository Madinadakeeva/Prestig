import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./components/Company";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import Oplata from "./components/Oplata";
import { useState } from "react";
import Dostavka from "./components/Dostavka";
function App() {
  const [value, setValue] = useState('')
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />}>
          <Route path={"/"} element={<ProductsPage value={value} setValue={setValue} />} />
          <Route path={"/company"} element={<Company />} />
          <Route path={"/oplata"} element={<Oplata />} />
          <Route path={"/dostavka"} element={<Dostavka />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
