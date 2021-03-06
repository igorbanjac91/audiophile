import React, { useEffect } from "react";
import CategoriesList from "../shared/CategoriesList";
import { useWindowSize, setImage } from "../utils";
import ButtonSeeProduct from "../shared/ButtonSeeProduct";
import ProductInfo from "../products/ProductInfo";

let mainItem = {
  name: "XX99R MARK II HEADPHONES",
  new: true,
  slug: "xx99-mark-two-headphones",
  description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
}

let firstItem = {
  name: "ZX9 SPEAKER",
  slug: "zx9-speaker",
  new: false,
  description: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
}

let secondItem = {
  name: "ZX7 SPEAKER",
  slug: "zx7-speaker",
  new: false,
  description: "",
}

let thirdItem = {
  name: "YX1 EARPHONES",
  slug: "yx1-earphones",
  new: false,
  description: "",
}


const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' })
  }) 

  return (
    <main className="home">
      <MainProduct item={mainItem} />
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
        <ButtonSeeProduct slug={mainItem.slug} location={"/"}/>
      </div>
    </header>
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
      <div>
        <ProductInfo item={firstItem}/>
        <ButtonSeeProduct slug={firstItem.slug} location={"/"}/>
      </div>  
    </li>
  )
}


const SecondProductListItem = () => {

  return (
    <li className="top-products-list__second-item">
      <div>
        <ProductInfo item={secondItem}/>
        <ButtonSeeProduct slug={secondItem.slug } location={"/"}/>
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
          <ButtonSeeProduct slug={thirdItem.slug} location={"/"}/>
        </div>
      </div>
    </li>
  )
}

export default Home;