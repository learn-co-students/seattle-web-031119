class RemoveBookIdColumnFromAuthors < ActiveRecord::Migration[5.2]
  def change
    remove_column :authors, :book_id, :string
  end
end
