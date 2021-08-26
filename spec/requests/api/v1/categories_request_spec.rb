require "rails_helper"

RSpec.describe "API Categories", type: :request do 

  let(:headphone_category) { create(:category) }

  describe "GET /index" do 

    it "returns a successful response" do 
      get "/api/v1/categories" 
      expect(response).to have_http_status(200)
    end
  end
  
  describe "GET /show" do 

    it "returns a successful response" do 
      get "/api/v1/categories/#{headphone_category.id}" 
      expect(response).to have_http_status(200)
    end
  end
end