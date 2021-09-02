require "rails_helper"

RSpec.feature "Homepage flow", type: :feature, js: true do 

  let!(:XX99_headphones) { create(:product, name: "XX99 MARK II HEADPHONES", slug: "xx99-mark-two-headphones") }
  let!(:ZX7_speaker) { create(:product, name: "ZX7 SPEAKER", slug: "zx7-speaker") }
  let!(:ZX9_speaker) { create(:product, name: "ZX9 SPEAKER", slug: "zx9-speaker") }
  let!(:YX1_earphone) { create(:product, name: "YX1 WIRELESS EARPHONES", slug: "yx1-earphones") }

  let!(:headphones) { create(:category, name: "headphones") }
  let!(:speakers) { create(:category, name: "speakers") }
  let!(:earphones) { create(:category, name: "earphones") }


  describe "logo link" do 

    it "visits the home page" do 
      visit categories_path("speakers")
      find(".logo").click
      expect(current_path).to eq(root_path)
    end
  end

  describe "links to see products page" do 
      
    before(:each) do 
      visit root_path
    end

    it "shows the main product page" do 
      within(".main-product__content") do 
        find(".btn-see-product").click
      end
      expect(current_path).to eq(products_path("xx99-mark-two-headphones"))
    end

    it "shows the first top product page" do 
      within(".top-products-list__first-item") do 
        find(".btn-see-product").click
      end
      expect(current_path).to eq(products_path("zx9-speaker"))
    end

    it "shows the top second product page" do 
      within(".top-products-list__second-item") do 
        find(".btn-see-product").click
      end
      expect(current_path).to eq(products_path("zx7-speaker"))
    end

    it "shows the top second product page" do 
      within(".top-products-list__third-item") do 
        find(".btn-see-product").click
      end
      expect(current_path).to eq(products_path("yx1-earphones"))
    end
  end 

  describe "nav menu" do 

    describe "cart icon link" do 

      it "shows the cart window" do
        visit root_path
        find(".cart-link").click
        expect(page).to have_content("Your Cart is Empty")
      end
    end
    
    context "mobile and tablet version", driver: :chrome_headless_mobile do 

      before(:each) do 
        visit root_path
      end

      describe "click menu icon" do 
  
        it "drops down the main menu" do 
          find(".menu-link").click 
          within(:xpath, "/html/body/div[1]/div/nav/div/ul") do 
            expect(page).to have_content("HEADPHONES")
            expect(page).to have_content("SPEAKER")
            expect(page).to have_content("EARPHONES")
          end
        end
      end

      describe "nav link" do 

        before(:each) do 
          visit root_path
          find(".menu-link").click 
        end

        it "visits the headphones page" do 
          within(:xpath, "/html/body/div[1]/div/nav/div/ul/li[1]") do 
            click_link("SHOP")
            expect(current_path).to eq(categories_path("headphones"))
          end
        end
  
        it "visits the speaker page" do 
          within(:xpath, "/html/body/div[1]/div/nav/div/ul/li[2]") do 
            click_link("SHOP")
            expect(current_path).to eq(categories_path("speakers"))
          end
        end
  
        it "visits the earphones page" do 
          within(:xpath, "/html/body/div[1]/div/nav/div/ul/li[3]") do 
            click_link("SHOP")
            expect(current_path).to eq(categories_path("earphones"))
          end
        end

      end
    end

    context "desktop version" do 

      before(:each) do 
        visit root_path
      end

      describe "nav menu" do 

        describe "links" do 

          it "visits the home page" do 
            visit categories_path("speakers")
            within(:xpath, "/html/body/div[1]/div/nav/ul/li[1]/nav") do 
              click_link("HOME")
              expect(current_path).to eq(root_path)
            end
          end
  
          it "visits the headphones page" do 
            within(:xpath, "/html/body/div[1]/div/nav/ul/li[1]/nav") do 
              click_link("HEADPHONES")
              expect(current_path).to eq(categories_path("headphones"))
            end
          end
  
          it "visits the speaker page" do 
            within(:xpath, "/html/body/div[1]/div/nav/ul/li[1]/nav") do 
              click_link("SPEAKERS")
              expect(current_path).to eq(categories_path("speakers"))
            end
          end
  
          it "visits the earphones page" do 
            within(:xpath, "/html/body/div[1]/div/nav/ul/li[1]/nav") do 
              click_link("EARPHONES")
              expect(current_path).to eq(categories_path("earphones"))
            end
          end
        end
      end
    end
  end

  describe "categories nav" do 

    before(:each) do 
      visit root_path
    end

    describe "links" do 
      it "visits the headphones page" do 
        within(:xpath, "/html/body/div[1]/div/div[2]/main/div[1]/ul/li[1]") do 
          click_link("SHOP")
          expect(current_path).to eq(categories_path("headphones"))
        end
      end

      it "visits the speaker page" do 
        within(:xpath, "/html/body/div[1]/div/div[2]/main/div[1]/ul/li[2]") do 
          click_link("SHOP")
          expect(current_path).to eq(categories_path("speakers"))
        end
      end

      it "visits the earphones page" do 
        within(:xpath, "/html/body/div[1]/div/div[2]/main/div[1]/ul/li[3]") do 
          click_link("SHOP")
          expect(current_path).to eq(categories_path("earphones"))
        end
      end
    end
  end
 
  describe "footer nav links" do 

    before(:each) do 
      visit root_path
    end

    describe "logo" do 

      it "visit the home page" do 
        visit categories_path("speakers")
        within(".top-footer") do 
          find(".footer__logo").click
        end
        expect(current_path).to eq("/")
      end
    end

    describe "home link" do 

      it "visits the home page" do 
        visit categories_path("speakers")        
        within(".top-footer") do 
          click_link("HOME") 
        end
        expect(current_path).to eq("/")
      end
    end
    describe "headphones link" do 

      it "visits the heahphones page" do 
        within(".top-footer") do 
          click_link("HEADPHONES") 
        end
        expect(current_path).to eq(categories_path("headphones"))
      end
    end
    describe "speakers link" do 

      it "visits the speakers page" do 
        within(".top-footer") do 
          click_link("SPEAKERS") 
        end
        expect(current_path).to eq(categories_path("speakers"))
      end
    end

    describe "earphones link" do 

      it "visits the earphones page" do 
        within(".top-footer") do 
          click_link("EARPHONES") 
        end
        expect(current_path).to eq(categories_path("earphones"))
      end
    end
  end
end