import { Link } from "react-router-dom"
const Home = ({ games }) => {
  return (
    <div>
      <h1>hell</h1>
      {games.map((game) => (
        <Link to={`/${game._id}`}>
          <div key={game._id}>
            <h1>{game.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default Home
