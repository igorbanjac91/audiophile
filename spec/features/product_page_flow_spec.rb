require "rails_helper" 

RSpec.describe "Product page", type: :feature, js: true do 

  let!(:headphones) { create(:category, name: "headphones") }
  let!(:speakers) { create(:category, name: "speakers") }
  let!(:xx59) { create(:product, name: "XX59 Headphones",
                                 also_name: "xx59 also",
                                 slug: "xx59-headphones",
                                 description: "xx59 description", 
                                 features: "xx59 features", 
                                 category: headphones) }
  let!(:manual) { create(:accessory, product: xx59) }                                 
  let!(:bag) { create(:accessory, name: "bag", quantity: 3, product: xx59) }                                 
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
    visit products_path(xx59.slug)
  end

  it "shows the product info" do 
    expect(page).to have_content(xx59.name.upcase)
    expect(page).to have_content(xx59.description)
    expect(page).to have_content(xx59.features)
    expect(page).to have_content(xx59.price)
  end
  
  it "has an add to cart btn" do 
    expect(page).to have_button("Add To Cart")
  end

  it "has a go back link" do 
    expect(page).to have_link("Go Back")
  end

  it "links back to the previus page" do 
    visit categories_path(headphones.name)
    click_link("SEE PRODUCT", href: products_path(xx59.slug))
    click_link("Go Back")
    expect(current_path).to eq(categories_path(headphones.name))
  end
  
  describe "suggested products" do 
    
    it "shows tree suggested products" do 
      expect(page).to have_content(xx99.also_name)
      expect(page).to have_content(zx7.also_name)
      expect(page).to have_content(zx9.also_name)
    end
    
    it "has a see product button for each suggested product" do 
      expect(page).to have_link("SEE PRODUCT", href: "/products/#{xx99.slug}")
      expect(page).to have_link("SEE PRODUCT", href: "/products/#{zx7.slug}")
      expect(page).to have_link("SEE PRODUCT", href: "/products/#{zx9.slug}")
    end
  end


  describe "select quantity" do 
    
    context "when clicking '+' " do 

      it "increases the quantity by 1" do 
        within(".select-quantity") do 
          click_button("+")
          expect(page).to have_content("2")
        end
      end
    end

    context "when clicking '-' " do 

      context "when is equal to 1" do 
        
        it "doesn't decrease the quantity to 0" do 
          within(".select-quantity") do 
            click_button("-")
            expect(page).to have_content("1")
          end
        end
      end

      it "decreases the quantity by 1" do 
        within(".select-quantity") do 
          click_button("+")
          click_button("+")
          click_button("+")
          click_button("-")
          expect(page).to have_content("3")
        end
      end
    end
  end

  describe "product accessories" do 

    it "shows the product accessories" do 
      expect(page).to have_content(manual.name)
      expect(page).to have_content(bag.name)
    end

    it "shows the product accessories quantities" do 
      within(".box-content-list") do 
        expect(page).to have_content(manual.quantity)
        expect(page).to have_content(bag.quantity)
      end
    end
  end
end