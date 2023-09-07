import "./NavBar.scss"
import astrolabe from "../assets/astrolabe.png"
import oeil from "../assets/oeil.png"
import chaiseRoulante from "../assets/chaiseRoulante.png"
import oreille from "../assets/oreille.png"
import teteEclaire from "../assets/teteEclaire.png"
import cloche from "../assets/cloche.png"

function NavBar() {
  const speak = (text) => {
    var msg = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(msg)
  }

  const imageAlt = document
    .querySelector(".astrolabe-icon img")
    .getAttribute("alt")
  speak(imageAlt)
  return (
    <div className="navBar">
      <ul>
        <li className="astrolabe-icon">
          <img src={astrolabe} alt="logo" title="logo" />
        </li>
        <li className="surevie-text">
          <p>Sûrevie</p>
        </li>
        <li className="icon-group">
          <img
            src={oeil}
            alt="personnes malevoyantes"
            title="personnes malevoyantes"
          />
          <img
            src={chaiseRoulante}
            alt="personnes à mobilité réduite"
            title="personnes à mobilité réduite"
          />
          <img
            src={oreille}
            alt="personnes malentendantes"
            title="personnes malentendantes"
          />
          <img
            src={teteEclaire}
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
