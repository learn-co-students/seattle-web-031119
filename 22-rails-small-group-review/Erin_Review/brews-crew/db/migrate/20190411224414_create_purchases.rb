class CreatePurchases < ActiveRecord::Migration[5.2]
  def change
    create_table :purchases do |t|
      t.integer :customer_id
      t.float :price

      t.timestamps
    end
  end
end
