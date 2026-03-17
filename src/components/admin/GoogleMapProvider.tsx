"use client"

import { useJsApiLoader } from "@react-google-maps/api"

const libraries: ("places")[] = ["places"]

export default function GoogleMapProvider({
  children,
}: {
  children: React.ReactNode
}) {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY!,
    libraries,
    language: "en",
    region: "AU",
  })

  if (!isLoaded) return null

  return <>{children}</>
}