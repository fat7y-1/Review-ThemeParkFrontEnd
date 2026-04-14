import { useParams } from "react-router-dom"
const Game = ({ games }) => {
  const { id } = useParams()
  let selectedGame
  games.forEach((game) => {
    if (game._id === id) {
      selectedGame = game
    }
  })
  return (
    <div>
      <h1>{selectedGame.name}</h1>
      <img src={selectedGame.image} alt="game image" />
      <p>{selectedGame.desc}</p>
    </div>
  )
}
export default Game
