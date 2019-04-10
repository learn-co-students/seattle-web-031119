class CreateTests < ActiveRecord::Migration[5.2]
  def change
    create_table :tests do |t|
      t.string :student_first_name
      t.string :student_last_name
      t.integer :grade
      t.integer :minutes_taken

      t.timestamps
    end
  end
end
