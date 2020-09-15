import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import "./styles.css"
import location_icon from "./location_icon.png"


const icon = new Icon({
  iconUrl: location_icon,
  iconSize: [50, 50]
});


const CreateMap = ({lat,long})=> {
    console.log(lat)
    console.log(long)
    return (
            <Map className="map" center={ [ lat, long]} zoom={13}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    position={[ lat, long]}
                    icon={icon}
                />
            </Map>
    )
}

export default CreateMap