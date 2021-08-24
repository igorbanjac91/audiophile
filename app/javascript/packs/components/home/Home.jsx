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
         style={{ backgroundImage: `url("https://res.cloudinary.com/dsmap0onp/image/upload/v1629737663/audiophile/home/mobile/image-header_ddbjsg.jpg")` }} 
    >
      <div className="top-product__content">
        <ProductInfo />
        <ButtonSeeProduct />
      </div>
    </header>
  )
}

const ProductInfo = () => {

  return (
    <div className="porduct-info">
      <span className="product-info__new">NEW PRODUCT</span>
      <h2 className="product-info__name">XX99 MARK II HEADPHONES</h2>
      <p className="product-info__description">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
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