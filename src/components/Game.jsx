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
  console.log(selectedGame.desc)
  useEffect(() => {
    const getReview = async () => {
      try {
        let response = await axios.get(`http://localhost:3001/review/${id}`)
        // console.log(response.data)
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
      // console.log("Review deleted successfully")
    } catch (err) {
      console.log("Error deleting review:", err)
    }
  }
  // console.log(selectedGame._id)

  return (
    <div className="mainDiv" height="100px">
      <Link to={"/"}>
        {/* <h5>Back</h5> */}
        <img
          src="https://cdn-icons-png.flaticon.com/128/507/507257.png"
          alt="back"
          height="25px"
          className="backIcon"
        />
      </Link>

      <div key={selectedGame._id}>
        <h1 className="design">{selectedGame.name}</h1>
        <br />
        <img src={selectedGame.image} alt="game image" className="game-image" />
        <br />
        <p className="design">{selectedGame.desc}</p>
        <br />
        <hr />
        {/* <br /> */}

        <AddReview
          addReview={addReview}
          setAddReview={setAddReview}
          game={id}
        />
        <br />
        {addReview.length === 0 ? (
          <h1 className="design">NO REVIEW</h1>
        ) : (
          <ListReviews
            addReview={addReview}
            handleDeleteReview={handleDeleteReview}
          />
        )}
      </div>
      <br />
      <br />
    </div>
  )
}
export default Game
