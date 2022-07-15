import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import StaticMap from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoia2V2aW53NDE1IiwiYSI6ImNsNWhkNnFkOTA2dmQza28yenRrcG8ydTYifQ.7qfnsMUxHQmvZwaPeLP3xg';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

export default function Deck({data}) {
  // const layers = [
  //   new LineLayer({id: 'line-layer', data})
  // ];

  return (
<DeckGL
 width={"100%"}
            height={"100%"}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
  <StaticMap
    mapStyle="mapbox://styles/mapbox/dark-v9"
    mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
<LineLayer id="line-layer" data={data} />
    </DeckGL>
  )
}
