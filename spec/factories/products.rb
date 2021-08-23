FactoryBot.define do
  factory :product do
    name { "MyString" }
    slug { "MyString" }
    description { "MyText" }
    feature { "MyText" }
    new { false }
  end
end
