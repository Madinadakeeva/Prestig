import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="App">
        <Header />
        <Outlet />
        <Footer />
    </div>
  );
}
