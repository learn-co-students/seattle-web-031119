class CreateJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :merbies, :sailors do |t|
      # t.index [:merby_id, :sailor_id]
      # t.index [:sailor_id, :merby_id]
    end
  end
end
