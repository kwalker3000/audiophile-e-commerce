import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer, GeoJsonLayer} from '@deck.gl/layers';
import StaticMap from 'react-map-gl';

import MapNew from './MapNew';
import { markers } from '../../../lib/markers';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoia2V2aW53NDE1IiwiYSI6ImNsNWhkNnFkOTA2dmQza28yenRrcG8ydTYifQ.7qfnsMUxHQmvZwaPeLP3xg';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 145,
  latitude: 2,
  zoom: 1.8,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [126.9780, 37.5665], targetPosition: [151.2093, -33.8688]}
];

const geojson = {
        type: 'Feature',
        features: markers.map((marker) => ({
            geometry: {
                type: 'Point',
                coordinates: [
                    marker.latCoord,
                    marker.longCoord,
                ]
            }
        }))
    };




// DeckGL react component
export default function App() {
  const layers = [
      // new LineLayer({id: 'line-layer', data}),
      new GeoJsonLayer(
          {
              id: 'geojson-layer',
              geojson,
              filled: true,
              pointType: 'circle',
              getFillColor: [125, 100, 80, 255],
              getLineWidth: 10,
              getPointRadius: 100,
              pointRadiusScale: 2000,
              pointRadiusMinPixels: 50
          })
  ];
    
    //console.log(layers)

    return <DeckGL
             width={'600px'}
             height={'600px'}
      initialViewState={INITIAL_VIEW_STATE}
             controller={true}
             layers={[...layers]}>

      {/* <LineLayer id="line-layer" data={data} /> */}
             {/* <MapNew /> */}
             <StaticMap
               mapboxAccessToken={MAPBOX_ACCESS_TOKEN} 
	     	mapStyle="mapbox://styles/mapbox/light-v10" />
    </DeckGL>
}

//https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json
