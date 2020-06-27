class RoadSegment < ApplicationRecord
    has_many :edges
    belongs_to :road

    has_one :arbitrary_edge, class_name: 'Edge'
    has_one :tile, through: :arbitrary_edge
    has_one :game, through: :tile

    has_one :meeple_play, as: :tile_feature

    before_validation :generate_road, on: :create

    validate :must_not_have_more_than_two_edges

    def self.with_unoccupied_road
        where(Arel.sql(<<~SQL.squish))
            NOT EXISTS (
                SELECT connected_road_segments.id FROM road_segments connected_road_segments
                WHERE connected_road_segments.road_id = road_segments.road_id
                AND EXISTS (
                    SELECT meeple_plays.id
                    FROM meeple_plays
                    WHERE meeple_plays.tile_feature_id = connected_road_segments.id
                    AND meeple_plays.tile_feature_type = '#{name}'
                )
            )
        SQL
    end

    def has_meeple_play?
        meeple_play.present?
    end

    def board_feature
        road
    end

    private

    def generate_road
        self.road ||= Road.new
    end

    def must_not_have_more_than_two_edges
        errors[:edges] << 'cannot have more than two edges' unless edges.size <= 2
    end
end
