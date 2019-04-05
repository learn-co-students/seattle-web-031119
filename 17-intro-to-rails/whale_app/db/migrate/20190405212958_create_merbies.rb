class CreateMerbies < ActiveRecord::Migration[5.2]
  def change
    create_table :merbies do |t|
      t.string :species
      t.integer :kill_count
      t.integer :length
      t.boolean :alive

      t.timestamps
    end
  end
end
