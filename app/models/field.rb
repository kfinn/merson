class Field < ApplicationRecord
    has_many :field_regions
    has_many :meeple_plays, through: :field_regions
    has_many :cities, -> { distinct }, through: :field_regions

    def self.with_meeple_plays(meeple_plays = MeeplePlay.all)
        where(id: FieldRegion.with_meeple_plays(meeple_plays).select(:field_id))
    end

    def occupied?
        field_regions.any?(&:has_meeple_play?)
    end

    def score!
        transaction do
            meeple_counts_by_player = meeple_plays.counts_by_player
            max_meeple_plays_count = meeple_counts_by_player.max_by(&:meeple_plays_count).meeple_plays_count
            meeple_counts_with_max_count = meeple_counts_by_player.select { |count_by_player| count_by_player.meeple_plays_count == max_meeple_plays_count }
            player_ids_with_max_count = meeple_counts_with_max_count.map(&:player_id)

            Player.where(id: player_ids_with_max_count).each do |player|
                player.earn_points! point_value
            end
        end
    end

    def merge!(field)
        return if self == field
        transaction do
            field_regions.find_each do |field_region|
                field_region.update! field: field
            end
            destroy!
        end
    end

    def point_value
        @point_value ||= cities.completed.size * 3
    end
end
