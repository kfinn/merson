class City < ApplicationRecord
    has_many :city_regions
    has_many :edges, through: :city_regions
    has_many :meeple_plays, through: :city_regions

    def self.completed
        where.not id: CityRegion.incomplete.select(:city_id)
    end

    def self.with_meeple_plays(meeple_plays = MeeplePlay.all)
        where(id: CityRegion.with_meeple_plays(meeple_plays).select(:city_id))
    end

    def occupied?
        city_regions.any?(&:has_meeple_play?)
    end

    def score!(scale: 1)
        transaction do
            meeple_counts_by_player = meeple_plays.counts_by_player
            max_meeple_plays_count = meeple_counts_by_player.max_by(&:meeple_plays_count).meeple_plays_count
            meeple_counts_with_max_count = meeple_counts_by_player.select { |count_by_player| count_by_player.meeple_plays_count == max_meeple_plays_count }
            player_ids_with_max_count = meeple_counts_with_max_count.map(&:player_id)

            Player.where(id: player_ids_with_max_count).each do |player|
                player.earn_points! (point_value * scale)
            end

            meeple_plays.each(&:destroy!)
        end
    end

    def point_value
        @point_value ||= city_regions.total_point_value
    end

    def merge!(city)
        return if self == city
        transaction do
            city_regions.find_each do |city_region|
                city_region.update! city: city
            end
            destroy!
        end
    end
end
