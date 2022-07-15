
import {useState} from "react";

import StaticMap from 'react-map-gl';
import { IconLayer, ArcLayer, ScatterplotLayer, } from "@deck.gl/layers";
import DeckGL from "deck.gl";

import 'mapbox-gl/dist/mapbox-gl.css';

import {markers} from '../../../lib/markers';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoia2V2aW53NDE1IiwiYSI6ImNsNWhkNnFkOTA2dmQza28yenRrcG8ydTYifQ.7qfnsMUxHQmvZwaPeLP3xg';

const ICON_MAPPING = {
  marker: {x: 0, y: 0, width: 128, height: 275, mask: true}
};


export const Map = () => {

    let data = markers.map(marker => (
        {
            name: marker.city,
            coordinates: [marker.longCoord, marker.latCoord]
        }
    ))

const dataLine = [
    {sourcePosition: [126.9780, 37.5665], targetPosition: [4.9041, 52.3676]}
];

    // const data = markers
    const [viewport, setViewport] = useState({
        // width: 400,
        // height: 400,
        latitude: 35.681236,
        longitude: 139.767125,
        zoom: 1.2
    });

    return (
        <DeckGL
            width={"90vw"}
            height={"50vh"}
            controller
            /* layers={layer} */
            viewState={viewport}
            onViewStateChange={(viewState) => setViewport(viewState.viewState)}
        >
          <ScatterplotLayer
            id='scatterplot-layer'
            data={data}
            pickable={true}
            opacity={0.8}
            stroked={true}
	    filled={true}
	    radiusScale={6}
	    radiusMinPixels={5}
	    radiusMaxPixels={100}
	    lineWidthMinPixels={3}
	    getPosition={d => d.coordinates}
	    getRadius={d => Math.sqrt(d.exits)}
	    getFillColor={d => [0, 0, 0]}
	    getLineColor={d => [140, 80, 200, 100]}
          />
          <ArcLayer
            id="arc-layer"
            data={dataLine}
            greatCircle={true}
            getHeight={0}
            getWidth={2.5} />
          <IconLayer
            id='icon-layer'
            data={data}
            pickable={true}
	    // iconAtlas and iconMapping are required
	   // getIcon: return a string
	   iconAtlas= 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png'
	    iconMapping={ICON_MAPPING}
	    getIcon={d => 'marker'}

	    sizeScale={15}
	    getPosition={d => d.coordinates}
	    getSize={d => 4}
	    getColor={d => [255, 140, 0]}

          />
            <StaticMap
                width={100}
                height={100}
                mapStyle='mapbox://styles/mapbox/light-v10'
              mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
            />
        </DeckGL>
    )
}
