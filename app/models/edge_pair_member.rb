class EdgePairMember < ApplicationRecord
    belongs_to :edge_pair
    belongs_to :edge

    scope :older, -> { where(older: true) }
    scope :newer, -> { where(older: false) }
end
