class AddOrderingToPlayers < ActiveRecord::Migration[6.0]
  def change
    add_column :players, :ordering, :integer
    add_index :players, [:game_id, :ordering], unique: true
  end
end
