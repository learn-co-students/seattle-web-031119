class CreateJoinTablePurchasesBrews < ActiveRecord::Migration[5.2]
  def change
    create_join_table :purchases, :brews do |t|
      # t.index [:purchase_id, :brew_id]
      # t.index [:brew_id, :purchase_id]
    end
  end
end
