class Edge < ApplicationRecord
    belongs_to :tile
    belongs_to_active_hash :orientation
end
