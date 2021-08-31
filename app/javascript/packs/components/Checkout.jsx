import React from "react";

const Checkout = () => {

  return (      
    <div className="checkout">
      <a>Go Back</a>
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  )
}

const CheckoutForm = () => {
  return (
    <div className="checkout__form">
      <h2>CHECKOUT</h2>
      <form>
        <div className="field">
          <h4>BILLING DETAILS</h4>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" />
        </div>
        <div className="field">
          <h4>SHIPPING INFO</h4>
          <label htmlFor="address">Your Address</label>
          <input type="text" id="address" />
          <label htmlFor="zip">ZIP Code</label>
          <input type="text" id="zip" />
          <label htmlFor="city">City</label>
          <input type="text" id="city" />
          <label htmlFor="country">Country</label>
          <input type="text" id="country" />
        </div>
        <div className="field">
          <h4>PAYMENT DETAILS</h4>
          <label htmlFor="payment">Payment Method</label>
          <select name="payment" id="payment">
            <option value="e-money">e-Money</option>
            <option value="cash">Cash on Delivery</option>
          </select>
          <label htmlFor="e-money-nubmer"></label>
          <input type="text" id="e-money-number" />
          <label htmlFor="pin"></label>
          <input type="text" id="pin" />
        </div>
      </form>
    </div>
  )
}

const CheckoutSummary = () => {
  return (
    <div className="checkout__summary">
      <h3>SUMMARY</h3>
      <SummaryListItems />
      <SummaryAmount />
      <PayButton />
    </div>
  )
}

const SummaryListItems = () => {

  return (
    <ul>

    </ul>
  )
}

const SummaryItem = () => {

  return (
    <li className="summary-item">
      <div className="summary-item__image"></div>
      <div className="summary-item__info">
        <h4>xx59</h4>
        <span>2333</span>
      </div>
      <span>x2</span>
    </li>
  )
}

const SummaryAmount = () => {
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
}


const PayButton = () => {
  <button>CONTINUE & PAY</button>
}

export default Checkout;