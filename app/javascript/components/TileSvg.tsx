import React from 'react';
import { Edge, RoadEdge } from '../models/Edge';
import { Orientation } from '../models/Orientation';
import CityWithThreeRoadsSvg from './tile_variants/CityWithThreeRoadsSvg';
import CornerRoadSvg from './tile_variants/CornerRoadSvg';
import FourRoadsSvg from './tile_variants/FourRoadsSvg';
import NorthernCitySvg from './tile_variants/NorthernCitySvg';
import NorthernCityWithSoutheastCornerRoadSvg from './tile_variants/NorthernCityWithSoutheastCornerRoadSvg';
import NorthernCityWithSouthwestCornerRoadSvg from './tile_variants/NorthernCityWithSouthwestCornerRoadSvg';
import NorthernCityWithStraightRoadSvg from './tile_variants/NorthernCityWithStraightRoadSvg';
import SingleAllSidesCityWithShieldSvg from './tile_variants/SingleAllSidesCityWithShieldSvg';
import SingleEastWestCitySvg from './tile_variants/SingleEastWestCitySvg';
import SingleEastWestCityWithShieldSvg from './tile_variants/SingleEastWestCityWithShieldSvg';
import SingleNorthEastCitySvg from './tile_variants/SingleNorthEastCitySvg';
import SingleNorthEastCityWithCornerRoadSvg from './tile_variants/SingleNorthEastCityWithCornerRoadSvg';
import SingleNorthEastCityWithShieldAndCornerRoadSvg from './tile_variants/SingleNorthEastCityWithShieldAndCornerRoadSvg';
import SingleNorthEastCityWithShieldSvg from './tile_variants/SingleNorthEastCityWithShieldSvg';
import SingleWestNorthEastCitySvg from './tile_variants/SingleWestNorthEastCitySvg';
import SingleWestNorthEastCityWithRoadSvg from './tile_variants/SingleWestNorthEastCityWithRoadSvg';
import SingleWestNorthEastCityWithShieldAndRoadSvg from './tile_variants/SingleWestNorthEastCityWithShieldAndRoadSvg';
import SingleWestNorthEastCityWithShieldSvg from './tile_variants/SingleWestNorthEastCityWithShieldSvg';
import StraightRoadSvg from './tile_variants/StraightRoadSvg';
import ThreeRoadsSvg from './tile_variants/ThreeRoadsSvg';
import TwoNorthEastCitiesSvg from './tile_variants/TwoNorthEastCitiesSvg';
import TwoNorthSouthCitiesSvg from './tile_variants/TwoNorthSouthCitiesSvg';

export interface Tile {
    id: number
    tileVariant: TileVariant
    orientation: Orientation
    fieldRegions: FieldRegion[]
    cityRegions: CityRegion[]
    roadSegments: RoadSegment[]
}

interface TileVariant {
    id: TileVariantId
}

enum TileVariantId {
    NORTHERN_CITY = 'northern_city',
    SINGLE_EAST_WEST_CITY = 'single_east_west_city',
    SINGLE_NORTH_EAST_CITY = 'single_north_east_city',
    TWO_NORTH_SOUTH_CITIES = 'two_north_south_cities',
    TWO_NORTH_EAST_CITIES = 'two_north_east_cities',
    SINGLE_EAST_WEST_CITY_WITH_SHIELD = 'single_east_west_city_with_shield',
    SINGLE_NORTH_EAST_CITY_WITH_SHIELD = 'single_north_east_city_with_shield',
    SINGLE_WEST_NORTH_EAST_CITY = 'single_west_north_east_city',
    SINGLE_WEST_NORTH_EAST_CITY_WITH_SHIELD = 'single_west_north_east_city_with_shield',
    SINGLE_ALL_SIDES_CITY_WITH_SHIELD = 'single_all_sides_city_with_shield',
    STRAIGHT_ROAD = 'straight_road',
    CORNER_ROAD = 'corner_road',
    NORTHERN_CITY_WITH_STRAIGHT_ROAD = 'northern_city_with_straight_road',
    NORTHERN_CITY_WITH_SOUTHWEST_CORNER_ROAD = 'northern_city_with_southwest_corner_road',
    NORTHERN_CITY_WITH_SOUTHEAST_CORNER_ROAD = 'northern_city_with_southeast_corner_road',
    SINGLE_WEST_NORTH_EAST_CITY_WITH_ROAD = 'single_west_north_east_city_with_road',
    SINGLE_WEST_NORTH_EAST_CITY_WITH_SHIELD_AND_ROAD = 'single_west_north_east_city_with_shield_and_road',
    SINGLE_NORTH_EAST_CITY_WITH_CORNER_ROAD = 'single_north_east_city_with_corner_road',
    SINGLE_NORTH_EAST_CITY_WITH_SHIELD_AND_CORNER_ROAD = 'single_north_east_city_with_shield_and_corner_road',
    THREE_ROADS = 'three_roads',
    CITY_WITH_THREE_ROADS = 'city_with_three_roads',
    FOUR_ROADS = 'four_roads',
}

export interface FieldRegion {
    id: number
    edges: Edge[]
}

export interface CityRegion {
    id: number
    edges: Edge[]
}

export interface RoadSegment {
    id: number
    edges: RoadEdge[]
}

const TILE_VARIANTS_BY_ID = {
    northern_city: NorthernCitySvg,
    single_east_west_city: SingleEastWestCitySvg,
    single_north_east_city: SingleNorthEastCitySvg,
    two_north_south_cities: TwoNorthSouthCitiesSvg,
    two_north_east_cities: TwoNorthEastCitiesSvg,
    single_east_west_city_with_shield: SingleEastWestCityWithShieldSvg,
    single_north_east_city_with_shield: SingleNorthEastCityWithShieldSvg,
    single_west_north_east_city: SingleWestNorthEastCitySvg,
    single_west_north_east_city_with_shield: SingleWestNorthEastCityWithShieldSvg,
    single_all_sides_city_with_shield: SingleAllSidesCityWithShieldSvg,
    straight_road: StraightRoadSvg,
    corner_road: CornerRoadSvg,
    northern_city_with_straight_road: NorthernCityWithStraightRoadSvg,
    northern_city_with_southwest_corner_road: NorthernCityWithSouthwestCornerRoadSvg,
    northern_city_with_southeast_corner_road: NorthernCityWithSoutheastCornerRoadSvg,
    single_west_north_east_city_with_road: SingleWestNorthEastCityWithRoadSvg,
    single_west_north_east_city_with_shield_and_road: SingleWestNorthEastCityWithShieldAndRoadSvg,
    single_north_east_city_with_corner_road: SingleNorthEastCityWithCornerRoadSvg,
    single_north_east_city_with_shield_and_corner_road: SingleNorthEastCityWithShieldAndCornerRoadSvg,
    three_roads: ThreeRoadsSvg,
    city_with_three_roads: CityWithThreeRoadsSvg,
    four_roads: FourRoadsSvg,
}

export default function TileSvg({ tile }: { tile: Tile }) {
    const TileVariant = TILE_VARIANTS_BY_ID[tile.tileVariant.id]
    if (TileVariant) {
        return <TileVariant />
    }
}
