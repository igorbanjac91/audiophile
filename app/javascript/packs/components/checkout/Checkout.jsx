import React, { useState } from "react";
import SuccessWindow from "./SuccessWindow";
import CheckoutForm from "./CheckoutForm";
import { useHistory } from "react-router";

const Checkout = (props) => {

  let order = props.order
  let lineItems = props.lineItems
  let history = useHistory();
  const [ success, setSuccess ] = useState(true);

  let aboutSection = document.querySelector(".about");
  aboutSection.style.display = "none";    

  function goBack() {
    history.goBack();
  }

  return (      
    <div className="checkout-container">
      <a onClick={goBack} className="go-back-link">Go Back</a>
      { order && <div className="checkout">
        <CheckoutForm lineItems={lineItems}/>
        { success && <SuccessWindow order={order}
                                    lineItems={lineItems}/> }
      </div> }
    </div>
  )
}


export default Checkout;