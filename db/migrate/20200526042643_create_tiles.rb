class CreateTiles < ActiveRecord::Migration[6.0]
  def change
    create_table :tiles do |t|
      t.string :orientation_id, index: true
      t.string :tile_variant_id, index: true, null: false
      t.timestamps
    end
  end
end
