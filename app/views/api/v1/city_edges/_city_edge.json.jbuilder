json.partial! 'api/v1/edges/edge', edge: city_edge

json.city_region do
    json.partial! city_edge.city_region
end
