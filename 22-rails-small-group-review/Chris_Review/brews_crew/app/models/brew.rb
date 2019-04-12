class Brew < ApplicationRecord
    has_many :purchases

    validates :blend_name, presence: true

    def self.strongest
        Brew.all.max_by{ |b| b.strength }
    end

end
