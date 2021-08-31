import React from "react";
import HomePage from "./Components/Home/HomePage";
import AboutPage from "./Components/Home/AboutPage";
import MenuPage from "./Components/Home/MenuPage";
import DishesPage from "./Components/Home/DishesPage";
import ContactPage from "./Components/Home/ContactPage";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/dishes" component={DishesPage} exact />
        <Route path="/menu" component={MenuPage} exact />
        <Route path="/contact" component={ContactPage} exact />
      </Switch>
    </>
  );
};

export default App;
