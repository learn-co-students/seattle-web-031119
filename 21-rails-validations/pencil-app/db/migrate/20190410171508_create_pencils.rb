class CreatePencils < ActiveRecord::Migration[5.2]
  def change
    create_table :pencils do |t|
      t.string :color
      t.float :lead_size
      t.boolean :favorite
      t.string :owner_name

      t.timestamps
    end
  end
end
