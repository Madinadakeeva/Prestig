import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./components/Company";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />}>
          <Route path={"/"} element={<ProductsPage />} />
          <Route path={"/company"} element={<Company />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
