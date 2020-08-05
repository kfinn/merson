class EdgePair < ApplicationRecord
    has_many :edge_pair_members
    has_many :edges, through: :edge_pair_members

    has_one :older_edge_pair_member, -> { older }, class_name: 'EdgePairMember'
    has_one :older_edge, through: :older_edge_pair_member, source: :edge

    has_one :newer_edge_pair_member, -> { newer }, class_name: 'EdgePairMember'
    has_one :newer_edge, through: :newer_edge_pair_member, source: :edge

    validates :older_edge, :newer_edge, presence: true
    validate :edges_must_match

    after_create :merge_edge_features!

    private

    def edges_must_match
        errors[:base] << 'edges must match' unless older_edge.type == newer_edge.type
    end

    def merge_edge_features!
        older_edge.merge_edge_features! newer_edge
    end
end
