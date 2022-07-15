
import * as React from 'react';
import * as turf from '@turf/turf'
//import Head from 'next/head';
import Map, {Marker} from 'react-map-gl';

import { markers } from '../../../lib/markers';
//import Deck from './Deck';
import MyDeck from './Example2'

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2V2aW53NDE1IiwiYSI6ImNsNWhkNnFkOTA2dmQza28yenRrcG8ydTYifQ.7qfnsMUxHQmvZwaPeLP3xg'; // Set your mapbox token here


export default function MapNew() {


    let points = markers.map((marker,index) => (
        <Marker
          key={index}
          longitude={marker.longCoord}
          latitude={marker.latCoord}
          color='red'/>
    ))

    let start = turf.point([126.9780, 37.5665]);
    let end = turf.point([151.2093, -33.8688]);
    
    // let start = turf.point([37.5665, 126.9780]);
    // let end = turf.point([-33.8688, 151.2093]);


    let greatCircle = turf.greatCircle(start, end, {properties: {name: 'Seoul to Sydney'}});


  return (
    <div>
      {/* <Head> */}
      {/*   <title>react-map-gl example</title> */}
      {/* </Head> */}

      <Map
        initialViewState={{
          latitude: 2,
          longitude: 145,
          zoom: 1.8
        }}
        style={{width: 600, height: 600}}
        mapStyle="mapbox://styles/mapbox/light-v10"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {/* <Marker longitude={-122.4} latitude={37.8} color="red" /> */}
        {points}
        {/* <Deck /> */}
        <MyDeck />
      </Map>
    </div>
  );
}
