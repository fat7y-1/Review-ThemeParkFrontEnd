import { useState } from "react"
import axios from "axios"

<<<<<<< HEAD
const AddReview = ({ addReview, setAddReview, id }) => {
  const init = {
    commit: "",
    rating: "",
    game: id,
=======
const AddReview = ({ addReview, setAddReview, game }) => {
  const init = {
    commit: "",
    rating: 1,
    game: game,
>>>>>>> 713f06489082589bd2f74480d1dcbaad78326d9e
  }

  const [formState, setFormState] = useState(init)

  const handleSubmit = async (event) => {
    event.preventDefault()

<<<<<<< HEAD
    const response = await axios.post("http://localhost:3001/review", formState)
=======
    const response = await axios.post(`http://localhost:3001/review`, formState)
    console.log(response)
>>>>>>> 713f06489082589bd2f74480d1dcbaad78326d9e

    let List = [...addReview]
    List.push(response.data)
    setAddReview(List)

    setFormState(init)
<<<<<<< HEAD
=======
    console.log(formState)
>>>>>>> 713f06489082589bd2f74480d1dcbaad78326d9e
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="commit">comment</label>
      <textarea
        name="commit"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={formState.commit}
      ></textarea>
      <label htmlFor="rating">Rate:</label>
      <select name="rating" onChange={handleChange} value={formState.rating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddReview
