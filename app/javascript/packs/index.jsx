import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import Products from './components/products/Products';
import Nav from "./components/Nav";

document.addEventListener("DOMContentLoaded", () => {
  const index = document.getElementById("pages")
  ReactDOM.render(
    <div>
      <Nav />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories/:slug" component={Categories} />
        <Route exact path="/products/:slug" component={Products} />
      </Router>
    </div>,
    index,
  )
})

