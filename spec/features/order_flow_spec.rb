require "rails_helper" 

RSpec.describe "Order flow", type: :feature, js: true do 

  let!(:headphones) { create(:category, name: "headphones") }
  let!(:speakers) { create(:category, name: "speakers") }
  let!(:xx59) { create(:product, name: "XX59 Headphones",
                                 also_name: "xx59 also",
                                 slug: "xx59-headphones",
                                 description: "xx59 description", 
                                 features: "xx59 features", 
                                 category: headphones) }
  let!(:manual) { create(:accessory, product: xx59) }                                 
  let!(:xx99) { create(:product, name: "XX99 Headphones",
                                 also_name: "xx99 also",
                                 slug: "xx99-headphones",
                                 description: "xx99 description", 
                                 features: "xx99 features", 
                                 category: headphones) }
  let!(:zx9) { create(:product, name: "ZX9 Headphones", 
                                also_name: "zx9 also",
                                slug: "zx9-speakers",
                                description: "zx9 description", 
                                features: "zx9 features", 
                                category: speakers) }
  let!(:zx7) { create(:product, name: "ZX7 Speaker", 
                                also_name: "zx7 also",
                                slug: "zx7-speaker",
                                description: "zx7 description", 
                                features: "zx7 features", 
                                category: speakers) }

  before(:each) do 

  end
end
  