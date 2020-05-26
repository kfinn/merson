class AddGameIdToTiles < ActiveRecord::Migration[6.0]
  def change
    execute <<~SQL
      TRUNCATE tiles CASCADE;
    SQL
    change_table :tiles do |t|
      t.belongs_to :game, null: false, foreign_key: true
      t.integer :ordering, null: false
      t.integer :x
      t.integer :y
    end
    add_index :tiles, [:x, :y, :game_id], unique: true
  end
end
