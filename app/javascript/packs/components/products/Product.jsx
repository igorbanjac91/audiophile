import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductInfo from "./ProductInfo";
import { useWindowSize, setImage } from "../utils";

const Product = () => {

  let param = useParams();
  const [ product, setProduct ] = useState();

  useEffect(() => {
    fetchProduct()
  }, []);
  
  function fetchProduct() {
    axios
    .get(`/api/v1/products/${param.name}`)
    .then( response => {
      let fetchedProduct = response.data
      setProduct(fetchedProduct);
    }).catch( e => {
      console.log(e);
    })
  }  

  return (
    <div className="product">
      { product && 
        <div>
          <TopPage product={product}/>
          <Features features={product.features} description={product.description} />
          <BoxContent />
          <ProductGallery gallery={product.images.gallery} />
          <MayLike />
        </div> 
      }
    </div>
  )
}

const TopPage = (props) => {

  let product = props.product
  let images = product.images
  const windowSize = useWindowSize();

  let imageMobileUrl = images.mobile_image_url;
  let imageTabletUrl = images.tablet_image_url;
  let imageDesktopUrl = images.desktop_image_url;

  let imageUrl = setImage(imageMobileUrl, imageTabletUrl, imageDesktopUrl, windowSize);

  return (
    <section className="product__top-page">
      <div className="product-image" style={{backgroundImage: `url(${imageUrl})`}}></div> 
      <div className="product-main-content">
        <ProductInfo item={product}/>
        <AddToCartButon />
      </div>
    </section>   
  )
}

const AddToCartButon = () => {
  
  return (
    <button>Add To Cart</button>
  )
}


const Features = (props) => {
  return (
    <div className="product__features">
      <h3>FEATURES</h3>
      <p>{props.description}</p>
      <p>{props.features}</p>
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


const ProductGallery = (props) => {

  const windowSize = useWindowSize();

  let gallery = props.gallery;
  let mobile = gallery.mobile;
  let tablet = gallery.tablet;
  let desktop = gallery.desktop;

  let firstImageMobileUrl = mobile[0];
  let secondImageMobileUrl = mobile[1];
  let thirdImageMobileUrl = mobile[2];
  let firstImageTabletUrl = tablet[0];
  let secondImageTabletUrl = tablet[1];
  let thirdImageTabletUrl = tablet[2];
  let firstImageDeskotpUrl = desktop[0];
  let secondImageDeskotpUrl = desktop[1];
  let thirdImageDeskotpUrl = desktop[2];

  let firstImage = setImage(firstImageMobileUrl, firstImageTabletUrl, firstImageDeskotpUrl, windowSize);
  let secondImage = setImage(secondImageMobileUrl, secondImageTabletUrl, secondImageDeskotpUrl, windowSize);
  let thirdImage = setImage(thirdImageMobileUrl, thirdImageTabletUrl, thirdImageDeskotpUrl, windowSize);

  return (
    <div className="product__gallery" >
      <ul>
        <li key={firstImage.id} style={{ backgroundImage: `url(${firstImage.url})`}}></li>
        <li key={secondImage.id} style={{ backgroundImage: `url(${secondImage.url})`}}></li>
        <li key={thirdImage.id} style={{ backgroundImage: `url(${thirdImage.url})`}}></li>
      </ul>
    </div>
  )
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
    <div clasName="may-like-image" style={{ backgroundImage: `url()`}}></div>
    <ProductInfo />
  </li>
}

export default Product;