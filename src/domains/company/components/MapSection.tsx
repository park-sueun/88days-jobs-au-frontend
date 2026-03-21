"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
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

const libraries: "places"[] = ["places"];

export default function MapSection() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!,
    libraries,
    language: "en",
    region: "AU",
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="flex justify-center px-6 py-6">
      {/* wrapper */}
      <div className="w-full max-w-7xl h-[420px] rounded-2xl overflow-hidden shadow-md">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
          {markers.map((marker, i) => (
            <Marker key={i} position={marker} />
          ))}
        </GoogleMap>
      </div>
    </div>
  );
}