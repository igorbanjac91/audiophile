require "rails_helper";

RSpec.describe "Form validaton", type: :feature, js: true do 

  let!(:headphones) { create(:category, name: "headphones") }
  let!(:xx59) { create(:product, name: "XX59 Headphones",
                                 also_name: "xx59 also",
                                 cart_name: "xx59 cart",
                                 slug: "xx59-headphones",
                                 description: "xx59 description", 
                                 features: "xx59 features", 
                                 price: 200,
                                 category: headphones) }

  describe "required fields" do 

    before(:each) do 
      visit root_path
      visit products_path(xx59.slug)
      click_button("Add To Cart")
      find(".cart-link").click
      find(".btn-checkout").click
    end

    context "after shifting foucs from name field to another" do 

      it "shows an error if the name field is empty" do 
        find("#name").click
        find("#email").click
        expect(page).to have_content("Name is empty")
      end
    end

  end
end