import { useState, useEffect } from "react"
import bulleIA from "../assets/images/bulleIA.png"
import ReponseIA from "../assets/images/ReponseIA.png"
import "./IABubbles.scss"

function IABubble({ onEnterPress }) {
  const [inputValue, setInputValue] = useState("")
  const [message, setMessage] = useState("posez vos questions")
  const [displayedMessage, setDisplayedMessage] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

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
    if (loweredValue.includes("abri")) {
      setMessage(
        "cliquer sur votre position pour connaitre l'abri le plus proche"
      )
      setInputValue("")
      return
    }
    if (loweredValue.includes("securite")) {
      setMessage(
        "cliquer sur le bouton afficher les abris pour voir les abris sur la carte"
      )
      setInputValue("")
      return
    }

    const foundEvent = events.find((event) => loweredValue.includes(event.type))
    if (foundEvent) {
      const count = events.filter(
        (event) => event.type === foundEvent.type
      ).length
      setMessage(`Attention! Il y a ${count} ${foundEvent.type}s en approche!`)
    } else {
      setMessage("posez vos questions")
    }
    setInputValue("")
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
      <div style={{ display: postMessage.photoVisible ? "none" : "flex" }}>
        <img className="bulle" src={bulleIA} alt="Bulle IA" />
        <h4>{displayedMessage}</h4>
      </div>
      <img className="IA" src={ReponseIA} alt="Réponse IA" />
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
