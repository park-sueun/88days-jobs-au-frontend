"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Company } from "../types/company";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: -25.2744,
  lng: 133.7751,
};

const libraries: "places"[] = ["places"];

export default function MapSection({
  companies,
  loading,
  error,
}: {
  companies: Company[];
  loading: boolean;
  error: string | null;
}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!,
    libraries,
    language: "en",
    region: "AU",
  });

  // markers 변환 (항상 계산)
  const markers = companies
    .filter((c) => c.latitude != null && c.longitude != null)
    .map((c) => ({
      lat: c.latitude,
      lng: c.longitude,
    }));

  return (
    <div className="flex justify-center px-6 py-6">
      <div className="w-full max-w-7xl h-[420px] rounded-2xl overflow-hidden shadow-md relative">
        {/* 1. Google Maps script loading */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
            <div className="animate-pulse text-gray-500 text-sm">
              Loading map...
            </div>
          </div>
        )}

        {/* 2. Data loading skeleton */}
        {isLoaded && loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
            <div className="animate-pulse text-gray-500 text-sm">
              Loading data...
            </div>
          </div>
        )}

        {/* 3. Error state */}
        {isLoaded && error && (
          <div className="absolute inset-0 flex items-center justify-center text-red-500 bg-white z-10">
            {error}
          </div>
        )}

        {/* 4. Map */}
        {isLoaded && !error && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={4}
          >
            {markers.map((marker, i) => (
              <Marker key={i} position={marker} />
            ))}
          </GoogleMap>
        )}
      </div>
    </div>
  );
}