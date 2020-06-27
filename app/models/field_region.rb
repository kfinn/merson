class FieldRegion < ApplicationRecord
    has_many :edge_field_regions
    has_many :edges, through: :edge_field_regions
    belongs_to :field

    has_one :arbitrary_edge_field_region, class_name: 'EdgeFieldRegion'
    has_one :arbitrary_edge, through: :arbitrary_edge_field_region, source: :edge
    has_one :tile, through: :arbitrary_edge
    has_one :game, through: :tile

    has_one :meeple_play, as: :tile_feature, inverse_of: :tile_feature

    before_validation :generate_field, on: :create

    delegate :occupied?, to: :field, prefix: true

    def self.with_unoccupied_field
        where(Arel.sql(<<~SQL.squish))
            NOT EXISTS (
                SELECT connected_field_regions.id FROM field_regions connected_field_regions
                WHERE connected_field_regions.field_id = field_regions.field_id
                AND EXISTS (
                    SELECT meeple_plays.id
                    FROM meeple_plays
                    WHERE meeple_plays.tile_feature_id = connected_field_regions.id
                    AND meeple_plays.tile_feature_type = '#{name}'
                )
            )
        SQL
    end

    def self.with_meeple_play
        where id: MeeplePlay.where(tile_feature_type: name).select(:tile_feature_id)
    end

    def has_meeple_play?
        meeple_play.present?
    end

    private

    def generate_field
        self.field ||= Field.new
    end
end
