class CreateEdgeFieldRegions < ActiveRecord::Migration[6.0]
  def change
    create_table :edge_field_regions do |t|
      t.belongs_to :edge, foreign_key: true, null: false
      t.belongs_to :field_region, foreign_key: true, null: false
      t.boolean :left_of_road

      t.timestamps
    end

    add_index :edge_field_regions, [:edge_id, :left_of_road], unique: true
  end
end
