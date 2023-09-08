import React, { useState } from "react"
import "./MonFormulaire.scss"

function MonFormulaire({ closeModal }) {
  const [formData, setFormData] = useState({
    nomPrenom: "",
    tel: "",
    mail: "",
    region: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(formData)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="all">
          <div className="part1">
            <div>
              <input
                type="text"
                id="nomPrenom"
                name="nomPrenom"
                placeholder="Nom/prénom"
                value={formData.nomPrenom}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="Tel."
                value={formData.tel}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="part2">
            <div>
              <input
                type="email"
                id="mail"
                name="mail"
                placeholder="Mail"
                value={formData.mail}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="region"
                name="region"
                placeholder="Région"
                value={formData.region}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="butonsubmit">
          <button
            className="submit"
            type="submit"
            onClick={() => {
              alert(
                "Merci de vous être enregistre \n Vous recevrez maintenant des alertes en cas de catastrophe !"
              )
              closeModal()
            }}
          >
            Soumettre
          </button>
        </div>
      </form>
    </>
  )
}

export default MonFormulaire
