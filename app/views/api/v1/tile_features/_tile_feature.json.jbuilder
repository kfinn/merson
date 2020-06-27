json.(tile_feature, :id)
json.type tile_feature.class.name

if tile_feature.has_meeple_play?
    json.meeple_play do
        json.partial! tile_feature.meeple_play
    end
end
