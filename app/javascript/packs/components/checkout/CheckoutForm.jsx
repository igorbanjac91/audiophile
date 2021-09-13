import React, { useEffect, useState } from "react";

const CheckoutForm = () => {

  const nameEmptymessage = "Name is empty";
  const [ nameEmpty, setNameEmtpy ] = useState(false);

  function handleNameChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setNameEmtpy(true);
      field.classList.add("field--alert");
    } else {
      setNameEmtpy(false);
      field.classList.remove("field--alert");
    }
  }

  function handleNameBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setNameEmtpy(true);
      field.classList.add("field--alert");
    }
  }

  return (
    <div className="checkout__form" >
      <h2>CHECKOUT</h2>
      <form>
        <div className="form-section">
          <h4>BILLING DETAILS</h4>
          <div className="field">
            <div className="top-field">
              <label htmlFor="name">Name</label>
              { nameEmpty && <span className="error-message">{nameEmptymessage}</span> }
            </div>
            <input type="text" 
                   id="name"
                   onChange={handleNameChange}
                   onBlur={handleNameBlur} />
          </div>
          <div className="field">
            <div>
              <label htmlFor="email">Email Address</label>
            </div>
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

export default CheckoutForm;