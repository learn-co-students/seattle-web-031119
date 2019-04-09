class AddOceanColumnToMerbies < ActiveRecord::Migration[5.2]
  def change
    add_column :merbies, :ocean_name, :string
  end
end
