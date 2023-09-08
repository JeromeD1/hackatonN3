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
                Trouvez votre abri
              </button>
              <div className="alerte">
                <img
                  src="../src/assets/images/alerte.png"
                  alt="cloche d'alerte"
                />
                <p>Rejoignez le réseau d'alerte pour ne rater aucune infos</p>
              </div>
              <div className="register">
                <MonFormulaire closeModal={closeModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default PopUp
