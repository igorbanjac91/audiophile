require "rails_helper" 

RSpec.describe "Cart flow", type: :feature, js: true do 

  let!(:headphones) { create(:category, name: "headphones") }
  let!(:speakers) { create(:category, name: "speakers") }
  let!(:xx59) { create(:product, name: "XX59 Headphones",
                                 also_name: "xx59 also",
                                 cart_name: "xx59 cart",
                                 slug: "xx59-headphones",
                                 description: "xx59 description", 
                                 features: "xx59 features", 
                                 category: headphones) }
  let!(:manual) { create(:accessory, product: xx59) }                                 
  let!(:xx99) { create(:product, name: "XX99 Headphones",
                                 also_name: "xx99 also",
                                 cart_name: "xx99 cart",
                                 slug: "xx99-headphones",
                                 description: "xx99 description", 
                                 features: "xx99 features", 
                                 category: headphones) }
  let!(:zx9) { create(:product, name: "ZX9 Headphones", 
                                also_name: "zx9 also",
                                cart_name: "zx9 cart",
                                slug: "zx9-speakers",
                                description: "zx9 description", 
                                features: "zx9 features", 
                                category: speakers) }
  let!(:zx7) { create(:product, name: "ZX7 Speaker", 
                                also_name: "zx7 also",
                                cart_name: "zx7 cart",
                                slug: "zx7-speaker",
                                description: "zx7 description", 
                                features: "zx7 features", 
                                category: speakers) }
  

  before(:each) do 
    visit root_path
  end

  describe "empty cart" do 

    before(:each) do    
      find(".cart-link").click
    end
    
    it "shows that the cart is empty" do 
      within(".cart") do 
        expect(page).to have_content("CART (0)")
        expect(page).to have_content("Your Cart is Empty")
      end
    end

    it "shows a total of 0" do 
      within(".cart__total") do 
        expect(page).to have_content("$ 0")
      end
    end

    it "doesn't have a link for removing all items from the cart" do 
      expect(page).to_not have_link("Remove all")
    end
  end

  describe "add product to cart" do 

    before(:each) do 
      visit products_path(xx59.slug)
      click_button("Add To Cart")
      find(".cart-link").click
    end

    it "increases the cart quantity to 1" do
      save_and_open_screenshot
      expect(page).to have_content("CART (1)")
      expect(page).to_not have_content("CART (0)")
    end

    it "has a link for removing all products" do 
      expect(page).to have_link("Remove all")
    end
  end

  describe "remove all products" do 
    
    it "removes all products from the cart" do 

    end
  end
end