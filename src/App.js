import "./App.css";
import Navbars from "./Components/Navbars";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Pages/Home";
import ProductDetails from "./Components/Pages/ProductDetails";
import Products from "./Components/Pages/Products";
import Account from "./Components/Pages/Account";
import Cart from "./Components/Pages/Cart";
import NotFound from "./Components/Pages/NotFound";
import Login from "./Components/Login";
import Dashboard from "./Components/Pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./Components/Signup";
import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
// import React, { useState } from "react";
// import { dataBase } from "../src/Components/Data/DataBase";

function App() {
 
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbars />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/ProductDetails/:id" component={ProductDetails} />
          <Route path="/Products" component={Products} />
          <PrivateRoute exact path="/SignUp" component={SignUp} />
          <PrivateRoute exact path="/Login" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Account" component={Account} />
          <Route path="/Cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
