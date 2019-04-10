class CreateTableBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :table_books do |t|
      t.integer :author_id
      t.string :title
      t.string :snippet
    end
  end
end
