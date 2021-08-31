import React from "react";
import Nav from "../Navbar/Nav";
import About from "../About/About";
import Dishes from "../DishPage/MainPage/Dishes";
import Menu from "../Menu/Main-Page/Menu";
import FormPage from "../Contact-Form/CardUI/FormPage";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Nav />
      <About />
      <Dishes />
      <Menu />
      <FormPage />
      <Footer />
    </>
  );
};

export default HomePage;
