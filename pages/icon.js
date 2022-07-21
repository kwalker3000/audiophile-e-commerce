import { NextPage } from 'next'
import StaticMap from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useState } from 'react'
import {
  GeoJsonLayer,
  IconLayer,
  ArcLayer,
  ScatterplotLayer,
  LineLayer,
} from '@deck.gl/layers'
import DeckGL from 'deck.gl'

import { markers } from '../lib/markers'

const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoia2V2aW53NDE1IiwiYSI6ImNsNWhkNnFkOTA2dmQza28yenRrcG8ydTYifQ.7qfnsMUxHQmvZwaPeLP3xg'

const ICON_MAPPING = {
  marker: { x: 0, y: 0, width: 128, height: 275, mask: true },
}

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [-122.4, 37.8] },
    },
  ],
}

const Test = () => {
  let data = markers.map((marker) => ({
    name: marker.city,
    coordinates: [marker.longCoord, marker.latCoord],
  }))

  const dataLine = [
    { sourcePosition: [126.978, 37.5665], targetPosition: [4.9041, 52.3676] },
  ]

  /**
   * Data format:
   * [
   *   {name: 'Colma (COLM)', address: '365 D Street, Colma CA 94014', exits: 4214, coordinates: [-122.466233, 37.684638]},
   *   ...
   * ]
   */

  let data3 = [
    {
      from: {
        name: '19th St. Oakland (19TH)',
        coordinates: [-122.269029, 37.80787],
      },
      to: {
        name: '12th St. Oakland City Center (12TH)',
        coordinates: [-122.271604, 37.803664],
      },
    },
  ]

  /**
   * Data format:
   * [
   *   {
   *     inbound: 72633,
   *     outbound: 74735,
   *     from: {
   *       name: '19th St. Oakland (19TH)',
   *       coordinates: [-122.269029, 37.80787]
   *     },
   *     to: {
   *       name: '12th St. Oakland City Center (12TH)',
   *       coordinates: [-122.271604, 37.803664]
   *   },
   *   ...
   * ]
   */

  // const data = markers
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 35.681236,
    longitude: 139.767125,
    zoom: 1.2,
  })

  return (
    <DeckGL
      width={'100vw'}
      height={'50vh'}
      controller
      /* layers={layer} */
      viewState={viewport}
      onViewStateChange={(viewState) => setViewport(viewState.viewState)}
    >
      <ScatterplotLayer
        id="scatterplot-layer"
        data={data}
        pickable={true}
        opacity={0.8}
        stroked={true}
        filled={true}
        radiusScale={6}
        radiusMinPixels={5}
        radiusMaxPixels={100}
        lineWidthMinPixels={3}
        getPosition={(d) => d.coordinates}
        getRadius={(d) => Math.sqrt(d.exits)}
        getFillColor={(d) => [0, 0, 0]}
        getLineColor={(d) => [140, 80, 200, 100]}
      />
      <ArcLayer
        id="arc-layer"
        data={dataLine}
        greatCircle={true}
        getHeight={0}
        getWidth={2.5}
      />
      <IconLayer
        id="icon-layer"
        data={data}
        pickable={true}
        // iconAtlas and iconMapping are required
        // getIcon: return a string
        iconAtlas="https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png"
        iconMapping={ICON_MAPPING}
        getIcon={(d) => 'marker'}
        sizeScale={15}
        getPosition={(d) => d.coordinates}
        getSize={(d) => 4}
        getColor={(d) => [255, 140, 0]}
      />
      <StaticMap
        width={100}
        height={100}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  )
}
export default Test
