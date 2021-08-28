import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import Product from './components/products/Product';
import Nav from "./components/Nav";

document.addEventListener("DOMContentLoaded", () => {
  const index = document.getElementById("pages")
  ReactDOM.render(
    <div>
      <Router>
        <Nav />
        <div className="main-content-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories/:name" component={Categories} />
            <Route exact path="/products/:name" component={Product} />       
          </Switch>
        </div>
      </Router>
    </div>,
    index,
  )
})

