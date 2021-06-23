import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "./Home/Home";
import Disease from "./Disease/Disease"

const Base = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Switch>
          <Route path="/Disease" component={Disease} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Base;
