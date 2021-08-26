require "rails_helper";

RSpec.describe "Product API", type: :request do 

  let!(:headphone_product) { create(:product, name: "Headphone ZRX I", slug: "headphone-zrx-i") }

  describe "GET /index" do 
    
    it "returns a successful response" do 
      get '/api/v1/products' 
      expect(response).to have_http_status(200)
    end
  end

  describe "GET /show" do 

    it "return a successful response" do 
      get "/api/v1/products/#{headphone_product.id}"
      expect(response).to have_http_status(200)
    end
  end
end