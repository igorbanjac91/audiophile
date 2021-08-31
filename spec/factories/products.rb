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
  end

  trait :new do 
    new { true }
  end

end
