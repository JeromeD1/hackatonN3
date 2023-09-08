import { useState, useEffect } from "react"
import bulleIA from "../assets/images/bulleIA.png"
import imageIAPouceBas from "../assets/images/imageIAPouceBas.png"
import pouceHaut from "../assets/images/pouceHaut.png"

import "./IABubbles.scss"

function IABubble({ onEnterPress }) {
  const [inputValue, setInputValue] = useState("")
  const [message, setMessage] = useState("posez vos questions")
  const [displayedMessage, setDisplayedMessage] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [show, setShow] = useState("hidden")
  const [pouce, setPouce] = useState(pouceHaut)

  const events = [
    { type: "tornade" },
    { type: "meteorite" },
    { type: "volcan" },
    { type: "incendie" },
    { type: "tsunami" },
    { type: "radioactivite" },
    { type: "tornade" },
    { type: "meteorite" },
    { type: "volcan" },
    { type: "incendie" },
    { type: "tsunami" },
    { type: "radioactivite" },
    { type: "tornade" },
    { type: "meteorite" },
    { type: "tornade" },
    { type: "meteorite" },
    { type: "volcan" },
    { type: "incendie" },
    { type: "tsunami" },
    { type: "radioactivite" },
    { type: "tornade" },
    { type: "meteorite" },
    { type: "volcan" },
    { type: "incendie" },
    { type: "tornade" },
    { type: "meteorite" },
    { type: "volcan" },
    { type: "incendie" },
    { type: "tsunami" },
    { type: "radioactivite" },
    { type: "tornade" },
    { type: "meteorite" },
    { type: "volcan" },
    { type: "incendie" },
  ]

  // const changeImage = () => {
  //   setPouce = true
  // }

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase())
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendSearch()

      if (onEnterPress) {
        onEnterPress()
      }
    }
  }

  const handleSendSearch = () => {
    const loweredValue = inputValue.toLowerCase()
    setShow("visible")
    setTimeout(() => {
      setShow("hidden")
    }, 20000)
    let newMessage = "posez vos questions"
    if (loweredValue.includes("abri")) {
      newMessage =
        "cliquer sur votre position pour connaitre l'abri le plus proche"
    } else if (loweredValue.includes("sécurité")) {
      newMessage =
        "cliquer sur le bouton afficher les abris pour voir les abris sur la carte"
    } else if (loweredValue.includes("sauvé")) {
      newMessage = "Non, vous allez mourir!"
      setPouce(imageIAPouceBas)
      setTimeout(() => {
        setPouce(pouceHaut)
      }, 5000)
    } else {
      const foundEvent = events.find((event) =>
        loweredValue.includes(event.type)
      )
      if (foundEvent) {
        const count = events.filter(
          (event) => event.type === foundEvent.type
        ).length
        newMessage = `Attention! Il y a ${count} ${foundEvent.type}s en approche!`
      }
    }

    setMessage(newMessage)
    setInputValue("")

    // This part checks if the `onEnterPress` callback exists
    // and passes the decided message to it.
    if (onEnterPress) {
      onEnterPress(newMessage)
    }
  }

  useEffect(() => {
    setDisplayedMessage("")
    setCurrentIndex(0)
  }, [message])

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedMessage(
          (prevMessage) => prevMessage + message[currentIndex]
        )
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, message])

  return (
    <div className="reponseIA">
      {/* <div style={{ display: postMessage.photoVisible ? "none" : "flex" }}> */}
      <div className="Labulle" style={{ visibility: show }}>
        <img className="bulle" src={bulleIA} alt="Bulle IA" />
        <h4>{displayedMessage}</h4>
      </div>
      <img className="IA" src={pouce} alt="Réponse IA" />
      <input
        className="barreRecherche"
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Ask to the AI..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {/* <button onClick={handleSendSearch}>Send</button> */}
    </div>
  )
}

export default IABubble
