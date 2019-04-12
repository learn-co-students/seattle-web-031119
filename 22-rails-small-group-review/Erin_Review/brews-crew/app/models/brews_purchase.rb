class BrewsPurchase < ApplicationRecord
  belongs_to :brew
  belongs_to :purchase
end
