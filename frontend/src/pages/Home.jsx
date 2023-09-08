/* global L */
import { useState, useEffect, useRef, useContext } from "react"
import MyContext from "../components/MyContext"
import PopUp from "../components/PopUp"
import IABubbles from "../components/IABubbles"
import "./Home.scss"
import {
  shelters,
  iconBatiment,
  iconBuilding,
  iconBunker,
  iconGrotte,
  iconMetro,
  iconMontagne,
  iconParking,
} from "../assets/variables/shelters"
import {
  events,
  iconIncendie,
  iconMeteorite,
  iconRadioactivite,
  iconTornade,
  iconTsunami,
  iconVolcan,
} from "../assets/variables/events"
import { cities } from "../assets/variables/cities"
import { filters } from "../assets/variables/filters"
import { fshelters } from "../assets/variables/fshelters"
import building from "../assets/images/building.png"

export default function Home() {
  const {
    blind,
    setBlind,
    deaf,
    setDeaf,
    handicap,
    setHandicap,
    autistic,
    setAutistic,
  } = useContext(MyContext)

  const [mounted, setMounted] = useState(false)
  const [map, setMap] = useState(null)
  const [citySelected, setCitySelected] = useState(cities[49])
  const [filtersEvent, setFiltersEvent] = useState(filters)
  const [markers, setMarkers] = useState([])
  const roadsRef = useRef([])
  const [roads, setRoads] = useState([])
  // Ajouter un nouvel état pour stocker les coordonnées du point cliqué et du marqueur le plus proche
  const [clickedPoint, setClickedPoint] = useState(null)
  const [nearestMarker, setNearestMarker] = useState(null)
  const [FiltersShelter, setFiltersShelter] = useState(shelters)
  const [showShelters, setShowShelters] = useState(false)
  const [markersShelter, setMarkersShelter] = useState([])
  const [shake, setShake] = useState(false)
  const shelterRef = useRef([])

  const triggerShake = () => {
    setShake(true)
    setTimeout(() => setShake(false), 500)
  }

  const handleClickButtonShelters = () => {
    setShowShelters(!showShelters)
  }

  const handleChangeCity = (e) => {
    const newCitySelected = cities.filter(
      (city) => city.city === e.target.value
    )[0]
    setCitySelected(newCitySelected)
    map.flyTo([newCitySelected.lat, newCitySelected.lng], 10)
  }

  const handleClickFilterEvent = (id) => {
    // suppression des routes existantes
    roadsRef.current.forEach((road) => road.remove())

    setFiltersEvent((prevstate) =>
      prevstate.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    )
    const filteredEvents = filtersEvent
      .map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
      .filter((event) => event.selected === true)
      .map((item) => item.type)

    // if (filteredEvents.length === 0) {
    //   setFiltersShelter(shelters)
    // } else {
    //   const newShelters = shelters.filter((item) =>
    //     item.events.some((event) => filteredEvents.includes(event))
    //   )
    //   setFiltersShelter(newShelters)
    // }
    let newShelters

    if (filteredEvents.length === 0) {
      newShelters = shelters
    } else {
      newShelters = shelters.filter((item) =>
        item.events.some((event) => filteredEvents.includes(event))
      )
    }

    if (blind === 1) {
      newShelters = newShelters.filter((shelter) => shelter.blind === 1)
    }

    if (deaf === 1) {
      newShelters = newShelters.filter((shelter) => shelter.deaf === 1)
    }

    if (handicap === 1) {
      newShelters = newShelters.filter((shelter) => shelter.handicap === 1)
    }

    if (autistic === 1) {
      newShelters = newShelters.filter((shelter) => shelter.autistic === 1)
    }

    setFiltersShelter(newShelters)
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
        // suppression des routes existantes
        roadsRef.current.forEach((road) => road.remove())
        setRoads([])

        // Récupérer les coordonnées du point cliqué
        const clickedPoint = e.latlng
        setClickedPoint(clickedPoint)
        // console.log("clickedPoint",clickedPoint);

        // Calculer la distance entre le point cliqué et chaque marqueur pour trouver le marqueur le plus proche
        let nearestMarker = null
        let minDistance = Infinity
        shelterRef.current.forEach((marker) => {
          const distance = clickedPoint.distanceTo(marker.getLatLng())
          if (distance < minDistance) {
            minDistance = distance
            nearestMarker = marker
          }
        })

        // Mettre à jour l'état avec les coordonnées du marqueur le plus proche
        setNearestMarker(nearestMarker ? nearestMarker.getLatLng() : null)
        // console.log("nearestMarker",nearestMarker.getLatLng());

        if (nearestMarker) {
          const waypoints = [
            [clickedPoint.lat, clickedPoint.lng],
            [nearestMarker.getLatLng().lat, nearestMarker.getLatLng().lng],
          ]

          // Créer un polyline avec les points de passage
          const route = L.polyline(waypoints, { color: "red" }).addTo(map)
          // Ajuster la vue de la carte pour afficher la route
          // map.fitBounds(route.getBounds());

          // setRoads([route])
          setRoads((prevRoads) => [...prevRoads, route])
        }
      })
    }
  }, [map, markers])

  useEffect(() => {
    roadsRef.current = roads
  }, [roads])

  useEffect(() => {
    if (showShelters) {
      markersShelter.forEach((marker) => marker.remove())

      const newShelters = FiltersShelter.map((item) =>
        L.marker([item.lat, item.lng], {
          icon: item.icone,
        }).addTo(map)
      )
      // Mise à jour de l'état des marqueurs
      setMarkersShelter(newShelters)
    } else {
      markersShelter.forEach((marker) => marker.remove())
      setMarkersShelter([])
    }
  }, [showShelters, FiltersShelter, filtersEvent])

  useEffect(() => {
    shelterRef.current = markersShelter
  }, [markersShelter])

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

      <section className="filtersMap">
        <div className="filtersRowEvent">
          {filtersEvent.map((filter) => (
            <button
              key={filter.id}
              style={
                filter.selected
                  ? {
                      bottom: "-20px",
                      animation: "effetLumiere 0.7s ease-in-out infinite",
                    }
                  : null
              }
              onClick={() => handleClickFilterEvent(filter.id)}
            >
              <img src={filter.image} alt={filter.type} />
            </button>
          ))}
        </div>
        <div className="section-filterShelter">
          <button onClick={handleClickButtonShelters}>
            <img
              src={building}
              alt="afficher les abris"
              title="Afficher les abris"
            />
          </button>
        </div>
      </section>
      <div className="IABubbles">
        <IABubbles
          onEnterPress={(message) => {
            if (message && message.startsWith("Attention!")) {
              triggerShake()
            }
          }}
        />
      </div>
    </main>
  )
}
