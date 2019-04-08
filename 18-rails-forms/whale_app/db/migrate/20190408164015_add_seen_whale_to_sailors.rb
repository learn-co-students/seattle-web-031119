class AddSeenWhaleToSailors < ActiveRecord::Migration[5.2]
  def change
    add_column :sailors, :seen_whale, :boolean
  end
end
