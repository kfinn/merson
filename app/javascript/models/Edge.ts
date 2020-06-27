import { Orientation } from "./Orientation";
import { FieldRegion, CityRegion, RoadSegment } from "../components/TileSvg";

export interface Edge {
    id: number
    type: EdgeType
    orientation: Orientation
}

export interface RoadEdge extends Edge {
    type: EdgeType.ROAD_EDGE
    leftFieldRegion: FieldRegion
    rightFieldRegion: FieldRegion
    roadSegment: RoadSegment
}

export interface FieldEdge extends Edge {
    type: EdgeType.FIELD_EDGE
    fieldRegion: FieldRegion
}

export interface CityEdge extends Edge {
    type: EdgeType.CITY_EDGE
    cityRegion: CityRegion
}

enum EdgeType {
    CITY_EDGE = 'CityEdge',
    FIELD_EDGE = 'FieldEdge',
    ROAD_EDGE = 'RoadEdge'
}
