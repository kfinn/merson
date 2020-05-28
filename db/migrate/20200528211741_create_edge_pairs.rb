class CreateEdgePairs < ActiveRecord::Migration[6.0]
  def change
    create_table :edge_pairs do |t|
      t.timestamps
    end
  end
end
