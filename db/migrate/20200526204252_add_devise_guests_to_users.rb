class AddDeviseGuestsToUsers < ActiveRecord::Migration[6.0]
  def self.up
    change_table(:users) do |t|
      ## Database authenticatable
      t.boolean :guest, :default => false
    end

  end

  def self.down
    remove_column :users, :guest, :boolean, default: false
  end
end
