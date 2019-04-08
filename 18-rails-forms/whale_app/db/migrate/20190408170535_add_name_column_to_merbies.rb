class AddNameColumnToMerbies < ActiveRecord::Migration[5.2]
  def change
    add_column :merbies, :name, :string
  end
end
