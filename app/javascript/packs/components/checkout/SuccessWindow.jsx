import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckmarkIcon } from "../shared/Icons";

const SuccessWindow = (props) => {

  return (
    <div className="success-window-container">
      <div className="success-window">
        <div className="success-window__top-window">
          <div className="icon-container">
            <CheckmarkIcon />
          </div>
          <h2>THANK YOU <br /> FOR YOUR ORDER</h2>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div className="success-window__order-info">
          <ListItems lineItems={props.lineItems } /> 
          <GrandTotal />
        </div>
        <BackHomeButton />
      </div>
    </div>
  )
}

const ListItems = (props) => {

  const [ showItems, setShowItems ] = useState(false);
  let items = props.lineItems;
  let itemsNumber = items.length;

  let lineItems = items.map((item) => {
    return <LineItem key={item.product.id} item={item}/>
  })

  function handleClick(e) {
    e.preventDefault();

    if (!showItems) {
      e.target.textContent = "View less";
      setShowItems(true);
    } else {
      if (itemsNumber == 2 ) {
        e.target.textContent = `and 1 another item`;
      } else {
        e.target.textContent = `and ${itemsNumber} another items`;
      }
      setShowItems(false)
    }
  }

  let firstItem = lineItems.shift();

  if (itemsNumber == 1) {
    return (
      <div className="list-line-items">
        <ul>
          {firstItem}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="list-line-items">
        <ul>
          {firstItem}
          { showItems && <div className="other-items">
            {lineItems}
          </div>}
        </ul>
        {itemsNumber == 2 && 
          <a className="view-other-link" onClick={handleClick}>and 1 another items</a> }
        {itemsNumber > 2 && 
          <a className="view-other-link" onClick={handleClick}>and {lineItems.length} another items</a> }
      </div>
    )
  }
}

const LineItem = (props) => {

  let product = props.item.product;
  let quantity = props.item.quantity;

  return (
    <li className="item">
      <div className="item__image" style={{backgroundImage: `url(${product.cart_image})`}}></div>
      <div className="item__info">
        <h4>{product.cart_name}</h4>
        <span>$ {product.price}</span>
      </div>
      <span className="item__quantity">x{quantity}</span>
    </li>
  )
}

const GrandTotal = () => {
  return (
    <div className="grand-total">
      <span>GRAND TOTAL</span>
      <span>$ 5,446</span>
    </div>
  )
}

const BackHomeButton = () => {

  function handleClick() {
    let successWindow = document.querySelector(".success-window-container");
    let body = document.querySelector("body");

    successWindow.style.display = "none";
    body.classList.remove("drop-shadow");
  }

  return (
    <Link className="btn-back-to-home" onClick={handleClick} to="/" >BACK TO HOME</Link>
  )
}

export default SuccessWindow;