class GameStart
    include ActiveModel::Model

    attr_accessor :game

    validate :game_must_not_be_started
    validate :game_must_have_enough_players

    def save!
        game.transaction do
            raise ActiveRecord::RecordInvalid.new(self) unless valid?

            ordered_players = game.players.shuffle
            ordered_players.each_with_index do |player, index|
                player.update! ordering: index
            end

            turn = ordered_players.first.turns.create!

            game.update!(
                started_at: Time.zone.now,
                turn: turn
            )
        end
    end

    private

    def game_must_not_be_started
        errors[:game] << 'must not be started' if game.started?
    end

    def game_must_have_enough_players
        errors[:game] << 'must have enough players' if game.players.size < 2
    end
end
