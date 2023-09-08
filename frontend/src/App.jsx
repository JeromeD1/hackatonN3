import { Routes, Route } from "react-router-dom"
import { useState, useMemo, useEffect } from "react"
import MyContext from "./components/MyContext"
import NavBar from "./components/navBar"
import Home from "./pages/Home"

import "./App.css"

function App() {
  const [blind, setBlind] = useState(0)
  const [deaf, setDeaf] = useState(0)
  const [handicap, setHandicap] = useState(0)
  const [autistic, setAutistic] = useState(0)

  // stockage de l'état initial de user, setUser et users via un useMemo
  const valeursFourniesDansMyContextProvider = useMemo(
    () => ({
      blind,
      setBlind,
      deaf,
      setDeaf,
      handicap,
      setHandicap,
      autistic,
      setAutistic,
    }),
    [
      blind,
      setBlind,
      deaf,
      setDeaf,
      handicap,
      setHandicap,
      autistic,
      setAutistic,
    ]
  )

  useEffect(() => {
    console.info("Mettre ici les données à récupérer via un axios")
  })

  return (
    <div className="App">
      <MyContext.Provider value={valeursFourniesDansMyContextProvider}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </div>
  )
}

export default App
