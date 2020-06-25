import { Orientation } from "./Orientation";

export interface Edge {
    id: number
    type: EdgeType
    orientation: Orientation
}

export interface RoadEdge extends Edge {
    type: EdgeType.ROAD_EDGE
    leftFieldRegion: { id: number }
    rightFieldRegion: { id: number }
}

enum EdgeType {
    CITY_EDGE = 'CityEdge',
    FIELD_EDGE = 'FieldEdge',
    ROAD_EDGE = 'RoadEdge'
}
