class CreateEdgePairMembers < ActiveRecord::Migration[6.0]
  def change
    create_table :edge_pair_members do |t|
      t.belongs_to :edge_pair, foreign_key: true
      t.belongs_to :edge, foreign_key: true, index: { unique: true }
      t.boolean :older, null: false

      t.timestamps
    end

    add_index :edge_pair_members, [:edge_pair_id, :older], unique: true
  end
end
