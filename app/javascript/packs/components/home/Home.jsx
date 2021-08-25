import React, { useEffect, useState } from "react";
import CategoriesList from "../shared/CategoriesList";

let mainItem = {
  name: "XX99 MARK II HEADPHONES",
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
  
  let imageUrl = "";

  const windowSize = useWindowSize();

  if ( windowSize.width <= 768 ) {
    imageUrl = "https://res.cloudinary.com/dsmap0onp/image/upload/v1629737663/audiophile/home/mobile/image-header_ddbjsg.jpg";
  } else if ( windowSize.width <= 960) {
    imageUrl= "https://res.cloudinary.com/dsmap0onp/image/upload/v1629737615/audiophile/home/tablet/image-header_suxtvz.jpg";
  } else {
    imageUrl= "https://res.cloudinary.com/dsmap0onp/image/upload/v1629737642/audiophile/home/desktop/image-hero_lvfuhu.jpg";
  }
  

  return (
    <header className="main-product"
         style={{ backgroundImage: `url(${imageUrl})` }} 
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

function useWindowSize() {

  const [windowSize, setWindowSize] = useState( {
    width: undefined,
    height: undefined
  })

  useEffect(() => {

    function handleResize() {

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return windowSize;
}

export default Home;