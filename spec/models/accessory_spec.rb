require 'rails_helper'

RSpec.describe Accessory, type: :model do

  describe "validations" do 

    it { should validate_presence_of(:quantity) }
    it { should validate_presence_of(:name) } 
  end

  describe "association" do 

    it { should belong_to(:product) } 
  end
end
