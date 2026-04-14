import { useState, useEffect } from "react"
import Home from "./components/Home"
import axios from "axios"
import "./App.css"

function App() {
  const [games, setGames] = useState([])
  useEffect(() => {
    const getGames = async () => {
      try {
        let response = await axios.get("http://localhost:3001/game")
        console.log(response)
        setGames(response)
      } catch (err) {
        console.log(err)
      }
    }

    getGames()
  }, [])
  return (
    <>
      <div>
        <Home games={games} />
      </div>
    </>
  )
}

export default App
