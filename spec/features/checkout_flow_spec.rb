require "rails_helper"

RSpec.describe "checkout flow", type: :feature, js: true do 

  let!(:headphones) { create(:category, name: "headphones") }
  let!(:xx59) { create(:product, name: "XX59 Headphones",
                                 also_name: "xx59 also",
                                 cart_name: "xx59 cart",
                                 slug: "xx59-headphones",
                                 description: "xx59 description", 
                                 features: "xx59 features", 
                                 price: 200,
                                 category: headphones) }

  describe "select payment method" do 

    before(:each) do 
      visit root_path
      visit products_path(xx59.slug)
      click_button("Add To Cart")
      find(".cart-link").click
      find(".btn-checkout").click
    end
    
    context "when e-money is selected" do 

      it "shows the fileds for the number card and pin" do 
        find("[value=e-money]").click
        expect(page).to have_content("e-Money Number")
        expect(page).to have_content("e-Money PIN")
      end
      
      it "doesn't show the cash delivery message" do 
        find("[value=e-money]").click
        expect(page).to_not have_content("The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.")
      end
    end
    
    context "when cash-delivery is selected" do 
      
      it "doesn't show the cash delivery message" do 
        find("[value=e-money]").click
        expect(page).to have_content("The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.")
      end

      it "doesn't show the fileds for the nubmer card and pin" do 
        find("[value=cash]").click
        expect(page).to_not have_content("e-Money Number")
        expect(page).to_not have_content("e-Money PIN")
      end
    end
  end
end