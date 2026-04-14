<<<<<<< HEAD
const ListReviews = ({ addReview, handleDeleteReview }) => {
=======
import axios from "axios"

const ListReviews = ({ addReview, setAddReview }) => {
>>>>>>> de568d306838f0c0910e704964252ab2ae6fb008
  // console.log(`selectedGame: ${addReview}`)
  console.log(`reviews: ${addReview}`)

  const deleteReview = async (review) => {
    try {
      await axios.delete(`http://localhost:3001/review/${review._id}`)

      const updatedList = addReview.filter((rev) => review._id !== rev._id)
      console.log(updatedList)
      setAddReview(updatedList)
    } catch (error) {
      throw error
    }
  }

  return (
    <div>
      <h1>Game Reviews</h1>
      {addReview.map((review) => (
        <div key={review._id}>
<<<<<<< HEAD
          <h3>{review.commit}</h3>
          <button onClick={() => handleDeleteReview(review._id)}>
            Delete Review
          </button>
=======
          <h3>{review._id}</h3>
          <button onClick={() => deleteReview(review)}>Delete Review</button>
          {/* <button onClick={() => deleteReview(id)}>Delete Review</button> */}
>>>>>>> de568d306838f0c0910e704964252ab2ae6fb008
        </div>
      ))}
    </div>
  )
}
export default ListReviews
