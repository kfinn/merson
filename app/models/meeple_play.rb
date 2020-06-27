class MeeplePlay < ApplicationRecord
    include GameChanging

    MEEPLES_PER_PLAYER = 8

    belongs_to :player
    has_one :game, through: :player

    belongs_to :tile_feature, polymorphic: true

    validates :meeple_index, uniqueness: { scope: :player_id }, inclusion: { in: 0..7}

    before_validation :pick_meeple_index

    def pick_meeple_index
        self.meeple_index = ((0..(MEEPLES_PER_PLAYER - 1)).to_a - player.meeple_plays.map(&:meeple_index)).first
    end

    def field_region=(field_region)
        self.tile_feature = field_region
        self.tile_feature_type = field_region.class_name
    end
end
