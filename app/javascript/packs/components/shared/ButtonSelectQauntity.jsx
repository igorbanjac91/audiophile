
import React from "react";

const ButtonSelectQuantity = (props) => {
  let quantity = props.quantity;

  function handleChangeQuantity(e) {
    props.handleChangeQuantity(e);
  }

  return (
    <div className="select-quantity">
      <button onClick={handleChangeQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={handleChangeQuantity}>+</button>
    </div>
  )
}

export default ButtonSelectQuantity;