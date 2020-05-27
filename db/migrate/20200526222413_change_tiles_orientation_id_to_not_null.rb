class ChangeTilesOrientationIdToNotNull < ActiveRecord::Migration[6.0]
  def change
    execute <<~SQL
      UPDATE tiles SET orientation_id = 'north' WHERE orientation_id IS NULL
    SQL
    change_column :tiles, :orientation_id, :string, default: 'north', null: false
  end
end
