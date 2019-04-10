class Pencil < ApplicationRecord
   validates :owner_name, presence: true
   validates :lead_size, numericality: {greater_than_or_equal_to: 0.25, less_than_or_equal_to: 1.1 }
   validates :color, uniqueness: true, presence: true
end
