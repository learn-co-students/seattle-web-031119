class Book < ApplicationRecord
  # belong_to :author
  has_many :authors_books
  has_many :authors, through: :authors_books

end
