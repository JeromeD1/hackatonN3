import React, { useEffect, useState } from "react"

import "./BottomInfoPanel.scss"

import {
  citiesFrance,
  sentencesBFMTV,
} from "../assets/variables/utilityBottomPanel"

const BottomInfoPanel = () => {
  const [sentenceBFM, setSentenceBFM] = useState([])

  useEffect(() => {
    const getRandomIndexS = () =>
      Math.floor(Math.random() * sentencesBFMTV.length)

    const getRandomIndexC = () =>
      Math.floor(Math.random() * citiesFrance.length)

    const addRandomSentence = () => {
      const newIndexS = getRandomIndexS()
      const newIndexC = getRandomIndexC()

      setSentenceBFM((prevSentence) => [
        ...prevSentence,
        {
          sentence: sentencesBFMTV[newIndexS].event,
          city: citiesFrance[newIndexC].city,
        },
      ])
      // Supprimer une phrase après un délai
      const removeTimeout = Math.floor(Math.random() * 60000)
      setTimeout(() => {
        setSentenceBFM((prevSentence) => prevSentence.slice(1))
      }, removeTimeout)
    }

    // Ajouter une phrase dès le début
    addRandomSentence()

    // Ajouter une nouvelle phrase toutes les x millisecondes
    const intervalId = setInterval(addRandomSentence, 20000)

    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId)
  }, [])

  // Utilisez un effet secondaire pour mettre à jour l'affichage des phrases
  useEffect(() => {
    // Vérifiez si les phrases dans `sentencesBFM` ont changé
    // et mettez à jour l'affichage en conséquence
    // Cet effet sera déclenché chaque fois que `sentencesBFM` change
  }, [sentenceBFM])

  return (
    <>
      <div className="pannelInfos">
        <span className="reline"></span>
        <div className="scrollingText">
          <p>
            {sentenceBFM.map((item, index) => (
              <span key={index}>
                {item.sentence} {item.city}
                {index < sentenceBFM.length - 1 && " | "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  )
}

export default BottomInfoPanel
