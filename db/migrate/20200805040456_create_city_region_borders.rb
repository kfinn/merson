class CreateCityRegionBorders < ActiveRecord::Migration[6.0]
  def change
    create_table :city_region_borders do |t|
      t.belongs_to :city_region, null: false, foreign_key: true
      t.belongs_to :field_region, null: false, foreign_key: true

      t.timestamps
    end
  end
end
