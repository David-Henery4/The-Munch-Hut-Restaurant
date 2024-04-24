"use client"
import "leaflet/dist/leaflet.css"

// Needed for Marker //
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
///////////////////////////

import { MapContainer, TileLayer, Marker } from "react-leaflet"

const Map = ({activeCoords}) => {
  //
  return (
    <div className="w-full h-full rounded-md overflow-hidden relative z-10">
      <MapContainer
        style={{
          height: "100%",
          width: "100%",
        }}
        center={activeCoords}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={activeCoords} />
      </MapContainer>
    </div>
  );
}

export default Map