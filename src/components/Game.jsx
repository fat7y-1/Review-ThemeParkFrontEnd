import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import AddReview from "./AddReview"
import axios from "axios"

const Game = ({ games }) => {
  const [addReview, setAddReview] = useState([])

  useEffect(() => {
    const getReview = async () => {
      try {
        let response = await axios.get("http://localhost:3001/review")
        setAddReview(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getReview()
  }, [])

  const { id } = useParams()
  const selectedGame = games.find((game) => game._id === id)

  if (!selectedGame) return <div>Loading game details...</div>

  return (
    <div>
      <h1>{selectedGame.name}</h1>
      <img src={selectedGame.image} alt="game image" />
      <p>{selectedGame.desc}</p>

      <AddReview addReview={addReview} setAddReview={setAddReview} id={id} />
    </div>
  )
}
export default Game
