class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :key, null: false, index: true
      t.datetime :started_at
      t.timestamps
    end
  end
end
