require 'rails_helper'

RSpec.describe Product, type: :model do

  describe "validations" do 

    it { should validate_presence_of(:name) }    
    
    it { should validate_presence_of(:slug) }    
    it { should validate_presence_of(:features) }    
    it { should validate_presence_of(:description) }    
    it { should validate_presence_of(:price) }    

    it { should validate_numericality_of(:price) }

    it { should validate_length_of(:name).is_at_most(80) }
    it { should validate_length_of(:slug).is_at_most(80) }
    it { should validate_length_of(:description).is_at_most(1200) }
    it { should validate_length_of(:features).is_at_most(1200) }
  end

  describe "associations" do 

    it { should have_many(:orders).through(:line_items) }
    it { should belong_to(:category) }

  end
end
