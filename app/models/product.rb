class Product < ApplicationRecord
  validates :name, 
            :also_name,
            :cart_name,
            :slug, 
            :description, 
            :features, 
            :price, presence: true
  validates :price, numericality: { integer: true}
  validates :name, :slug, length: { maximum: 80 }
  validates :also_name, length: { maximum: 15 }
  validates :cart_name, length: { maximum: 10 }
  validates :description, :features, length: { maximum: 1200 }

  belongs_to :category

  has_many :line_items
  has_many :orders, through: :line_items
  has_many :accessories

  has_one_attached :mobile_image
  has_one_attached :tablet_image
  has_one_attached :desktop_image
  has_one_attached :category_mobile_image
  has_one_attached :category_tablet_image
  has_one_attached :category_desktop_image
  has_one_attached :cart_image
  has_one_attached :also_like_mobile_image
  has_one_attached :also_like_tablet_image
  has_one_attached :also_like_desktop_image

  has_many_attached :mobile_gallery_images
  has_many_attached :tablet_gallery_images
  has_many_attached :desktop_gallery_images
end

