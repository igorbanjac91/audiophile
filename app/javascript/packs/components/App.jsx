import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Categories from './categories/Categories';
import Product from './products/Product';
import Nav from "./Nav";
import Cart from "./Cart";

const App = () => {

  return (
    <div>
      <Router>
        <Nav />
        <Cart />
        <div className="main-content-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories/:name" component={Categories} />
            <Route exact path="/products/:name" component={Product} />       
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;