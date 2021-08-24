import { props } from "bluebird";
import React from "react";
import Earphones from "../../../../assets/images/seeds/image-earphones.png"
import { ArrowRightIcon } from "../shared/Icons";


let mainItem = {
  name: "XX99 MARK HEADPHONES",
  new: true,
  description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
}

let firstItem = {
  name: "ZX9 SPEAKER",
  new: false,
  description: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
}

let secondItem = {
  name: "ZX7 SPEAKER",
  new: false,
  description: "",
}

let thirdItem = {
  name: "YX1 EARPHONES",
  new: false,
  description: "",
}

const Home = () => {

  return (
    <div className="home">
      <MainProduct />
      <CategoriesList />
      <TopProductsList />
    </div>
  )
}


const MainProduct = () => {
  
  return (
    <header className="main-product"
         style={{ backgroundImage: `url("https://res.cloudinary.com/dsmap0onp/image/upload/v1629737663/audiophile/home/mobile/image-header_ddbjsg.jpg")` }} 
    >
      <div className="main-product__content">
        <ProductInfo item={mainItem}/>
        <ButtonSeeProduct />
      </div>
    </header>
  )
}

const ProductInfo = (props) => {

  return (
    <div className="porduct-info">
      { props.item.new && <span className="product-info__new">NEW PRODUCT</span> }
      { props.item.name && <h2 className="product-info__name">{props.item.name}</h2> }
      { props.item.description && <p className="product-info__description">{props.item.description}</p> }
      
      
    </div>
  )
}


const ButtonSeeProduct = () => {

  

  return (
    <button className="btn-see-product">SEE PRODUCT</button>
  )
}


const CategoriesList = () => {

  return (
    <div className="categories-list">
      <ul>
        <CategoriesListItem /> 
      </ul>
    </div>
  )
}

const CategoriesListItem = () => {
  
  return (
    <li className="categories-list__item">
      <img src={Earphones} alt="earphones" />
      <h3>HEADPHONES</h3>
      <a className="btn-shop">
        <span>SHOP</span>
        <ArrowRightIcon />
      </a>
    </li>
  )
}

const TopProductsList = () => {
  return (
    <div className="top-products">
      <ul className="top-products-list">
        <FirstProductListItem />
        <SecondProductListItem />
        <ThirdProductListItem />
      </ul>
    </div>
  )
}


const FirstProductListItem = () => {
  
  return (
    <li className="top-products-list__first-item">
      <img src="https://res.cloudinary.com/dsmap0onp/image/upload/v1629737663/audiophile/home/mobile/image-speaker-zx9_jduqnp.png" alt="speaker" />
      <ProductInfo item={firstItem}/>
      <ButtonSeeProduct />
    </li>
  )
}


const SecondProductListItem = () => {

  return (
    <li className="top-products-list__second-item">
      <div>
        <ProductInfo item={secondItem}/>
        <ButtonSeeProduct />
      </div>
    </li>
  )
}


const ThirdProductListItem = () => {

  return (
    <li className="top-products-list__third-item">
      <div className="image-container"></div>
      <div className="info-container">
        <div>
          <ProductInfo item={thirdItem} />
          <ButtonSeeProduct />
        </div>
      </div>
    </li>
  )
}

export default Home;