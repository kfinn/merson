class TileFeatureMeeplePlay
    include ActiveModel::Model

    attr_accessor :player, :tile_feature
    delegate :game, :current_turn, to: :player
    delegate :board_feature, to: :tile_feature

    validate :player_must_be_able_to_play_meeple
    validate :board_feature_must_be_unoccupied

    def save!
        game.transaction do
            raise ActiveRecord::RecordInvalid.new(self) unless valid?

            player.meeple_plays.create! tile_feature: tile_feature
            current_turn.update! meeple_played_at: Time.zone.now
            game.end_turn! if current_turn.completed?
        end
    end

    private

    def player_must_be_able_to_play_meeple
        errors[:base] << 'player cannot play meeple' unless player.can_play_meeple_on_tile_feature? tile_feature
    end

    def board_feature_must_be_unoccupied
        errors[:tile_feature] << 'board_feature already occupied' if board_feature.occupied?
    end
end
