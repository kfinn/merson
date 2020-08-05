import React from "react";
import { TileFeature, TileFeatureType } from "../../TileSvg";

export default function DebugTileFeatureId({ position: { x, y }, tileFeature }: { position: { x: number, y: number }, tileFeature: TileFeature }) {
    if (true) {
        return null;
    }

    const text = (tileFeature) => {
        switch(tileFeature.type) {
            case TileFeatureType.CITY_REGION:
                return `c${tileFeature.city.id}`
            case TileFeatureType.FIELD_REGION:
                return `f${tileFeature.field.id}`
            case TileFeatureType.ROAD_SEGMENT:
                return `r${tileFeature.road.id}`
        }
    }

    return <text x={x} y={y} style={{ fontSize: '5px' }}>{text(tileFeature)}</text>
}
