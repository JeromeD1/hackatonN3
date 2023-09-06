import { useState, useEffect } from "react"
// import axios from "axios"
import "./Home.scss"
import { cities } from "../assets/variables/cities"
import { filters } from "../assets/variables/filters"
import tornade from "../assets/images/tornade.png"
import meteorite from "../assets/images/meteorite.png"
import volcan from "../assets/images/volcan.png"
import incendie from "../assets/images/incendie.png"
import tsunami from "../assets/images/tsunami.png"
import radioactivite from "../assets/images/radioactivite.png"

let L // A METTRE EN COMMENTAIRE SINON CA NE FONCTIONNE PAS

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
  {
    type: "tornade",
    icone: iconTornade,
    lat: 48.8566,
    lng: 2.35,
  },
  {
    type: "meteorite",
    icone: iconMeteorite,
    lat: 49,
    lng: 2,
  },
  {
    type: "volcan",
    icone: iconVolcan,
    lat: 48.5,
    lng: 1.5,
  },
  {
    type: "incendie",
    icone: iconIncendie,
    lat: 49.1,
    lng: 2.45,
  },
  {
    type: "tsunami",
    icone: iconTsunami,
    lat: 48.5,
    lng: 2.5,
  },
  {
    type: "radioactivite",
    icone: iconRadioactivite,
    lat: 48.75,
    lng: 1.9,
  },
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

      events.map((item) =>
        L.marker([item.lat, item.lng], {
          icon: item.icone,
        }).addTo(mapInstance)
      )
      /// ///////////////
      // events.map((item) => {
      //   // const marker = L.marker([item.lat, item.lng], {
      //   //   icon: item.icone,
      //   // }).addTo(mapInstance)
      //   L.marker([item.lat, item.lng], {
      //     icon: item.icone,
      //   }).addTo(mapInstance)
      // })
      /// /////////////////
      // let marker = L.marker([48.8566, 2.3522],{icon:iconTornade} ).addTo(mapInstance);
    }
  }, [mounted])

  useEffect(() => {
    const eventsSelected = filtersEvent
      .map((filter) => (filter.selected ? filter.type : null))
      .filter((item) => item !== null)

    // events.map((item) => {
    //   if(eventsSelected.includes(item.type)) {
    //     let marker = L.marker([item.lat, item.lng],{icon:item.icone} ).addTo(map);
    //   } else {

    //   }
    // })

    // Supprimer tous les marqueurs existants de la carte
    markers.forEach((marker) => marker.remove())

    // Créer les nouveaux marqueurs et les ajouter à la carte
    const newMarkers = events
      .filter((item) => eventsSelected.includes(item.type))
      .map((item) =>
        L.marker([item.lat, item.lng], { icon: item.icone }).addTo(map)
      )

    // Mettre à jour l'état des marqueurs
    setMarkers(newMarkers)
  }, [filtersEvent])

  return (
    <main className="main-home">
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
