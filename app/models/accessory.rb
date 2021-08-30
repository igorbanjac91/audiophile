class Accessory < ApplicationRecord

validates :quantity, :name, presence: true

belongs_to :product
end
