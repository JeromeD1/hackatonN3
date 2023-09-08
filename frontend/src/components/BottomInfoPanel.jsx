import React, { useEffect, useState } from "react"

import "./BottomInfoPanel.scss"

import {
  citiesFrance,
  sentencesBFMTV,
  ending,
} from "../assets/variables/utilityBottomPanel"

const BottomInfoPanel = () => {
  const [sentenceBFM, setSentenceBFM] = useState([])

  useEffect(() => {
    const getRandomIndexS = () =>
      Math.floor(Math.random() * sentencesBFMTV.length)

    const getRandomIndexC = () =>
      Math.floor(Math.random() * citiesFrance.length)

    const getRandomIndexE = () => Math.floor(Math.random() * ending.length)

    const addRandomSentence = () => {
      const newIndexS = getRandomIndexS()
      const newIndexC = getRandomIndexC()
      const newIndexE = getRandomIndexE()

      setSentenceBFM((prevSentence) => [
        ...prevSentence,
        {
          sentence: sentencesBFMTV[newIndexS].event,
          city: citiesFrance[newIndexC].city,
          end: ending[newIndexE].quote,
        },
      ])
      // Supprimer une phrase après un délai
      setTimeout(() => {
        setSentenceBFM((prevSentence) => prevSentence.slice(1))
      }, 60000)
    }

    // Ajouter une phrase dès le début
    addRandomSentence()

    // Ajouter une nouvelle phrase toutes les x millisecondes
    const intervalId = setInterval(addRandomSentence, 30000)

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
        <div className="scrollingText">
          <p>
            {sentenceBFM.map((item, index) => (
              <span key={index}>
                {item.sentence} {item.city} {item.end}
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
