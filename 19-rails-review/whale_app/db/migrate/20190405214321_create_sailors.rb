class CreateSailors < ActiveRecord::Migration[5.2]
  def change
    create_table :sailors do |t|
      t.string :name
      t.boolean :peg_leg
      t.integer :kill_count

      t.timestamps
    end
  end
end
