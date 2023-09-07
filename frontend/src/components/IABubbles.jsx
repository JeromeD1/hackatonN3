// import { useState } from "react"
import bulleIA from "../assets/images/bulleIA.png"
import ReponseIA from "../assets/images/ReponseIA.png"
import "./IABubbles.scss"

function IABubble() {
  return (
    <div className="reponseIA">
      <div style={{ display: postMessage.photoVisible ? "none" : "flex" }}>
        <img className="bulle" src={bulleIA} alt="hi" />
        <h4>message</h4>
      </div>
      <img className="IA" src={ReponseIA} alt="hi" />
    </div>
  )
}
export default IABubble
