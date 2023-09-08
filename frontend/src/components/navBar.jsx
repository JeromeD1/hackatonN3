import "./NavBar.scss"
import astrolabe from "../assets/astrolabe.png"
import oeil from "../assets/oeil.png"
import chaiseRoulante from "../assets/chaiseRoulante.png"
import oreille from "../assets/oreille.png"
import teteEclaire from "../assets/teteEclaire.png"
import cloche from "../assets/cloche.png"
import MyContext from "./MyContext"
import { useContext } from "react"
import { shelters } from "../assets/variables/shelters"
// import { shelters } from "../assets/variables/shelters"

function NavBar({ filtersEvent, setFiltersShelter, FiltersShelter }) {
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

  const modifyVisibleShelters = (clickedHandicap) => {
    const filteredEvents = filtersEvent
      .filter((event) => event.selected === true)
      .map((item) => item.type)

    const filterbySelectedHandicap = (newShelters, clickedHandicap) => {
      if (clickedHandicap !== "blind" && blind === 1) {
        // on met 0 et pas 1 car on considère l'état précédant car la mise à jour du state est asynchrone
        newShelters = newShelters.filter((shelter) => shelter.blind === 1)
      }

      if (clickedHandicap !== "deaf" && deaf === 1) {
        newShelters = newShelters.filter((shelter) => shelter.deaf === 1)
      }

      if (clickedHandicap !== "handicap" && handicap === 1) {
        newShelters = newShelters.filter((shelter) => shelter.handicap === 1)
      }

      if (clickedHandicap !== "autistic" && autistic === 1) {
        newShelters = newShelters.filter((shelter) => shelter.autistic === 1)
      }

      return newShelters
    }

    let newShelters

    if (filteredEvents.length === 0) {
      newShelters = shelters
      newShelters = filterbySelectedHandicap(newShelters, clickedHandicap)
    } else {
      newShelters = shelters.filter((item) =>
        item.events.some((event) => filteredEvents.includes(event))
      )
      newShelters = filterbySelectedHandicap(newShelters, clickedHandicap)
    }

    if (clickedHandicap === "blind" && blind === 0) {
      // on met 0 et pas 1 car on considère l'état précédant car la mise à jour du state est asynchrone
      newShelters = newShelters.filter((shelter) => shelter.blind === 1)
    }

    if (clickedHandicap === "deaf" && deaf === 0) {
      newShelters = newShelters.filter((shelter) => shelter.deaf === 1)
    }

    if (clickedHandicap === "handicap" && handicap === 0) {
      newShelters = newShelters.filter((shelter) => shelter.handicap === 1)
    }

    if (clickedHandicap === "autistic" && autistic === 0) {
      newShelters = newShelters.filter((shelter) => shelter.autistic === 1)
    }

    setFiltersShelter(newShelters)
  }

  const handleClickBlind = () => {
    setBlind((prevstate) => (prevstate === 0 ? 1 : 0))

    modifyVisibleShelters("blind")
  }

  const handleClickDeaf = () => {
    setDeaf((prevstate) => (prevstate === 0 ? 1 : 0))

    modifyVisibleShelters("deaf")
  }

  const handleClickHandicap = () => {
    setHandicap((prevstate) => (prevstate === 0 ? 1 : 0))
    modifyVisibleShelters("handicap")
  }

  const handleClickAutistic = () => {
    setAutistic((prevstate) => (prevstate === 0 ? 1 : 0))
    modifyVisibleShelters("autistic")
  }

  return (
    <div className="navBar">
      <ul>
        <li className="astrolabe-icon">
          <img src={astrolabe} alt="logo" title="logo" />
        </li>
        <li className="surevie-text">
          <p>SÛREVIE</p>
        </li>
        <li className="icon-group">
          <img
            src={oeil}
            onClick={handleClickBlind}
            style={
              blind === 1
                ? { backgroundColor: "lightgreen", borderRadius: "40%" }
                : null
            }
            alt="personnes malevoyantes"
            title="personnes malevoyantes"
          />
          <img
            src={chaiseRoulante}
            style={
              handicap === 1
                ? { backgroundColor: "lightgreen", borderRadius: "40%" }
                : null
            }
            onClick={handleClickHandicap}
            alt="personnes à mobilité réduite"
            title="personnes à mobilité réduite"
          />
          <img
            src={oreille}
            style={
              deaf === 1
                ? { backgroundColor: "lightgreen", borderRadius: "40%" }
                : null
            }
            onClick={handleClickDeaf}
            alt="personnes malentendantes"
            title="personnes malentendantes"
          />
          <img
            src={teteEclaire}
            style={
              autistic === 1
                ? { backgroundColor: "lightgreen", borderRadius: "40%" }
                : null
            }
            onClick={handleClickAutistic}
            alt="maladie mentale"
            title="maladie mentale"
          />
        </li>
        <li className="cloche-icon">
          <img src={cloche} alt="alertes" title="alertes" />
        </li>
      </ul>
    </div>
  )
}
export default NavBar
