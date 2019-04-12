class Purchase < ApplicationRecord
    belongs_to :brew
    # a purchase should have a size, which should be small, medium, or large
end
