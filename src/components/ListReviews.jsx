const ListReviews = ({ addReview, handleDeleteReview }) => {
  // console.log(`selectedGame: ${addReview}`)
  // console.log(`reviews: ${reviews}`)
  return (
    <div>
      <h1 className="design">Game Reviews</h1>
      {addReview.map((review) => (
        <div key={review._id}>
          <h3 className="design">{review.commit}</h3>
          <h4 className="design">Rate: {review.rating}</h4>
          <button onClick={() => handleDeleteReview(review._id)}>
            Delete Review
          </button>
        </div>
      ))}
    </div>
  )
}
export default ListReviews
