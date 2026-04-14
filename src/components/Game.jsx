import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import ListReviews from "./ListReviews"
import AddReview from "./AddReview"
import axios from "axios"

const Game = ({ games }) => {
  const { id } = useParams()
  const [addReview, setAddReview] = useState([])

  const selectedGame = games.find((game) => game._id === id)
  useEffect(() => {
    const getReview = async () => {
      try {
        let response = await axios.get(`http://localhost:3001/review/${id}`)
        console.log(response.data)
        setAddReview(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    getReview()
  }, [])

  // console.log(selectedGame._id)

  const handleDeleteReview = async (reviewId) => {
    try {
      await axios.delete(`http://localhost:3001/review/${reviewId}`)
      setAddReview(addReview.filter((review) => review._id !== reviewId))
      console.log("Review deleted successfully")
    } catch (err) {
      console.log("Error deleting review:", err)
    }
  }
  // console.log(selectedGame._id)

  return (
    <>
      <Link to={"/"}>
        <h5>Back</h5>
      </Link>

      <div key={selectedGame._id}>
        <h1>{selectedGame.name}</h1>
        <img src={selectedGame.image} alt="game image" />
        <p>{selectedGame.desc}</p>

        <ListReviews
          addReview={addReview}
          handleDeleteReview={handleDeleteReview}
        />

        <AddReview
          addReview={addReview}
          setAddReview={setAddReview}
          game={id}
        />
      </div>
    </>
  )
}
export default Game
