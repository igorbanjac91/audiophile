FactoryBot.define do
  factory :product do
    name { "Product Name" }
    also_name { "also name" }
    cart_name { "cart name" }
    slug { "product-name" }
    description { "product description" }
    features { "product features" }
    price { 499 }
    new { false }
    category

    after(:build) do |product|
      product.mobile_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/mobile/image-product.jpg"), filename: "image-prduct.jpg", content_type: "image/jpg")
      product.tablet_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/tablet/image-product.jpg"), filename: "image-prduct.jpg", content_type: "image/jpg")
      product.desktop_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/desktop/image-product.jpg"), filename: "image-prduct.jpg", content_type: "image/jpg")
      product.category_mobile_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/category/mobile/image-yx1-earphones.jpg"), filename: "image-yx1-earphones.jpg", content_type: "image/jpg")
      product.category_tablet_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/category/tablet/image-yx1-earphones.jpg"), filename: "image-yx1-earphones.jpg", content_type: "image/jpg")
      product.category_desktop_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/category/desktop/image-yx1-earphones.jpg"), filename: "image-yx1-earphones.jpg", content_type: "image/jpg")
      product.cart_image.attach(io: File.open("app/assets/images/products/product-yx1-earphones/cart/image-yx1-earphones.jpg"), filename: "image-yx1-earphones.jpg", content_type: "image/jpg")
      product.also_like_mobile_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/mobile/image-xx59-headphones.jpg"), filename: "image-xx59-headphones.jpg", content_type: "image/jpg")
      product.also_like_tablet_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/tablet/image-xx59-headphones.jpg"), filename: "image-xx59-headphones.jpg", content_type: "image/jpg")
      product.also_like_desktop_image.attach(io: File.open("app/assets/images/products/product-xx59-headphones/desktop/image-xx59-headphones.jpg"), filename: "image-xx59-headphones.jpg", content_type: "image/jpg")
      product.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/mobile/image-gallery-1.jpg"), filename: "image-gallery-1.jpg", content_type: "image/jpg")
      product.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/mobile/image-gallery-2.jpg"), filename: "image-gallery-2.jpg", content_type: "image/jpg")
      product.mobile_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/mobile/image-gallery-3.jpg"), filename: "image-gallery-3.jpg", content_type: "image/jpg")
      product.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/tablet/image-gallery-1.jpg"), filename: "image-gallery-1.jpg", content_type: "image/jpg")
      product.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/tablet/image-gallery-2.jpg"), filename: "image-gallery-2.jpg", content_type: "image/jpg")
      product.tablet_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/tablet/image-gallery-3.jpg"), filename: "image-gallery-3.jpg", content_type: "image/jpg")
      product.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/desktop/image-gallery-1.jpg"), filename: "image-gallery-1.jpg", content_type: "image/jpg")
      product.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/desktop/image-gallery-2.jpg"), filename: "image-gallery-2.jpg", content_type: "image/jpg")
      product.desktop_gallery_images.attach(io: File.open("app/assets/images/products/product-yx1-earphones/desktop/image-gallery-3.jpg"), filename: "image-gallery-3.jpg", content_type: "image/jpg")
    end
  end

  trait :new do 
    new { true }
  end

end
