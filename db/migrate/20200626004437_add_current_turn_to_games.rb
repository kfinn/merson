class AddCurrentTurnToGames < ActiveRecord::Migration[6.0]
  def change
    add_reference :games, :turn, foreign_key: true
  end
end
