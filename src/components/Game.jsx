import { useParams } from "react-router-dom"
const Game = ({ games }) => {
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
