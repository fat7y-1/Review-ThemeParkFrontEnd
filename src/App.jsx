import { useState, useEffect } from "react"
import Home from "./components/Home"
import axios from "axios"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Game from "./components/Game"

function App() {
  const [games, setGames] = useState([])
  useEffect(() => {
    const getGames = async () => {
      try {
        let response = await axios.get("http://localhost:3001/game")
        console.log(response.data)
        setGames(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getGames()
  }, [])
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home games={games} />} />
          <Route path="/:id" element={<Game games={games} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
