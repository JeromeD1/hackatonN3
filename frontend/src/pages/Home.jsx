/* global L */

import { useState, useEffect } from "react"
// import axios from "axios"
import "./Home.scss"
import { cities } from "../assets/variables/cities"
import { filters } from "../assets/variables/filters"
import { events } from "../assets/variables/events"

// import tornade from "../assets/images/tornade.png"
// import meteorite from "../assets/images/meteorite.png"
// import volcan from "../assets/images/volcan.png"
// import incendie from "../assets/images/incendie.png"
// import tsunami from "../assets/images/tsunami.png"
// import radioactivite from "../assets/images/radioactivite.png"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [map, setMap] = useState(null)
  const [citySelected, setCitySelected] = useState(cities[49])
  const [filtersEvent, setFiltersEvent] = useState(filters)
  const [markers, setMarkers] = useState([])
  // Ajouter un nouvel état pour stocker les coordonnées du point cliqué et du marqueur le plus proche
  const [clickedPoint, setClickedPoint] = useState(null)
  const [nearestMarker, setNearestMarker] = useState(null)

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

      // const newMarkers = events.map((item) =>
      //   {
      //    let mark= L.marker([item.lat, item.lng], {
      //     icon: item.icone,
      //   }).addTo(mapInstance)

      //   mark.bindTooltip('Texte à afficher').openTooltip();
      // }
      // )

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

  useEffect(() => {
    if (map) {
      // Ajouter un gestionnaire d'événements pour l'événement click de la carte
      map.on("click", function (e) {
        // Récupérer les coordonnées du point cliqué
        const clickedPoint = e.latlng
        setClickedPoint(clickedPoint)
        // console.log("clickedPoint",clickedPoint);

        // Calculer la distance entre le point cliqué et chaque marqueur pour trouver le marqueur le plus proche
        let nearestMarker = null
        let minDistance = Infinity
        markers.forEach((marker) => {
          const distance = clickedPoint.distanceTo(marker.getLatLng())
          if (distance < minDistance) {
            minDistance = distance
            nearestMarker = marker
          }
        })

        // Mettre à jour l'état avec les coordonnées du marqueur le plus proche
        setNearestMarker(nearestMarker ? nearestMarker.getLatLng() : null)
        // console.log("nearestMarker",nearestMarker.getLatLng());
      })
    }
  }, [map, markers])

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
