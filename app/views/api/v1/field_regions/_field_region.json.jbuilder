json.(field_region, :id)

if field_region.meeple_play.present?
    json.meeple_play do
        json.partial! field_region.meeple_play
    end
end
