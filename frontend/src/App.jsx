import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useMemo, useEffect } from "react"
import MyContext from "./components/MyContext"
import Home from "./pages/Home"
import ChatBox from "./components/ChatBox"

import "./App.css"

function App() {
  const [user, setUser] = useState({}) // A REMPLACER PAR LE STATE VOULU

  // stockage de l'état initial de user, setUser et users via un useMemo
  const valeursFourniesDansMyContextProvider = useMemo(
    () => ({
      user, // A REMPLACER OU AJOUTER EN FONCTION DU BESOIN
      setUser,
    }),
    [user, setUser]
  )

  useEffect(() => {
    console.info("Mettre ici les données à récupérer via un axios")
  })

  return (
    <Router>
      <div className="App">
        <MyContext.Provider value={valeursFourniesDansMyContextProvider}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatBox />} />
          </Routes>
        </MyContext.Provider>

        <p>coucou</p>
      </div>
    </Router>
  )
}

export default App
