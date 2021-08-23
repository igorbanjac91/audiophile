class Category < ApplicationRecord

  validates :name, presence: true
  validates :name, length: { maximum: 80 }

  has_many :products
end
