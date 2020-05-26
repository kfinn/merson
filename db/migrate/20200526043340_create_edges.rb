class CreateEdges < ActiveRecord::Migration[6.0]
  def change
    create_table :edges do |t|
      t.string :type, null: false, index: true
      t.belongs_to :tile, foreign_key: true, null: false
      t.string :orientation_id, null: false, index: true

      t.timestamps
    end

    add_index :edges, [:tile_id, :orientation_id], unique: true
  end
end
