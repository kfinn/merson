class FieldRegionMeeplePlay
    include ActiveModel::Model

    attr_accessor :player, :field_region
    delegate :game, :current_turn, to: :player
    delegate :field, to: :field_region

    validate :player_must_be_able_to_play_meeple
    validate :field_must_be_unoccupied

    def save!
        game.transaction do
            raise ActiveRecord::RecordInvalid.new(self) unless valid?

            player.meeple_plays.create! tile_feature: field_region
            current_turn.update! meeple_played_at: Time.zone.now
            game.end_turn! if current_turn.completed?
        end
    end

    private

    def player_must_be_able_to_play_meeple
        errors[:base] << 'player cannot play meeple' unless player.can_play_meeple_on_tile_feature? field_region
    end

    def field_must_be_unoccupied
        errors[:field_region] << 'field already occupied' if field.occupied?
    end
end
