require 'rails_helper'

RSpec.describe Order, type: :model do
 
  describe "associations" do 

    it { should have_many(:products).through(:line_items) }
  end
end
