import React from "react";


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
    <header className="top-product"
         style={{ backgroundImage: `url("https://res.cloudinary.com/dsmap0onp/image/upload/v1629737663/audiophile/home/mobile/image-header_ddbjsg.jpg")` }} >
      <ProductInfo />
      <ButtonSeeProduct />
    </header>
  )
}

const ProductInfo = () => {

  return (
    <div className="porduct-info">
      <span>NEW PRODUCT</span>
      <h2>XX99 MARK II HEADPHONES</h2>
      <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    </div>
  )
}


const ButtonSeeProduct = () => {

  return (
    <button className="btn">SEE PRODUCT</button>
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
    <li>
      <img src="" alt="" />
      <h3>HEADPHONES</h3>
      <button>SHOP</button>
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
      <img src="" alt="" />
      <ProductInfo />
      <ButtonSeeProduct />
    </li>
  )
}


const SecondProductListItem = () => {

  return (
    <li className="top-products-list__second-item">
      <ProductInfo />
      <ButtonSeeProduct />
    </li>
  )
}


const ThirdProductListItem = () => {

  return (
    <li className="top-products-list__third-item">
      <div></div>
      <div>
        <ProductInfo />
        <ButtonSeeProduct />
      </div>
    </li>
  )
}

export default Home;