import axios from "axios";
import React, { useEffect } from "react";

const Cart = (props) => {

  useEffect(() => {
    getOrder();
  }, [props.orderId])
 
  function getOrder() {
    axios
      .get(`/api/v1/orders/${props.orderId}`)
      .then( response => {
        console.log(response);
      }).catch( e => {
        console.log(e);
      })
  }


  return (
    <div className="cart-container">
      <div className="cart" >
        <TopCart />
        <CartListItems />
        <Total />
        <CheckoutButton />
      </div>
    </div>
  )
}

const TopCart = () => {
  
  return (
    <div className="cart_top">
      <h2>CART (3)</h2>
      <a>Remove all</a>
    </div>
  )
}

const CartListItems = () => {

  return (
    <div className="cart_items">
      <ul>

      </ul>
    </div>
  )
}

const CartListItem  = () => {

  return (
    <li className="cart-item">
      <div className="cart-item__image"></div>
      <div className="cart-item__info">
        <h3>XX99 MK II</h3>
        <span>$ 2,999</span>
      </div>
    </li>
  ) 
}

const Total = () => {

  return (
    <div className="cart__total">
      <span>TOTAL</span>
      <span>$ 5,322</span>
    </div>
  )
}

const CheckoutButton = () => {

  return (
    <button className="checkout-btn">CHECKOUT</button>
  )
}

export default Cart;