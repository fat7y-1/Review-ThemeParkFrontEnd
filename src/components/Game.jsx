import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const Game = ({ games }) => {
  let navigate = useNavigate()
  const deleteButton=async(event , id)=>{
    event.preventDefault()
    let response = await axios.get(`http://localhost:3001/game/${id}`)
    navigate("/")

  }
  const { id } = useParams()
  let selectedGame
  games.forEach((game) => {
    if (game._id === id) {
      selectedGame = game
      return
    }
  })
  return <h1>{selectedGame.name}</h1>
}
export default Game
