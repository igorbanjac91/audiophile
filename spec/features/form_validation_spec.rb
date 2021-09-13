require "rails_helper";

RSpec.describe "Form validatons", type: :feature, js: true do 

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
        expect(page).to have_content("Name is required")
      end
    end

    context "after shifting foucs from email field to another" do 

      it "shows an error if the email field is empty" do 
        find("#email").click
        find("#name").click
        expect(page).to have_content("Email is required")
      end
    end

    context "after shifting foucs from phone number field to another" do 

      it "shows an error if the phone number field is empty" do 
        find("#phone").click
        find("#email").click
        expect(page).to have_content("Phone number is required")
      end
    end
     
    context "after shifting foucs from address field to another" do 

      it "shows an error if the phone number field is empty" do 
        find("#address").click
        find("#email").click
        expect(page).to have_content("Address is required")
      end
    end
     
    context "after shifting foucs from zip field to another" do 

      it "shows an error if the zip field is empty" do 
        find("#zip").click
        find("#email").click
        expect(page).to have_content("ZIP Code is required")
      end
    end
     
    context "after shifting foucs from City field to another" do 

      it "shows an error if the City field is empty" do 
        find("#city").click
        find("#email").click
        expect(page).to have_content("City is required")
      end
    end
     
    context "after shifting foucs from Country field to another" do 

      it "shows an error if the Country field is empty" do 
        find("#country").click
        find("#email").click
        expect(page).to have_content("Country is required")
      end
    end
     
  end
end