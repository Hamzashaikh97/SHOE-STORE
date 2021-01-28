import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductItems from "./components/ProductItems";
import Product from "./components/Products";


function RouteConfig() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route exact path={"/product"} component={Product} />
        <Route path={"/product/:id"} component={ProductItems} />
        <Route path="*" component={() => <h1>404 ERROR NOT FOUND</h1>} />
      </Switch>


    </Router>
  );
}

export default RouteConfig;