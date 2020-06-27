json.(
    edge,
    :id,
    :type,
)

json.orientation do
    json.(edge.orientation, :id)
end
