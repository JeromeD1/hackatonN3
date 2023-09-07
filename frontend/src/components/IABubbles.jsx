import { useState } from "react"
import bulleIA from "../assets/images/bulleIA.png"
import ReponseIA from "../assets/images/ReponseIA.png"
import "./IABubbles.scss"

function IABubble() {
  const [inputValue, setInputValue] = useState("")
  const [message, setMessage] = useState("message")

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
  const handleSendSearch = () => {
    const loweredValue = inputValue.toLowerCase()
    const foundEvent = events.find((event) => loweredValue.includes(event.type))

    if (foundEvent) {
      const count = events.filter(
        (event) => event.type === foundEvent.type
      ).length
      setMessage(`Attention! Il y a ${count} ${foundEvent.type} en approche!`)
    } else {
      setMessage("message")
    }
    setInputValue("")
  }

  return (
    <div className="reponseIA">
      <div style={{ display: postMessage.photoVisible ? "none" : "flex" }}>
        <img className="bulle" src={bulleIA} alt="Bulle IA" />
        <h4>{message}</h4>
      </div>
      <img className="IA" src={ReponseIA} alt="Réponse IA" />
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Ask to the AI..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleSendSearch}>Send</button>
    </div>
  )
}

export default IABubble
