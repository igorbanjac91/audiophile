import axios from "axios";
import React from "react";
import ButtonSelectQuantity from "./shared/ButtonSelectQauntity";
import { Link } from "react-router-dom";
import setAxiosHeaders from "./AxiosHeaders";

const Cart = (props) => {

  let order = props.order
  let lineItems = props.lineItems

  function handleRemoveAll() {
    setAxiosHeaders();
    props.clearLineItems();

    order.line_items.forEach( (lineItem) => {
      axios
        .delete(`/api/v1/line_items/${lineItem.id}`)
        .then(() => {
          props.handleRemoveAll();
        }).catch(e => console.log(e))
    })
  }

  return (
    <div className="cart-container">
      <div className="cart" >
        { Object.keys(order).length != 0 ?
        <div>
          <TopCart itemsNumber={lineItems.length} handleRemoveAll={handleRemoveAll} />
          <CartListItems lineItems={lineItems}/>
          <Total lineItems={lineItems}/>
          <CheckoutButton />
        </div> 
        : 
        <div className="empty">
          <TopCart itemsNumber={0} />
          <p className="empty__message">Your Cart is Empty</p>
          <Link to="/">Back to Shop</Link>
          <Total />
        </div> }
      </div>
    </div>
  )
}

const TopCart = (props) => {

  function handleRemoveAll(e) {
    e.preventDefault()
    props.handleRemoveAll()
  }

  return (
    <div className="cart__top">
      <h2>CART ({props.itemsNumber})</h2>
      { props.itemsNumber > 0 && <a href="#" onClick={handleRemoveAll}>Remove all</a> }
    </div>
  )
}

const CartListItems = (props) => {

  let items = props.lineItems.map( (lineItem) => {
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
        <h3>{product.cart_name}</h3>
        <span>$ {subTotal}</span>
      </div>
      <ButtonSelectQuantity quantity={props.quantity} />
    </li>
  ) 
}

const Total = (props) => {

  let total = 0;


  if (props.lineItems) {
    total = props.lineItems.reduce((prev, lineItem) => {
      return prev + (lineItem.quantity * lineItem.product.price)
    }, 0)
  }

  console.log(total)

  return (
    <div className="cart__total">
      <span>TOTAL</span>
      <span>$ {total}</span>
    </div>
  )
}

const CheckoutButton = () => {

  return (
    <Link href="#" 
          className="btn-checkout"
          to="/checkout">CHECKOUT</Link>
  )
}

export default Cart;