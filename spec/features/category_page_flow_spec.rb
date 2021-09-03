require "rails_helper" 

RSpec.describe "Category page flow", type: :feature, js: true do 

  let!(:headphones) { create(:category, name: "headphones") }
  let!(:xx59) { create(:product, name: "XX59 Headphones", 
                                 slug: "xx59-haedphones",
                                 description: "xx59 description", 
                                 category: headphones) }
  let!(:xx99) { create(:product, name: "XX99 Headphones", 
                                 slug: "xx99-headphones",
                                 description: "xx99 description", 
                                 category: headphones) }
  

  describe "category page" do 

    it "shows all the category's products name and description" do 
      visit categories_path("headphones")
      headphones.products.each do |product| 
        expect(page).to have_content(product.name)
        expect(page).to have_content(product.description)
      end
    end
  end

  describe "see product button link" do 

    it "has a see product btn for each product" do 
      visit categories_path("headphones")
      expect(page).to have_link("SEE PRODUCT", href: "/products/#{xx59.slug}")
      expect(page).to have_link("SEE PRODUCT", href: "/products/#{xx99.slug}")
    end

    it "visits the products page" do 
      visit categories_path("headphones")
      click_link("SEE PRODUCT", href: "/products/#{xx59.slug}")
      expect(current_path).to eq(products_path(xx59.slug))
    end
  end
end