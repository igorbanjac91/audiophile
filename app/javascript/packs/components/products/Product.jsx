import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import ProductInfo from "./ProductInfo";

const Product = () => {

  let param = useParams();

  useEffect(() => {
    
  }, []);

  function fetchProduct() {
    axios
      .get(`/api/v1/products/${param.name}`)
      .then( response => {
        console.log(response);
      }).catch( e => {
        console.log(e);
      })
  }

  return (
    <div className="product">
      <section className="product__top-page">
        <div style={{backgroundImage: `url("")`}}></div>
        <div className="product-main-content">
          <ProductInfo />
          <AddToCartButon />
        </div>
        <Features />
        <BoxContent />
        <ProductGallery />
        <MayLike />
      </section>   
    </div>
  )
}

const AddToCartButon = () => {
  
  return (
    <button>Add To Cart</button>
  )
}


const Features = () => {
  return (
    <div className="product__features">
      <h3>FEATURES</h3>
      <p>description</p>
      <p>features</p>
    </div>
  )
}

const BoxContent = () => {

  return (
    <div className="product__box-content">
      <h3>IN THE BOX</h3>
      <BoxContentList />
    </div>
  )
}

const BoxContentList = () => {

  return (
    <ul className="box-content-list">

    </ul>
  )
}

const BoxContentListItem = () => {

  return (
    <li className="box-content-list__item">
      <span></span>
    </li>
  )
}


const ProductGallery = () => {
  <div className="product__gallery" >
    <ul>
      <li style={{ backgroundImage: `url("")`}}></li>
      <li style={{ backgroundImage: `url("")`}}></li>
      <li style={{ backgroundImage: `url("")`}}></li>
    </ul>
  </div>
}

const MayLike = () => {

  return (
    <div className="prdouct__may-like">
      <MayLikeList />
    </div>
  )
}

const MayLikeList = () => {
  return (
    <ul className="may-like-list">
      
    </ul>
  )
}

const MayLikeListItem = () => {
  <li className="may-like-list__item">
    <div clasName="may-like-image" style={{ backgroundImage: `url("")`}}></div>
    <ProductInfo />
  </li>
}

export default Product;