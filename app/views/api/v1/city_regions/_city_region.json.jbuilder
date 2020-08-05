json.partial! 'api/v1/tile_features/tile_feature', tile_feature: city_region

json.city { json.id city_region.city.id }
