class Brew < ApplicationRecord
  # a brew name should be unique
  has_many :purchases

  validates( :blend_name, uniqueness: true, presence: true)
  validates :origin, presence: true
  validates :strength, presence: true
end
