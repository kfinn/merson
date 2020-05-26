class CreateCityRegions < ActiveRecord::Migration[6.0]
  def change
    create_table :city_regions do |t|
      t.belongs_to :city, foreign_key: true, null: false
      t.boolean :shield, null: false, default: false
      t.timestamps
    end

    add_reference :edges, :city_region, foreign_key: true
  end
end
