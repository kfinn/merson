class CreateFieldRegions < ActiveRecord::Migration[6.0]
  def change
    create_table :field_regions do |t|
      t.belongs_to :field, foreign_key: true, null: false
      t.timestamps
    end
  end
end
