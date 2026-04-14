const ListReviews = ({ addReview }) => {
  // console.log(`selectedGame: ${addReview}`)
  // console.log(`reviews: ${reviews}`)
  return (
    <div>
      <h1>Game Reviews</h1>
      {addReview.map((review) => (
        <div key={review._id}>
          <h3>{review.commit}</h3>
          <button>Delete Reviews</button>
        </div>
      ))}
    </div>
  )
}
export default ListReviews
