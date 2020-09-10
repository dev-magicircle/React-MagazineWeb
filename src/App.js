import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={"/categories/:id"} component={Categories} />
          <Route path="/search" component={Search} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
