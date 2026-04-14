<<<<<<< HEAD
const ListReviews = ({ addReview }) => {
=======
const ListReviews = ({ addReview, handleDeleteReview }) => {
>>>>>>> a13399e4b77578cc9d05fb53ad34a6e9c45220c5
  // console.log(`selectedGame: ${addReview}`)
  // console.log(`reviews: ${reviews}`)
  return (
    <div>
      <h1>Game Reviews</h1>
      {addReview.map((review) => (
        <div key={review._id}>
          <h3>{review.commit}</h3>
<<<<<<< HEAD
          <button>Delete Reviews </button>
=======
          <button onClick={() => handleDeleteReview(review._id)}>
            Delete Review
          </button>
>>>>>>> a13399e4b77578cc9d05fb53ad34a6e9c45220c5
        </div>
      ))}
    </div>
  )
}
export default ListReviews
