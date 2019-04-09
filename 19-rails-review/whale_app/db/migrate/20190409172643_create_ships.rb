class CreateShips < ActiveRecord::Migration[5.2]
  def change
    create_table :ships do |t|
      t.integer :length
      t.integer :width
      t.string :material

      t.timestamps
    end
  end
end
