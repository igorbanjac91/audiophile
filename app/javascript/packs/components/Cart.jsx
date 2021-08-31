import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = (props) => {

  const [ order, setOrder ] = useState();

  useEffect(() => {
    getOrder();
  }, [props.orderId])
 
  function getOrder() {
    axios
      .get(`/api/v1/orders/${props.orderId}`)
      .then( response => {
        let fetchedOrder = response.data;
        console.log(fetchedOrder)
        setOrder(fetchedOrder);
      }).catch( e => {
        console.log(e);
      })
  }


  return (
    <div className="cart-container">
      { order && <div className="cart" >
        <TopCart order={order} />
        <CartListItems order={order}/>
        <Total />
        <CheckoutButton />
      </div> }
    </div>
  )
}

const TopCart = (props) => {
  
  let itemsNumber = props.order.line_items.length;

  return (
    <div className="cart__top">
      <h2>CART ({itemsNumber})</h2>
      <a>Remove all</a>
    </div>
  )
}

const CartListItems = (props) => {

  let items = props.order.line_items.map( (lineItem) => {
    let product = lineItem.product
    return <CartListItem key={product.id} product={product} quantity={lineItem.quantity} />
  })

  return (
    <div className="cart__items">
      <ul>
        {items}
      </ul>
    </div>
  )
}

const CartListItem  = (props) => {

  let product = props.product
  let subTotal = Number(product.price) * Number(props.quantity);

  return (
    <li className="cart-item">
      <div className="cart-item__image" style={{ backgroundImage: `url(${product.cart_image})`}}></div>
      <div className="cart-item__info">
        <h3>{product.name}</h3>
        <span>$ {subTotal}</span>
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