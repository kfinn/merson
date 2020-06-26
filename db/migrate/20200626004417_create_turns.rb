class CreateTurns < ActiveRecord::Migration[6.0]
  def change
    create_table :turns do |t|
      t.belongs_to :player, foreign_key: true, null: false
      t.belongs_to :tile, foreign_key: true, null: false, index: { unique: true }
      t.datetime :tile_played_at
      t.datetime :meeple_played_at
      t.datetime :ended_at

      t.timestamps
    end
  end
end
