import { Outlet } from "react-router";
import { Header } from "./sections/Header";
import { Footer } from "./sections/Footer";
import "./styles.css";

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}