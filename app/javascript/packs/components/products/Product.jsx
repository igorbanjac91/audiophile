import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductInfo from "./ProductInfo";
import { useWindowSize, setImage } from "../utils";
import setAxiosHeaders from "../AxiosHeaders";

const Product = (props) => {

  let param = useParams();
  const [ product, setProduct ] = useState();
  let [ quantity, setQuantity ] = useState(1);

  useEffect(() => {
    fetchProduct();
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

  function handleClick(e) {
    e.preventDefault();
    props.history.goBack();
  }

  function handleChangeQuantity(e) {
    e.preventDefault();
    let sign = e.target.textContent;
    switch (sign) {
      case "+":
        setQuantity(quantity += 1);
        break;
      case "-":
        if (quantity == 1) {
          break;
        }
        setQuantity(quantity -= 1);
        break;
      default:
        console.log("error");
        break;
    }
  }

  function handleAddToCart() {
    setAxiosHeaders();

    const formData = new FormData();
    formData.append("line_item[quantity]", quantity);
    formData.append("line_item[product_id]", product.id);

    axios
      .post("/api/v1/line_items", formData)
      .then( response => {
        console.log(response)
      }).catch((e) => {
        console.log(e)
      })
  }

  return (
    <div className="product">
      { product && 
        <div>
          <a className="product__go-back-link" onClick={handleClick}>Go Back</a>
          <TopPage product={product} 
                   quantity={quantity} 
                   handleChangeQuantity={handleChangeQuantity} 
                   handleAddToCart={handleAddToCart} />
          <Features features={product.features} />
          <BoxContent accessories={product.accessories} />
          <ProductGallery gallery={product.images.gallery} />
          <MayLike />
        </div> 
      }
    </div>
  )
}

const TopPage = (props) => {

  let product = props.product;
  let images = product.images;
  const windowSize = useWindowSize();

  let imageMobileUrl = images.mobile_image_url;
  let imageTabletUrl = images.tablet_image_url;
  let imageDesktopUrl = images.desktop_image_url;

  let imageUrl = setImage(imageMobileUrl, imageTabletUrl, imageDesktopUrl, windowSize);

  function handleChangeQuantity(e) {
    props.handleChangeQuantity(e);
  }

  function handleAddToCart() {
    props.handleAddToCart();
  }

  return (
    <section className="product__top-page">
      <div className="product-image" style={{backgroundImage: `url(${imageUrl})`}}></div> 
      <div className="product-main-content">
        <ProductInfo item={product} showPrice={true} />
        <div className="product-action">
          <ProductSelectQuantity product={product} handleChangeQuantity={handleChangeQuantity} quantity={props.quantity}/>
          <AddToCartButon handleAddToCart={handleAddToCart} />
        </div>
      </div>
    </section>   
  )
}

const ProductSelectQuantity = (props) => {

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

const AddToCartButon = (props) => {
  
  function handleAddToCart() {
    props.handleAddToCart();
  }

  return (
    <button className="btn-add-to-cart" onClick={handleAddToCart} >Add To Cart</button>
  )
}


const Features = (props) => {

  let newText = props.features.split('\n\n');

  let paragraphs = newText.map( (paragraphText, index) => {
    return <p key={index}>{paragraphText}</p>
  })

  return (
    <div className="product__features">
      <h3>FEATURES</h3>
      {paragraphs}
    </div>
  )
}

const BoxContent = (props) => {

  return (
    <div className="product__box-content">
      <h3>IN THE BOX</h3>
      <BoxContentList accessories={props.accessories} />
    </div>
  )
}

const BoxContentList = (props) => {

  let accessories = props.accessories

  let accessoriesItems = accessories.map( (accesory) => {
    return <BoxContentListItem key={accesory.id} accesory={accesory} />
  })

  return (
    <ul className="box-content-list">
      {accessoriesItems}
    </ul>
  )
}

const BoxContentListItem = (props) => {

  let accesory = props.accesory

  return (
    <li className="box-content-list__item">
      <span>{accesory.quantity}x</span>
      {accesory.name}
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