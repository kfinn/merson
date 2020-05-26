class CreateRoads < ActiveRecord::Migration[6.0]
  def change
    create_table :roads do |t|

      t.timestamps
    end
  end
end
