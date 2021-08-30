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

  has_one_attached :mobile_image
  has_one_attached :tablet_image
  has_one_attached :desktop_image
  has_one_attached :category_mobile_image
  has_one_attached :category_tablet_image
  has_one_attached :category_desktop_image

  has_many_attached :mobile_gallery_images
  has_many_attached :tablet_gallery_images
  has_many_attached :desktop_gallery_images
end

