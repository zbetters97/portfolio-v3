import { Outlet } from "react-router-dom";
import ToTopButton from "./buttons/ToTopButton";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export default function Layout() {
  return (
    <div className="wrapper">
      <Navbar />

      <Outlet />

      <ToTopButton />
      <Footer />
    </div>
  );
}
