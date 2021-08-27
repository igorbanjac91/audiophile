import React from "react";

const ProductInfo = (props) => {

  return (
    <div className="porduct-info">
      { props.item.new && <span className="product-info__new">NEW PRODUCT</span> }
      { props.item.name && <h2 className="product-info__name">{props.item.name}</h2> }
      { props.item.description && <p className="product-info__description">{props.item.description}</p> }
    </div>
  )
}

export default ProductInfo;