class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :name
      t.date :date_made
      t.string :description

      t.timestamps
    end
  end
end
