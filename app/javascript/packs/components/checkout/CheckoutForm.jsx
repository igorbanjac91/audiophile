import React, { useEffect, useState } from "react";
import { CashDeliveryIcon } from "../shared/Icons";
import { useWindowSize } from "../utils";

const CheckoutForm = () => {

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
      <h2>CHECKOUT</h2>
      <form>
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
      </form>
    </div>
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