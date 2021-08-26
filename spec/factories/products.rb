FactoryBot.define do
  factory :product do
    name { "Product Name" }
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
