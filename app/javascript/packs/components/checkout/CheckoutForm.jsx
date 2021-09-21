import React, { useEffect, useState } from "react";
import { CashDeliveryIcon } from "../shared/Icons";
import { useWindowSize } from "../utils";

const CheckoutForm = (props) => {

  let lineItems = props.lineItems;
  const nameRequiredmessage = "Name is required";
  const emailRequiredmessage = "Email is required";
  const phoneNumberRequiredmessage = "Phone number is required";
  const addressRequiredmessage = "Address is required";
  const zipRequiredmessage = "ZIP Code is required";
  const cityRequiredmessage = "City is required";
  const countryRequiredmessage = "Country is required";
  const [ nameEmpty, setNameEmpty ] = useState(false);
  const [ emailEmpty, setEmailEmpty ] = useState(false);
  const [ phoneNumberEmpty, setPhoneNumberEmpty ] = useState(false);
  const [ addressEmpty, setAddressEmpty ] = useState(false);
  const [ zipEmpty, setZipEmpty ] = useState(false);
  const [ cityEmpty, setCityEmpty ] = useState(false);
  const [ countryEmpty, setCountryEmpty ] = useState(false);
  const [ eMoneyNumberEmpty, setEMoneyNumberEmpty ] = useState(false);
  const [ eMoneyPinEmpty, setEMoneyPinEmpty ] = useState(false);
  const [ selectedRadionBtn, setSelectedRadioBtn] = useState("e-money");


  useEffect(() => {
    changeBorderRadioBtn();
  }, [selectedRadionBtn]);

  function validate() {
    handleNameBlur();
  }


  // Name Validations
  
  function handleNameChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setNameEmpty(true);
      field.classList.add("field--alert");
    } else {
      setNameEmpty(false);
      field.classList.remove("field--alert");
    }
  }
  
  function handleNameBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setNameEmpty(true);
      field.classList.add("field--alert");
    }
  }

  // Email Validations
  
  function handleEmailChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setEmailEmpty(true);
      field.classList.add("field--alert");
    } else {
      setEmailEmpty(false);
      field.classList.remove("field--alert");
    }
  }
  
  function handleEmailBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setEmailEmpty(true);
      field.classList.add("field--alert");
    }
  }

  // Phone Number Validations
  
  function handlePhoneNumberChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setPhoneNumberEmpty(true);
      field.classList.add("field--alert");
    } else {
      setPhoneNumberEmpty(false);
      field.classList.remove("field--alert");
    }
  }
  
  function handlePhoneNumberBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setPhoneNumberEmpty(true);
      field.classList.add("field--alert");
    }
  }

  // Address Validations
  
  function handleAddressChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setAddressEmpty(true);
      field.classList.add("field--alert");
    } else {
      setAddressEmpty(false);
      field.classList.remove("field--alert");
    }
  }
  
  function handleAddressBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setAddressEmpty(true);
      field.classList.add("field--alert");
    }
  }

  // Zip Code Validations
  
  function handleZipChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setZipEmpty(true);
      field.classList.add("field--alert");
    } else {
      setZipEmpty(false);
      field.classList.remove("field--alert");
    }
  }
  
  function handleZipBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setZipEmpty(true);
      field.classList.add("field--alert");
    }
  }

  // City Validations
  
  function handleCityChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setCityEmpty(true);
      field.classList.add("field--alert");
    } else {
      setCityEmpty(false);
      field.classList.remove("field--alert");
    }
  }
  
  function handleCityBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setCityEmpty(true);
      field.classList.add("field--alert");
    }
  }

  // Country Validations
  
  function handleCountryChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setCountryEmpty(true);
      field.classList.add("field--alert");
    } else {
      setCountryEmpty(false);
      field.classList.remove("field--alert");
    }
  }
  
  function handleCountryBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setCountryEmpty(true);
      field.classList.add("field--alert");
    }
  }

  // e-Money Number Validations
  
  function handleEMonyeNumberChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setEMoneyNumberEmpty(true);
      field.classList.add("field--alert");
    } else {
      setEMoneyNumberEmpty(false);
      field.classList.remove("field--alert");
    }
  }
  
  function handleEMonyNumberBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setEMoneyNumberEmpty(true);
      field.classList.add("field--alert");
    }
  }

  // Country Validations
  
  function handleEMoneyPinChange(e) {
    let field = e.target.parentElement;
    if (e.target.value === "") {
      setEMoneyPinEmpty(true);
      field.classList.add("field--alert");
    } else {
      setEMoneyPinEmpty(false);
      field.classList.remove("field--alert");
    }
  }
  
  function handleEMoneyPinBlur(e) {
    let field = e.target.parentElement
    if (e.target.value === "") {
      setEMoneyPinEmpty(true);
      field.classList.add("field--alert");
    }
  }


  function isRadioChecked(value) {
    return selectedRadionBtn === value
  }

  function handleRadioChange(e) {
    setSelectedRadioBtn(e.target.value)
  }

  function changeBorderRadioBtn() {
    let radionBtns = document.querySelectorAll("[type=radio]");
    radionBtns.forEach( (btn) => {
      let field = btn.parentElement;
      if (isRadioChecked(btn.value)) {
        field.style.borderColor = "rgb(220, 125, 71)";
      } else {
        field.style.borderColor = "rgb(217, 217, 217)";
      }
    })
  }
  
  return (
    <div className="checkout__form" >
      <form>
        <div className="top-form">
          <h2>CHECKOUT</h2>
          <div className="form-section">
            <h4>BILLING DETAILS</h4>
            <div className="field">
              <div className="top-field">
                <label htmlFor="name">Name</label>
                { nameEmpty && <span className="error-message">{nameRequiredmessage}</span> }
              </div>
              <input type="text"
                     id="name"
                     onChange={handleNameChange}
                     onBlur={handleNameBlur} />
            </div>
            <div className="field">
              <div>
                <div className="top-field">
                  <label htmlFor="email">Email Address</label>
                  { emailEmpty && <span className="error-message">{emailRequiredmessage}</span> }
                </div>
              </div>
              <input type="email"
                     id="email"
                     onChange={handleEmailChange}
                     onBlur={handleEmailBlur} />
            </div>
            <div className="field">
              <div className="top-field">
                <label htmlFor="phone">Phone Number</label>
                { phoneNumberEmpty && <span className="error-message">{phoneNumberRequiredmessage}</span> }
              </div>
              <input type="tel"
                     id="phone"
                     onChange={handlePhoneNumberChange}
                     onBlur={handlePhoneNumberBlur} />
            </div>
          </div>
          <div className="form-section">
            <h4>SHIPPING INFO</h4>
            <div className="field address-field">
              <div className="top-field">
                <label htmlFor="address">Your Address</label>
                { addressEmpty && <span className="error-message">{addressRequiredmessage}</span> }
              </div>
              <input type="text"
                     id="address"
                     onChange={handleAddressChange}
                     onBlur={handleAddressBlur} />
            </div>
            <div className="field">
              <div className="top-field">
                <label htmlFor="zip">ZIP Code</label>
                { zipEmpty && <span className="error-message">{zipRequiredmessage}</span> }
              </div>
              <input type="text"
                     id="zip"
                     onChange={handleZipChange}
                     onBlur={handleZipBlur} />
            </div>
            <div className="field">
              <div className="top-field">
                <label htmlFor="city">City</label>
                { cityEmpty && <span className="error-message">{cityRequiredmessage}</span> }
              </div>
              <input type="text"
                     id="city"
                     onChange={handleCityChange}
                     onBlur={handleCityBlur} />
            </div>
            <div className="field">
              <div className="top-field">
                <label htmlFor="country">Country</label>
                { countryEmpty  && <span className="error-message">{countryRequiredmessage}</span> }
              </div>
              <input type="text"
                     id="country"
                     onChange={handleCountryChange}
                     onBlur={handleCountryBlur} />
            </div>
          </div>
          <div className="form-section">
            <h4>PAYMENT DETAILS</h4>
            <div className="field payment-field">
              <label htmlFor="payment">Payment Method</label>
              <div className="radio-options">
                <div className="radio-container">
                  <input type="radio"
                         id="e-money"
                         value="e-money"
                         name="payment"
                         checked={isRadioChecked("e-money")}
                         onChange={handleRadioChange} />
                  <label className="radio-label" htmlFor="e-money">e-Money</label>
                </div>
                <div className="radio-container">
                  <input type="radio"
                         id="cash"
                         value="cash"
                         name="payment"
                         checked={isRadioChecked("cash")}
                         onChange={handleRadioChange} />
                  <label className="radio-label" htmlFor="cash">Cash on Delivery</label>
                </div>
              </div>
            </div>
            { isRadioChecked("e-money") ?
              <EMoneyFields handleEMonyNumberBlur={handleEMonyNumberBlur}
                            handleEMonyeNumberChange={handleEMonyeNumberChange}
                            handleEMoneyPinBlur={handleEMoneyPinBlur}
                            handleEMoneyPinChange={handleEMoneyPinChange}
                            eMoneyNumberEmpty={eMoneyNumberEmpty}
                            eMoneyPinEmpty={eMoneyPinEmpty}/>
              :
          
              <CashDeliveryMessage /> }
          </div>
        </div>
        <div className="bottom-form">
          <CheckoutSummary lineItems={lineItems} />
          <PayButton />
        </div>
      </form>
    </div>
  )
}

const CheckoutSummary = (props) => {

  return (
    <div className="checkout__summary">
      <h3>SUMMARY</h3>
      <SummaryListItems lineItems={props.lineItems} />
      <SummaryAmount lineItems={props.lineItems} /> 
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

const EMoneyFields = function(props) {

  const eMoneyNumberRequiredmessage = "Number card is required";
  const eMoneyPinRequiredmessage = "PIN is required";

  function handleEMonyNumberBlur(e) {
    props.handleEMonyNumberBlur(e);
  }

  function handleEMonyeNumberChange(e) {
    props.handleEMonyeNumberChange(e);
  }

  function handleEMoneyPinBlur(e) {
    props.handleEMoneyPinBlur(e);
  }
      
  function handleEMoneyPinChange(e) {
    props.handleEMoneyPinChange(e);
  }

  return (
    <div className="e-money-fields">
      <div className="field">
        <div className="top-field">
          <label htmlFor="e-money-number">e-Money Number</label>
          { props.eMoneyNumberEmpty && <span className="error-message">{eMoneyNumberRequiredmessage}</span> }
        </div>
          <input type="text"
                 id="e-money-number"
                 onChange={handleEMonyeNumberChange}
                 onBlur={handleEMonyNumberBlur} />
      </div>
      <div className="field">
        <div className="top-field">
          <label htmlFor="pin">e-Money PIN</label>
          { props.eMoneyPinEmpty && <span className="error-message">{eMoneyPinRequiredmessage}</span> }
        </div>
          <input type="text"
                 id="pin"
                 onChange={handleEMoneyPinChange}
                 onBlur={handleEMoneyPinBlur} />
      </div>    
    </div>
  )
}

const CashDeliveryMessage = function() {

  const windowWidth = useWindowSize().width;

  return (
    <div className="cash-delivery-message">
      { windowWidth > 600 ? <span><CashDeliveryIcon /></span> : null }
      <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
    </div>
  )
}

export default CheckoutForm;