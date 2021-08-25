import React, { useEffect, useState } from "react";
import CategoriesList from "../shared/CategoriesList";

let mainItem = {
  name: "XX99R MARK II HEADPHONES",
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
    <main className="home">
      <MainProduct />
      <CategoriesList />
      <TopProductsList />
    </main>
  )
}


const MainProduct = () => {
  
  let imageMobileUrl = "https://res.cloudinary.com/dsmap0onp/image/upload/v1629737663/audiophile/home/mobile/image-header_ddbjsg.jpg";
  let imageTabletUrl = "https://res.cloudinary.com/dsmap0onp/image/upload/v1629737615/audiophile/home/tablet/image-header_suxtvz.jpg";
  let imageDeskotpUrl = "https://res.cloudinary.com/dsmap0onp/image/upload/v1629737642/audiophile/home/desktop/image-hero_lvfuhu.jpg";

  const windowSize = useWindowSize();

  let imageUrl = setImage(imageMobileUrl, imageTabletUrl, imageDeskotpUrl, windowSize);

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
  
  let imageMobileUrl = "https://res.cloudinary.com/dsmap0onp/image/upload/v1629737663/audiophile/home/mobile/image-speaker-zx9_jduqnp.png";
  let imageTabletUrl = "https://res.cloudinary.com/dsmap0onp/image/upload/v1629737615/audiophile/home/tablet/image-speaker-zx9_f2nwnz.png";
  let imageDeskotpUrl = "https://res.cloudinary.com/dsmap0onp/image/upload/v1629737642/audiophile/home/desktop/image-speaker-zx9_ejklva.png";

  let windowSize = useWindowSize();

  let imageUrl = setImage(imageMobileUrl, imageTabletUrl, imageDeskotpUrl, windowSize);

  return (
    <li className="top-products-list__first-item">
      <img src={imageUrl} alt="speaker" />
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

function setImage(mobileUrl, tabletUrl, desktopUrl, windowSize) {
  if ( windowSize.width < 600 ) {
    return mobileUrl
  } else if ( windowSize.width < 960) {
    return tabletUrl
  } else {
    return desktopUrl
  }
}

export default Home;