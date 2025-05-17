import { Outlet } from "react-router-dom";
import ToTopButton from "./buttons/ToTopButton";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Gradient from "src/features/gradient/Gradient";

export default function Layout() {
  return (
    <div className="wrapper">
      <Gradient />
      <Navbar />

      <Outlet />

      <ToTopButton />
      <Footer />
    </div>
  );
}
