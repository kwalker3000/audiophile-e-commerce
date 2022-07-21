
import React, {useState, useEffect, useRef} from "react";

import StaticMap from 'react-map-gl';
import { IconLayer, ArcLayer, ScatterplotLayer, } from "@deck.gl/layers";
import DeckGL from "deck.gl";

import 'mapbox-gl/dist/mapbox-gl.css';

const ICON_MAPPING = {
  marker: {x: 128, y: 0, width: 128, height: 275, mask: true}
};


export const Map = ({ token, removeOverlay, store, user }) => {

    let from;
    let to;
    const markers = [

        from = {
	    name: `store #${store.id}`,
	    address: store.city + ' ' + store.postal_code,
            coordinates: [store.lon, store.lat]
        },
        to = {
            name: user.name,
            address: `${user.address.line1}, ${user.address.city} ${user.address.postal_code}`,
            coordinates: [user.coord.lon, user.coord.lat]
        }
    ]

    let [ source, target ] = markers

    let data = markers.map(marker => (
        {
            name: marker.name,
            coordinates: marker.coordinates
        }
    ))

const dataLine = [
    {sourcePosition: source.coordinates, targetPosition: target.coordinates}
];

    const mapRef = useRef();
    const onMapLoad = React.useCallback(() => {
        mapRef.current.on('render', () => removeOverlay())
    })

    const [viewport, setViewport] = useState({
        longitude: target.coordinates[0],
        latitude: target.coordinates[1],
        zoom: 5
    });

    return (
        <DeckGL
            width={"100%"}
            height={"100%"}
            controller
            viewState={viewport}
	  getTooltip={({object}) => object && `${object.name}\n${object.address}`}
            onViewStateChange={(viewState) => setViewport(viewState.viewState)}
        >
          <ScatterplotLayer
            id='scatterplot-layer'
            data={markers}
            pickable={false}
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
            onHover={(e) => console.log(e)}
            greatCircle={true}
            getHeight={0}
            getWidth={2.5} />
          <IconLayer
            id='icon-layer'
            data={markers}
            pickable={true}
	   iconAtlas= 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/icon-atlas.png'
	    iconMapping={ICON_MAPPING}
	    getIcon={d => 'marker'}

	    sizeScale={15}
	    getPosition={d => d.coordinates}
	    getSize={d => 4}
	    getColor={d => [255, 140, 0]}
            getTooltip={({data}) => data && `${data.name}\n{data.coordinates}`}

          />
            <StaticMap
                width={100}
                height={100}
                mapStyle='mapbox://styles/mapbox/light-v10'
              mapboxAccessToken={token}
              ref={mapRef}
              onLoad={onMapLoad}
            />
        </DeckGL>
    )
}
