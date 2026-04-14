const ListReviews = ({ addReview, handleDeleteReview }) => {
  // console.log(`selectedGame: ${addReview}`)
  // console.log(`reviews: ${reviews}`)
  return (
    <div>
      <h1>Game Reviews</h1>
      {addReview.map((review) => (
        <div key={review._id}>
          <h3>{review.commit}</h3>
          <h4>Rate: {review.rating}</h4>
          <button onClick={() => handleDeleteReview(review._id)}>
            Delete Review
          </button>
        </div>
      ))}
    </div>
  )
}
export default ListReviews
