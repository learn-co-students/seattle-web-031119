class ChangeAuthorToAuthorId < ActiveRecord::Migration[5.2]
  def up
    change_column :books, :author, :integer
    rename_column :books, :author, :author_id
  end

  def down
    rename_column :books, :author_id, :author
    change_column :books, :author, :string
  end
end
