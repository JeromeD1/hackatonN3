/* global L */
import { useState, useEffect } from "react"
// import axios from "axios"
import "./Home.scss"
import { cities } from "../assets/variables/cities"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [map, setMap] = useState(null)
  const [citySelected, setCitySelected] = useState(cities[20])

  // let L

  const handleChangeCity = (e) => {
    const newCitySelected = cities.filter(
      (city) => city.city === e.target.value
    )[0]
    setCitySelected(newCitySelected)
    map.flyTo([newCitySelected.lat, newCitySelected.lng], 10)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const mapInstance = L.map("map").setView(
        [citySelected.lat, citySelected.lng],
        10
      )
      setMap(mapInstance)

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(mapInstance)
    }
  }, [mounted])

  return (
    <main className="main-home">
      <div id="map"></div>
      <select value={citySelected.city} onChange={handleChangeCity}>
        {cities.map((city) => (
          <option key={city.city}>{city.city}</option>
        ))}
      </select>
    </main>
  )
}
