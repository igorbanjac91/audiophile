import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";
import Home from './home/Home';
import Categories from './categories/Categories';
import Product from './products/Product';
import Nav from "./Nav";
import Cart from "./Cart";
import Checkout from "./checkout/Checkout";
import setAxiosHeaders from "./AxiosHeaders";

const App = () => {

  const [ orderId, setOrderId ] = useState(window.sessionStorage.getItem("orderId"));
  const [ order, setOrder ] = useState({});
  const [ lineItems, setLineItems ] = useState([]);

  useEffect(() => {
    if (orderId) {
      getOrder();
    }
  }, [orderId])

  function getOrder() {
    axios
      .get(`/api/v1/orders/${orderId}`)
      .then( response => {
        let fetchedOrder = response.data;
        setOrder(fetchedOrder);
        setLineItems(fetchedOrder.line_items);
      }).catch( e => {
        console.log(e);
      })
  }

  function handleRemoveAll() {
    setLineItems([])
  }

  function handleSetOrderId(id) {
    window.sessionStorage.setItem("orderId", id);
    setOrderId(id);
    if (orderId) {
      getOrder();
    }
  }

  function clearLineItems() {
    setLineItems([]);
    setOrder({});
  }

  function handleChangeQuantity(id, quantity) {
    setAxiosHeaders();

    let data = new FormData();
    data.append("line_item[quantity]", quantity);

    axios
      .put(`/api/v1/line_items/${id}`, data)
      .then( response => {
        console.log(response);
        getOrder();
      }).catch(e => {
        console.log(e);
      })
  }

  return (
    <div>
      <Router>
        <Nav />
        <Cart orderId={orderId} 
              order={order} 
              lineItems={lineItems}
              handleRemoveAll={handleRemoveAll} 
              clearLineItems={clearLineItems}
              handleChangeQuantity={handleChangeQuantity} />
        <div className="main-content-container">
          <Switch>
            <Route exact path="/categories/:name">
              <Categories />
            </Route>
            <Route exact path="/products/:name">
              <Product handleSetOrderId={handleSetOrderId} />
            </Route>
            <Route exact path="/checkout">
              <Checkout orderId={orderId} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;