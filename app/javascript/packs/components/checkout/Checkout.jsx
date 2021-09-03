import React, { useEffect, useState } from "react";
import axios from "axios";
import SuccessWindow from "./SuccessWindow";

const Checkout = (props) => {

  const [ order, setOrder ] = useState();
  const [ success, setSuccess ] = useState(true);

  let aboutSection = document.querySelector(".about");
  aboutSection.style.display = "none";    

  useEffect(() => {
    getOrder();
  }, [props.orderId])
 
  function getOrder() {
    axios
      .get(`/api/v1/orders/${props.orderId}`)
      .then( response => {
        let fetchedOrder = response.data;
        setOrder(fetchedOrder);
      }).catch( e => {
        console.log(e);
      })
  }

  return (      
    <div className="checkout-container">
      <a className="go-back-link">Go Back</a>
      { order && <div className="checkout">
        <CheckoutForm />
        <CheckoutSummary items={order.line_items} />
        { success && <SuccessWindow order={order} /> }
      </div> }
    </div>
  )
}

const CheckoutForm = () => {
  return (
    <div className="checkout__form">
      <h2>CHECKOUT</h2>
      <form>
        <div className="form-section">
          <h4>BILLING DETAILS</h4>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" />
          </div>
        </div>
        <div className="form-section">
          <h4>SHIPPING INFO</h4>
          <div className="field address-field">
            <label htmlFor="address">Your Address</label>
            <input type="text" id="address" />
          </div>
          <div className="field">
            <label htmlFor="zip">ZIP Code</label>
            <input type="text" id="zip" />
          </div>
          <div className="field">
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
          <div className="field">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" />
          </div>
        </div>
        <div className="form-section">
          <h4>PAYMENT DETAILS</h4>
          <div className="field payment-field">
            <label htmlFor="payment">Payment Method</label>
            <div className="radio-options">
              <div className="radio-container">
                <input type="radio" id="e-money" value="e-money" name="payment" />
                <label className="radio-label" htmlFor="e-money">e-Money</label>
              </div>
              <div className="radio-container">
                <input type="radio" id="cash" value="cash" name="payment" />
                <label className="radio-label" htmlFor="cash">Cash on Delivery</label>
              </div>
            </div>
          </div>
          <div className="field">
            <label htmlFor="e-money-number">e-Money Number</label>
            <input type="text" id="e-money-number" />
          </div>
          <div className="field">
            <label htmlFor="pin">e-Money PIN</label>
            <input type="text" id="pin" />
          </div>
        </div>
      </form>
    </div>
  )
}

const CheckoutSummary = (props) => {

  console.log(props)

  return (
    <div className="checkout__summary">
      <h3>SUMMARY</h3>
      <SummaryListItems items={props.items}/>
      <SummaryAmount />
      <PayButton />
    </div>
  )
}

const SummaryListItems = (props) => {

  let items = props.items.map((item) => {
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

const SummaryAmount = () => {
  return (
    <div className="amount">
      <div className="amount__total">
        <span>TOTAL</span>
        <span>$ 5242</span>
      </div>
      <div className="amount__shipping">
        <span>SHIPPING</span>
        <span>$ 50</span>
      </div>
      <div className="amount__vat">
        <span>VAT (INCLUDED)</span>
        <span>$ 1034</span>
      </div>
      <div className="amount__grand-total">
        <span>GRAND TOTAL</span>
        <span>$ 6293</span>
      </div>
    </div>
  )
}


const PayButton = () => {

  function handleClick(e) {
    let successWindow = document.querySelector(".success-window-container");
    let body = document.querySelector("body");

    successWindow.style.display = "block";
    body.classList.add("drop-shadow");
  }

  return (
    <button className="btn-pay" onClick={handleClick}>CONTINUE & PAY</button>
  )
}

export default Checkout;