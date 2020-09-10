import React, { Component } from "react";
import "./App.css";
// import Movie from './Movie.js';
import axios from "axios";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

axios
  .get("https://billyapi.com/api/posts/tag?tag=임신초기&randomOn=yes", {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjQ2NTNmYjU5MDUyYWNjNDMwOGUwNmViNjgwYmU4ZGRhNmU5YWFmYzcwMTRmMTA4ZTdlYWU5NzkyZmMxNmI3NTU5NTg0MTlkNGRkZjU5MzVhIn0.eyJhdWQiOiIzIiwianRpIjoiNDY1M2ZiNTkwNTJhY2M0MzA4ZTA2ZWI2ODBiZThkZGE2ZTlhYWZjNzAxNGYxMDhlN2VhZTk3OTJmYzE2Yjc1NTk1ODQxOWQ0ZGRmNTkzNWEiLCJpYXQiOjE1OTYxNTQ2MjMsIm5iZiI6MTU5NjE1NDYyMywiZXhwIjoxNjI3NjkwNjIzLCJzdWIiOiIxNCIsInNjb3BlcyI6W119.SDsruutJwW1GFjkGwiimhgn2QyO3xcrIPITJvQ7vCMz_Nt16PvWW44UXK5AGvZWc8ye9SxqK7vq8BeiYJkrzL4aCaoScBU5beAQEYq6dDl2BTSvcr0FAS83f7U9ldbDUzLWvjGa04ToyxxxHcF4il7heDbqmd906Pk4u3h8Ai7_HGiTCksW5Vo5Sg3KX8tf8Tt264dlSArBj1eggFL4wTKWYKtdwiejisrYROFoXDzqLuWcYvaWZjqBVZkyRIKBdMpX-leZusONL-6TFFoSvdZlTUYBPKSrnKcqZ86-EAod5bTDo3oHS20BOO544NQGc1axeq2Cq1Ux9CIAOgbCmsipVBwuSM-U-tUJtHKeukEIhdWtHxDj7BmPFshRQokk39amqy7w8FpXHq1A1-OEX6d8vB7k4onKIrArWF5yfOL--EaCLHnsCESgpl4xnpIFzA66Wp3mCbZFdw8cUegRDhOH6KME1bbpLBqnxg-kMHUfZ4XyDdJMZC7r2KSlhu8WNDFPxPiJitN2bXSnb79G3qljuI4qQK0jdFEGGrSH_jVOj_-7-B2MLHwAgdaUCZVZYWE0UnN2blrlhqPJhckBebuWwkh1XbrhPjEImTuSscnw2NXliTlpeIJPcltPuik0sqVPmEmO1Sq8Jm-DJT5d8uPYUjGgKqw-bTrUY5Tp-aac`,
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/search" component={Search} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
