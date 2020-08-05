json.partial! 'api/v1/tile_features/tile_feature', tile_feature: road_segment

json.road { json.id road_segment.road.id }
