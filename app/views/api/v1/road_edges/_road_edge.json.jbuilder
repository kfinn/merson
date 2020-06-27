json.partial! 'api/v1/edges/edge', edge: road_edge

json.left_field_region do
    json.partial! road_edge.left_field_region
end

json.road_segment do
    json.partial! road_edge.road_segment
end

json.right_field_region do
    json.partial! road_edge.right_field_region
end
