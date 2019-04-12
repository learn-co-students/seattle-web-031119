class Brew < ApplicationRecord
  has_many :brews_purchases
  has_many :purchases, through: :brews_purchases
end
