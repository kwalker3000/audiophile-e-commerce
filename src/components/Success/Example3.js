
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { markers } from '../../../lib/markers';


export const Map = () => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW53NDE1IiwiYSI6ImNsNWhkNnFkOTA2dmQza28yenRrcG8ydTYifQ.7qfnsMUxHQmvZwaPeLP3xg';


	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(15.4542);
	const [lat, setLat] = useState(18.7322);
	const [zoom, setZoom] = useState(1.8);

    useEffect(() => {
	if (map.current) return; // initialize map only once
	map.current = new mapboxgl.Map({
	container: mapContainer.current,
	style: 'mapbox://styles/mapbox/light-v10',
	center: [lng, lat],
	zoom: zoom
	});

const geojson = {
        type: 'Feature',
        features: markers.map((marker) => ({
            geometry: {
                type: 'Point',
                coordinates: {
                    lat: marker.latCoord,
                    lng: marker.longCoord
                }
            }
        }))
    };

map.current.on('load', () => {
  geojson.features.forEach((marker) => {  // create a DOM element for the marker
  const markerIcon = document.createElement('div');
  markerIcon.className = 'location-marker';
  markerIcon.style.backgroundImage = 'url(/assets/map/map-marker.png)';
      markerIcon.style.backgroundSize = 'contain';
      markerIcon.style.backgroundRepeat = 'no-repeat';
  markerIcon.style.width = '25px';
  markerIcon.style.height = '100%';
  
  new mapboxgl.Marker(markerIcon)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map.current);
  });
});
        // map.current.on('load', () => {
        //     geojson.features.forEach(marker => console.log('hey', marker))
        // })



    }, []);

    
    return (
        <div id="">
          <div
            className="map-container"
            ref={mapContainer}
        style={{width: '400px', height: '400px'}}></div>
        </div>
    )
}
