import React, { useState } from "react";
import SuccessWindow from "./SuccessWindow";
import CheckoutForm from "./CheckoutForm";


const Checkout = (props) => {

  let order = props.order
  let lineItems = props.lineItems
  const [ success, setSuccess ] = useState(true);

  let aboutSection = document.querySelector(".about");
  aboutSection.style.display = "none";    

  return (      
    <div className="checkout-container">
      <a className="go-back-link">Go Back</a>
      { order && <div className="checkout">
        <CheckoutForm lineItems={lineItems}/>
        {/* <CheckoutSummary lineItems={lineItems} /> */}
        { success && <SuccessWindow order={order}
                                    lineItems={lineItems}/> }
      </div> }
    </div>
  )
}

const CheckoutSummary = (props) => {

  return (
    <div className="checkout__summary">
      <h3>SUMMARY</h3>
      <SummaryListItems lineItems={props.lineItems} />
      <SummaryAmount lineItems={props.lineItems} />
      <PayButton validForm={props.validForm} />
    </div>
  )
}

const SummaryListItems = (props) => {

  let items = props.lineItems.map((item) => {
    return <SummaryItem key={item.product.id} 
                        product={item.product}
                        quantity={item.quantity} />
  })

  return (
    <div className="summary-list-items">
      <ul>
        {items}
      </ul>
    </div>
  )
}

const SummaryItem = (props) => {

  return (
    <li className="summary-item">
      <div className="summary-item__image" style={{ backgroundImage: `url(${props.product.cart_image})`}}></div>
      <div className="summary-item__info">
        <div>
          <h4>{props.product.cart_name}</h4>
          <span>$ {props.product.price}</span>
        </div>
        <span>x{props.quantity}</span>
      </div>
    </li>
  )
}

const SummaryAmount = (props) => {

  let total = 0;

  if (props.lineItems) {
    total = props.lineItems.reduce((prev, lineItem) => {
      return prev + (lineItem.quantity * lineItem.product.price)
    }, 0)
  }
  let shipping = 50;
  let vat = total / 100 * 20;
  let grandTotal = vat + total + shipping;
  
  return (
    <div className="amount">
      <div className="amount__total">
        <span>TOTAL</span>
        <span>$ {total}</span>
      </div>
      <div className="amount__shipping">
        <span>SHIPPING</span>
        <span>$ 50</span>
      </div>
      <div className="amount__vat">
        <span>VAT (INCLUDED)</span>
        <span>$ {vat}</span>
      </div>
      <div className="amount__grand-total">
        <span>GRAND TOTAL</span>
        <span>$ {grandTotal}</span>
      </div>
    </div>
  )
}


const PayButton = (props) => {

  
  
  function handleClick(e) {
    let validForm = true;
  
    function validate() {
      let fields = document.querySelectorAll("input")
      fields.forEach((field) => {
        if (field.value == "") {
          validForm = false;
        }
      })
    }

    validate();

    if (validForm) {
      let successWindow = document.querySelector(".success-window-container");
      let body = document.querySelector("body");
  
      successWindow.style.display = "block";
      body.classList.add("drop-shadow");
    } else {

    }
  }

  return (
    <button className="btn-pay" onClick={handleClick}>CONTINUE & PAY</button>
  )
}

export default Checkout;