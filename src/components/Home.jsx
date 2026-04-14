import { Link } from "react-router-dom"
const Home = ({ games }) => {
  return (
    <div>
      <h1>helllll</h1>
      {games.map((game) => (
        <Link to={`/${game._id}`} key={game._id}>
          <div key={game._id}>
            <h1>{game.name}</h1>
            <img src={game.image} alt={game.name} />
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Home
