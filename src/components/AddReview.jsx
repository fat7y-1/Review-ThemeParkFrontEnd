import { useState } from "react"
import axios from "axios"

const AddReview = ({ addReview, setAddReview, game }) => {
  const init = {
    commit: "",
    rating: 1,
    game: game,
  }

  const [formState, setFormState] = useState(init)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await axios.post(`http://localhost:3001/review`, formState)
    console.log(response)

    let List = [...addReview]
    List.push(response.data)
    setAddReview(List)

    setFormState(init)
    console.log(formState)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="commit" className="design">
        comment
      </label>
      <br />
      <textarea
        name="commit"
        cols="30"
        rows="5"
        onChange={handleChange}
        value={formState.commit}
      ></textarea>
      <br />
      <label htmlFor="rating" className="design">
        Rate:
      </label>
      <select name="rating" onChange={handleChange} value={formState.rating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <br />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddReview
