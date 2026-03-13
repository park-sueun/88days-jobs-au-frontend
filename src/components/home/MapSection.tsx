"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -25.2744,
  lng: 133.7751,
};

const markers = [
  { lat: -33.8688, lng: 151.2093 },
  { lat: -27.4698, lng: 153.0251 },
  { lat: -37.8136, lng: 144.9631 },
];

export default function MapSection() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!,
    language: "en",
    region: "AU"
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
      {markers.map((marker, i) => (
        <Marker key={i} position={marker} />
      ))}
    </GoogleMap>
  );
}