class CurrentTurnEnd
    include ActiveModel::Model
    attr_accessor :player
    delegate :current_turn, to: :player
    delegate :game, to: :current_turn

    validates :current_turn, presence: true
    validate :player_must_be_able_to_end_current_turn

    def save!
        player.transaction do
            raise ActiveRecord::RecordInvalid.new(self) unless valid?

            game.end_turn!
        end
    end

    private

    def player_must_be_able_to_end_current_turn
        errors[:player] << 'cannot end current turn' unless player.can_end_turn?
    end
end
