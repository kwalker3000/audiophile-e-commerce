import { NextPage } from "next";
import StaticMap from 'react-map-gl';
import {useState} from "react";
import {GeoJsonLayer} from "@deck.gl/layers";
import DeckGL from "deck.gl";

import markers from '../lib/markers'

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoia2V2aW53NDE1IiwiYSI6ImNsNWhkNnFkOTA2dmQza28yenRrcG8ydTYifQ.7qfnsMUxHQmvZwaPeLP3xg';

const geojson = {
  type: 'FeatureCollection',
  features: [
    {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
  ]
};

const Test = () => {
    const data = markers
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 35.681236,
        longitude: 139.767125,
        zoom: 2
    });

    const layer = new GeoJsonLayer({
        geojson,
        filled: true,
        stroked: true,
        pointType: 'circle',
	getPointRadius: 100,
	pointRadiusScale: 2000,
	pointRadiusMinPixels: 50,
        getLineWidth: 10,
        getLineColor: [255, 0, 0],
        getFillColor: () => {
            const rand = Math.floor(Math.random() * Math.floor(10))
            if (rand <= 5) {
                return [0, 0, 255]
            }
            return [255, 255, 255, 50]
        }
    })

    return (
        <DeckGL
            width={"100vw"}
            height={"100vh"}
            controller
            layers={[layer]}
            viewState={viewport}
            onViewStateChange={(viewState) => setViewport(viewState.viewState)}
        >
            <StaticMap
                width={100}
                height={100}
                mapStyle='mapbox://styles/mapbox/light-v10'
              mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            />
        </DeckGL>
    )
}
export default Test;
