/* global L */
import { useState, useEffect } from "react"
// import axios from "axios"
import PopUp from "../components/PopUp"
import "./Home.scss"
import { cities } from "../assets/variables/cities"
import { filters } from "../assets/variables/filters"
import tornade from "../assets/images/tornade.png"
import meteorite from "../assets/images/meteorite.png"
import volcan from "../assets/images/volcan.png"
import incendie from "../assets/images/incendie.png"
import tsunami from "../assets/images/tsunami.png"
import radioactivite from "../assets/images/radioactivite.png"

const iconTornade = L.icon({
  iconUrl: tornade,
  iconSize: [80, 120],
})

const iconMeteorite = L.icon({
  iconUrl: meteorite,
  iconSize: [120, 120],
})

const iconVolcan = L.icon({
  iconUrl: volcan,
  iconSize: [80, 120],
})

const iconIncendie = L.icon({
  iconUrl: incendie,
  iconSize: [80, 100],
})

const iconTsunami = L.icon({
  iconUrl: tsunami,
  iconSize: [100, 100],
})

const iconRadioactivite = L.icon({
  iconUrl: radioactivite,
  iconSize: [80, 80],
})

const events = [
  { type: "tornade", icone: iconTornade, lat: 48.8566, lng: 2.35 },
  { type: "meteorite", icone: iconMeteorite, lat: 49.0, lng: 2.0 },
  { type: "volcan", icone: iconVolcan, lat: 48.5, lng: 1.5 },
  { type: "incendie", icone: iconIncendie, lat: 49.1, lng: 2.45 },
  { type: "tsunami", icone: iconTsunami, lat: 48.5, lng: 2.5 },
  { type: "radioactivite", icone: iconRadioactivite, lat: 48.75, lng: 1.9 },
  { type: "tornade", icone: iconTornade, lat: 43.2965, lng: 5.3698 },
  { type: "meteorite", icone: iconMeteorite, lat: 45.764, lng: 4.8357 },
  { type: "volcan", icone: iconVolcan, lat: 44.8378, lng: -0.5792 },
  { type: "incendie", icone: iconIncendie, lat: 43.6047, lng: 1.4442 },
  { type: "tsunami", icone: iconTsunami, lat: 47.2184, lng: -1.5536 },
  {
    type: "radioactivite",
    icone: iconRadioactivite,
    lat: 48.1173,
    lng: -1.6778,
  },
  { type: "tornade", icone: iconTornade, lat: 49.4944, lng: 0.1079 },
  { type: "meteorite", icone: iconMeteorite, lat: 50.9513, lng: 1.8587 },
  { type: "tornade", icone: iconTornade, lat: 45.1885, lng: 5.7245 },
  { type: "meteorite", icone: iconMeteorite, lat: 47.3216, lng: 5.0415 },
  { type: "volcan", icone: iconVolcan, lat: 43.6108, lng: 3.8767 },
  { type: "incendie", icone: iconIncendie, lat: 43.1242, lng: 6.1286 },
  { type: "tsunami", icone: iconTsunami, lat: 43.7009, lng: 7.2684 },
  {
    type: "radioactivite",
    icone: iconRadioactivite,
    lat: 49.2583,
    lng: 4.0317,
  },
  { type: "tornade", icone: iconTornade, lat: 47.7508, lng: 7.3359 },
  { type: "meteorite", icone: iconMeteorite, lat: 48.6921, lng: 6.1844 },
  { type: "volcan", icone: iconVolcan, lat: 49.1193, lng: 6.1757 },
  { type: "incendie", icone: iconIncendie, lat: 48.5839, lng: 7.7455 },
  { type: "tornade", icone: iconTornade, lat: 48.3904, lng: -4.4861 },
  { type: "meteorite", icone: iconMeteorite, lat: 47.9029, lng: 1.909 },
  { type: "volcan", icone: iconVolcan, lat: 48.1173, lng: -1.6778 },
  { type: "incendie", icone: iconIncendie, lat: 49.4944, lng: 0.1079 },
  { type: "tsunami", icone: iconTsunami, lat: 50.9513, lng: 1.8587 },
  {
    type: "radioactivite",
    icone: iconRadioactivite,
    lat: 43.8374,
    lng: -2.2192,
  },
  { type: "tornade", icone: iconTornade, lat: 43.2965, lng: 5.3698 },
  { type: "meteorite", icone: iconMeteorite, lat: 43.1242, lng: 6.1286 },
  { type: "volcan", icone: iconVolcan, lat: 43.7009, lng: 7.2684 },
  { type: "incendie", icone: iconIncendie, lat: 43.6108, lng: 3.8767 },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [map, setMap] = useState(null)
  const [citySelected, setCitySelected] = useState(cities[63])
  const [filtersEvent, setFiltersEvent] = useState(filters)
  const [markers, setMarkers] = useState([])

  const handleChangeCity = (e) => {
    const newCitySelected = cities.filter(
      (city) => city.city === e.target.value
    )[0]
    setCitySelected(newCitySelected)
    map.flyTo([newCitySelected.lat, newCitySelected.lng], 10)
  }

  const handleClickFilterEvent = (id) => {
    setFiltersEvent((prevstate) =>
      prevstate.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    )
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

      const newMarkers = events.map((item) =>
        L.marker([item.lat, item.lng], {
          icon: item.icone,
        }).addTo(mapInstance)
      )

      setMarkers(newMarkers)
    }
  }, [mounted])

  useEffect(() => {
    if (mounted) {
      const eventsSelected = filtersEvent
        .map((filter) => (filter.selected ? filter.type : null))
        .filter((item) => item !== null)

      // Suppression de tous les marqueurs existants sur la carte
      markers.forEach((marker) => marker.remove())

      // Création des nouveaux marqueurs et les ajout à la carte
      if (eventsSelected.length === 0) {
        const newMarkers = events.map((item) =>
          L.marker([item.lat, item.lng], {
            icon: item.icone,
          }).addTo(map)
        )
        // Mise à jour de l'état des marqueurs
        setMarkers(newMarkers)
      } else {
        const newMarkers = events
          .filter((item) => eventsSelected.includes(item.type))
          .map((item) =>
            L.marker([item.lat, item.lng], { icon: item.icone }).addTo(map)
          )
        // Mise à jour de l'état des marqueurs
        setMarkers(newMarkers)
      }
    }
  }, [filtersEvent])

  return (
    <main className="main-home">
      <PopUp />
      <div id="map"></div>
      <section className="section-citySelect">
        <select value={citySelected.city} onChange={handleChangeCity}>
          {cities
            .sort((a, b) => a.city.localeCompare(b.city))
            .map((city) => (
              <option key={city.city}>{city.city}</option>
            ))}
        </select>
      </section>

      <section className="section-filterEvent">
        {filtersEvent.map((filter) => (
          <img
            src={filter.image}
            alt={filter.type}
            key={filter.id}
            style={
              filter.selected ? { boxShadow: "0px 0px 20px 3px blue" } : null
            }
            onClick={() => handleClickFilterEvent(filter.id)}
          />
        ))}
      </section>
    </main>
  )
}
