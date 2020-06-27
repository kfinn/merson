class CreateMeeplePlays < ActiveRecord::Migration[6.0]
  def change
    create_table :meeple_plays do |t|
      t.belongs_to :player, null: false, foreign_key: true
      t.belongs_to :tile_feature, null: false, polymorphic: true, index: { unique: true }
      t.integer :meeple_index

      t.timestamps
    end

    add_index :meeple_plays, [:player_id, :meeple_index], unique: true
  end
end
