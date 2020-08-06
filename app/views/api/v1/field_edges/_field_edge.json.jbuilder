json.partial! 'api/v1/edges/edge', edge: field_edge

json.field_region do
    json.partial! field_edge.singular_field_region
end
