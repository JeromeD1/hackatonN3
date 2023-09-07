import "./NavBar.scss"
import astrolabe from "../assets/astrolabe.png"
import oeil from "../assets/oeil.png"
import chaiseRoulante from "../assets/chaiseRoulante.png"
import oreille from "../assets/oreille.png"
import teteEclaire from "../assets/teteEclaire.png"
import cloche from "../assets/cloche.png"

function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li className="astrolabe-icon">
          <img src={astrolabe} alt="astrolabe" />
        </li>
        <li className="surevie-text">
          <p>Sûrevie</p>
        </li>
        <li className="icon-group">
          <img src={oeil} alt="personnes malevoyantes" />
          <img src={chaiseRoulante} alt="personnes à mobilité réduite" />
          <img src={oreille} alt="personnes malentendantes" />
          <img src={teteEclaire} alt="teteEclaire" />
        </li>
        <li className="cloche-icon">
          <img src={cloche} alt="alertes" />
        </li>
      </ul>
    </div>
  )
}
export default NavBar
