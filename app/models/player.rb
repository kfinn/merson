class Player < ApplicationRecord
    belongs_to :user
    belongs_to :game

    def name
        super || "Player #{id}"
    end
end
