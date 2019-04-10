class CreateTableAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :table_authors do |t|
      t.integer :book_id
      t.string :name
    end
  end
end
