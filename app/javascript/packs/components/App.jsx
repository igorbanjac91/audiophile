import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Categories from './categories/Categories';
import Product from './products/Product';
import Nav from "./Nav";
import Cart from "./Cart";

const App = () => {

  const [ orderId, setOrderId ] = useState(null);

  useEffect(() => {

  }, [])


  function handleSetOrderId(id) {
    console.log(id)
    setOrderId(id)
    window.sessionStorage.setItem("orderId", id)
  }

  return (
    <div>
      <Router>
        <Nav />
        <Cart orderId={orderId} />
        <div className="main-content-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/categories/:name">
              <Categories />
            </Route>
            <Route exact path="/products/:name">
              <Product handleSetOrderId={handleSetOrderId} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;