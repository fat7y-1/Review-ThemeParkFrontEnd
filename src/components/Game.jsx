import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
<<<<<<< HEAD
import AddReview from "./AddReview"
import axios from "axios"

const Game = ({ games }) => {
  const [addReview, setAddReview] = useState([])

  useEffect(() => {
    const getReview = async () => {
      try {
        let response = await axios.get("http://localhost:3001/review")
=======
import ListReviews from "./ListReviews"
import AddReview from "./AddReview"
import axios from "axios"

const Game = ({ games, reviews }) => {
  const { id } = useParams()
  const [addReview, setAddReview] = useState([])

  const selectedGame = games.find((game) => game._id === id)
  useEffect(() => {
    const getReview = async () => {
      try {
        let response = await axios.get(`http://localhost:3001/review/${id}`)
        console.log(response.data)
>>>>>>> 713f06489082589bd2f74480d1dcbaad78326d9e
        setAddReview(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getReview()
  }, [])

<<<<<<< HEAD
  const { id } = useParams()
  const selectedGame = games.find((game) => game._id === id)

  if (!selectedGame) return <div>Loading game details...</div>
=======
  // console.log(selectedGame._id)
>>>>>>> 713f06489082589bd2f74480d1dcbaad78326d9e

  return (
    <div key={selectedGame._id}>
      <h1>{selectedGame.name}</h1>
      <img src={selectedGame.image} alt="game image" />
      <p>{selectedGame.desc}</p>

<<<<<<< HEAD
      <AddReview addReview={addReview} setAddReview={setAddReview} id={id} />
=======
      <ListReviews addReview={addReview} />

      <AddReview addReview={addReview} setAddReview={setAddReview} game={id} />
>>>>>>> 713f06489082589bd2f74480d1dcbaad78326d9e
    </div>
  )
}
export default Game
