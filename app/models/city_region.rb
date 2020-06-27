class CityRegion < ApplicationRecord
    has_many :edges
    belongs_to :city

    has_one :arbitrary_edge, class_name: 'Edge'
    has_one :tile, through: :arbitrary_edge
    has_one :game, through: :tile

    has_one :meeple_play, as: :tile_feature

    before_validation :generate_city, on: :create

    def self.with_unoccupied_city
        where(Arel.sql(<<~SQL.squish))
            NOT EXISTS (
                SELECT connected_city_regions.id FROM city_regions connected_city_regions
                WHERE connected_city_regions.city_id = city_regions.city_id
                AND EXISTS (
                    SELECT meeple_plays.id
                    FROM meeple_plays
                    WHERE meeple_plays.tile_feature_id = connected_city_regions.id
                    AND meeple_plays.tile_feature_type = '#{name}'
                )
            )
        SQL
    end

    def board_feature
        city
    end

    def has_meeple_play?
        meeple_play.present?
    end

    private

    def generate_city
        self.city ||= City.new
    end
end
