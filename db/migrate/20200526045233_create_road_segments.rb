class CreateRoadSegments < ActiveRecord::Migration[6.0]
  def change
    create_table :road_segments do |t|
      t.belongs_to :road, foreign_key: true, null: false
      t.timestamps
    end

    add_reference :edges, :road_segment, foreign_key: true
  end
end
