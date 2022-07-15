import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';
import {ScatterplotLayer} from '@deck.gl/layers';


export default function Play(data) {
    const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoia2V2aW53NDE1IiwiYSI6ImNsNWhkNnFkOTA2dmQza28yenRrcG8ydTYifQ.7qfnsMUxHQmvZwaPeLP3xg';



    return (
  <DeckGL
    initialViewState={{longitude: -122.45, latitude: 37.78, zoom: 12}}
    controller={true}
    layers={[new ScatterplotLayer({data})]}
  >
    <StaticMap
      mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
  </DeckGL>)
};
