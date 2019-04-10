class CreateBooksAuthorsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :books_authors_tables do |t|
      t.string :books
      t.string :authors
    end
  end
end
