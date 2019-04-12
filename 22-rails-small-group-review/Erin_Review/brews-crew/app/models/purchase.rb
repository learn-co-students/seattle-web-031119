class Purchase < ApplicationRecord
  has_many :brews_purchases
  has_many :brews, through: :brews_purchases
  belongs_to :customer

  validates :size, inclusion: {in: ["small", "medium", "large"]} 
end
