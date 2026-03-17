"use client"

import { Autocomplete } from "@react-google-maps/api"
import { useState } from "react"

export default function AddressSearch({
  onSelect,
}: {
  onSelect: (data: any) => void
}) {
  const [autocomplete, setAutocomplete] = useState<any>(null)

  const onLoad = (auto: any) => {
    setAutocomplete(auto)
  }

  const onPlaceChanged = () => {
    if (!autocomplete) return

    const place = autocomplete.getPlace()

    const components = place.address_components

    let unit = ""
    let streetNumber = ""
    let route = ""
    let suburb = ""
    let state = ""
    let postcode = ""

    components.forEach((c: any) => {

      const type = c.types[0]

      if (type === "subpremise") {
        unit = c.long_name
      }

      if (type === "street_number") {
        streetNumber = c.long_name
      }

      if (type === "route") {
        route = c.long_name
      }

      if (type === "locality") {
        suburb = c.long_name
      }

      if (type === "administrative_area_level_1") {
        state = c.short_name
      }

      if (type === "postal_code") {
        postcode = c.long_name
      }

    })

    const street = `${streetNumber} ${route}`

    const lat = place.geometry.location.lat()
    const lng = place.geometry.location.lng()

    onSelect({
      unit,
      street,
      suburb,
      state,
      postcode,
      latitude: lat,
      longitude: lng,
    })
  }

  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        placeholder="Search address..."
        className="border w-full px-4 py-2 rounded"
      />
    </Autocomplete>
  )
}