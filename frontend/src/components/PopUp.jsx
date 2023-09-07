import { useState, useEffect } from "react"
import "./PopUp.scss"
import MonFormulaire from "./MonFormulaire"

function PopUp() {
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    setShowModal(true)
  }, [])

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="popup">
      {showModal && (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-content">
              <img
                className="porte"
                src="../src/assets/images/portebunker.png"
                alt="porte d'un bunker"
              />
              <h2>Sûrevie</h2>
              <button className="findAbri" onClick={closeModal}>
                Trouver votre abri
              </button>
              <div className="alerte">
                <img
                  src="../src/assets/images/alerte.png"
                  alt="cloche d'alerte"
                />
                <p>Rejoignez le réseau d'alerte pour ne ratez aucune infos</p>
              </div>
              <div className="register">
                <MonFormulaire />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default PopUp
