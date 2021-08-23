require 'rails_helper'

RSpec.describe Category, type: :model do

  describe "validations" do 

    it { should validate_presence_of(:name) }    
    it { should validate_length_of(:name).is_at_most(80) }
  end

  describe "associations" do 

    it { should have_many(:products) }
  end
end
