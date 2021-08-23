class Product < ApplicationRecord

  validates :name, :slug, :description, :features, :price, presence: true
  validates :price, numericality: { integer: true}
  validates :name, length: { maximum: 80 }
  validates :slug, length: { maximum: 80 }
  validates :description, length: { maximum: 1200 }
  validates :features, length: { maximum: 1200 }

  belongs_to :category

  has_many :line_items
  has_many :orders, through: :line_items
end

