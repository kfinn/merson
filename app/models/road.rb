class Road < ApplicationRecord
    has_many :road_segments

    has_many :meeple_plays, through: :road_segments

    def self.completed
        where.not id: RoadSegment.incomplete.select(:road_id)
    end

    def self.with_meeple_plays(meeple_plays = MeeplePlay.all)
        where(id: RoadSegment.with_meeple_plays(meeple_plays).select(:road_id))
    end

    def occupied?
        road_segments.any?(&:has_meeple_play?)
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

            meeple_plays.each(&:destroy!)
        end
    end

    def point_value
        road_segments.size
    end

    def merge!(road)
        return if self == road
        transaction do
            road_segments.find_each do |road_segment|
                road_segment.update! road: road
            end
            destroy!
        end
    end
end
