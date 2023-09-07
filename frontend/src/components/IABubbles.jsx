import { useState } from "react"
import bulleIA from "../assets/images/bulleIA.png"
import ReponseIA from "../assets/images/ReponseIA.png"
import "./IABubbles.scss"

function IABubbles() {
  const [inputValue, setInputValue] = useState("")
  const [message, setMessage] = useState("message")
  const [show, setShow] = useState("hidden")

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
    setShow("visible")
    setTimeout(() => {
      setShow("hidden")
    }, 3000)
    // Find first matching event type within the user's input.
    const foundEvent = events.find((event) => loweredValue.includes(event.type))

    if (foundEvent) {
      // Count how many of the found event type exist in the array.
      const count = events.filter(
        (event) => event.type === foundEvent.type
      ).length
      setMessage(`Attention! Il y a ${count} ${foundEvent.type} en approche!`)
    } else {
      setMessage("Besoin de moi ?")
    }
    setInputValue("")
  }

  return (
    <div className="reponseIA">
      <div className="Labulle" style={{ visibility: show }}>
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

export default IABubbles
