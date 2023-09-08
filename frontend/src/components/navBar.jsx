import "./NavBar.scss"
import astrolabe from "../assets/astrolabe.png"
import oeil from "../assets/oeil.png"
import chaiseRoulante from "../assets/chaiseRoulante.png"
import oreille from "../assets/oreille.png"
import teteEclaire from "../assets/teteEclaire.png"
import cloche from "../assets/cloche.png"
import interrogation from "../assets/images/interrogation.png"
import MyContext from "./MyContext"
import { useContext } from "react"

function NavBar() {
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

  const handleClickBlind = () =>
    setBlind((prevstate) => (prevstate === 0 ? 1 : 0))
  const handleClickDeaf = () =>
    setDeaf((prevstate) => (prevstate === 0 ? 1 : 0))
  const handleClickHandicap = () =>
    setHandicap((prevstate) => (prevstate === 0 ? 1 : 0))
  const handleClickAutistic = () =>
    setAutistic((prevstate) => (prevstate === 0 ? 1 : 0))

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
        <li className="interrogation-icon">
          <img src={interrogation} alt="aide" title="alertes" />
        </li>
        <li className="cloche-icon">
          <img src={cloche} alt="alertes" title="alertes" />
        </li>
      </ul>
    </div>
  )
}
export default NavBar
