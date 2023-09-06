import React, { useEffect, useState } from "react"

import "./BottomInfoPanel.scss"

import { citiesFrance } from "../assets/variables/citiesFrankreichV2"

const BottomInfoPanel = () => {
  const sentencesBFMTV = [
    {
      id: 1,
      event: "Attention : Une petite tornade est en cours près de la ville de ",
    },
    {
      id: 2,
      event: "Attention : Une  tornade est en cours près de la ville de ",
    },
    {
      id: 3,
      event: "Prudence : Une grosse tornade est en cours près de la ville de ",
    },
    {
      id: 4,
      event:
        "Grande prudence : Une tornade anormalement puissante est en cours près de la ville de ",
    },
    {
      id: 5,
      event:
        "Attention : Un tremblement de Terre de 7 sur l'echelle de Richer a eu lieu près de la ville de ",
    },
    {
      id: 6,
      event:
        "Attention : Un tremblement de Terre de 8 sur l'echelle de Richer a eu lieu près de la ville de ",
    },
    {
      id: 7,
      event:
        "Attention : Un tremblement de Terre de 10 sur l'echelle de Richer a eu lieu près de la ville de ",
    },
    {
      id: 8,
      event:
        "Attention : Un tremblement de Terre de 11 sur l'echelle de Richer a eu lieu près de la ville de ",
    },
    {
      id: 9,
      event:
        "Attention : Un tremblement de Terre de 12 sur l'echelle de Richer a eu lieu près de la ville de ",
    },
    {
      id: 10,
      event: "Prudence : Un incendie ravage les alentours de la ville de ",
    },
    {
      id: 11,
      event:
        "Grande prudence : Un nuage radiactif intense menace la region vers la ville de ",
    },
    {
      id: 12,
      event:
        "Attention : Une pluie acide est prévue d'ici une heure sur la ville de ",
    },
    {
      id: 13,
      event:
        "Attention : Une pluie acide est prévue d'ici deux heures sur la ville de ",
    },
    {
      id: 14,
      event:
        "Prudence : Une tornade est redoutée dans la journée près de la ville de ",
    },
    {
      id: 15,
      event:
        "Grande prudence : Une grosse tornade est redoutée dans la journée près de la ville de ",
    },
    {
      id: 16,
      event: "Attention : Une tornade a ravagée une partie de la ville de ",
    },
    {
      id: 17,
      event:
        "Attention : Une grosse tornade a ravagée une partie de la region et de la ville de ",
    },
    {
      id: 18,
      event:
        "Prudence : Une tempete magnétique est attendue dans l'après-midi près de la ville de ",
    },
    {
      id: 19,
      event: "Attention : Une innondation paralyse la ville de ",
    },
    {
      id: 20,
      event:
        "Prudence : Un cyclone balaie la cote atlantique, notament la ville de  ",
    },
    {
      id: 21,
      event:
        "Grande prudence : Des castors mutants, qui crache de l'acide par les yeux, attaquent la ville de  ",
    },
    // {
    //   id: 22,
    //   event: "Grande prudence : Evitez de sortir, une tempete menace le pays  ",
    // },
  ]

  const [randomIndexS, setRandomIndexS] = useState(0)
  const [sentenceBFM, setSentenceBFM] = useState("")
  const [randomIndexC, setRandomIndexC] = useState(0)
  const [cityName, setCityName] = useState("")

  useEffect(() => {
    const getRandomIndexS = () =>
      Math.floor(Math.random() * sentencesBFMTV.length)

    const intervalIdS = setInterval(() => {
      const newIndexS = getRandomIndexS()
      setRandomIndexS(newIndexS)
      setSentenceBFM(sentencesBFMTV[randomIndexS].event)
    }, 10000)
    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalIdS)

    // Déclencher l'effet uniquement lorsque le tableau de phrases change :
  }, [sentencesBFMTV])
  // }, [])

  useEffect(() => {
    const getRandomIndexC = () =>
      Math.floor(Math.random() * citiesFrance.length)

    const intervalIdC = setInterval(() => {
      const newIndexC = getRandomIndexC()
      setRandomIndexC(newIndexC)
      setCityName(citiesFrance[randomIndexC].city)
    }, 5000)
    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalIdC)

    // Déclencher l'effet uniquement lorsque le tableau de phrases change :
  }, [citiesFrance])
  // }, [])

  return (
    <>
      <div className="pannelInfos">
        <div className="scrollingText">
          <p>
            {" "}
            {sentenceBFM}
            {cityName}{" "}
          </p>
        </div>
      </div>
    </>
  )
}

export default BottomInfoPanel

// return (
//   <>
//     <div className="pannelInfos">
//       <div className="scrollingText">
//         <p>Attention : Une tornade de niveau 3 est en cours près de Lyon</p>
//       </div>
//     </div>
//   </>
