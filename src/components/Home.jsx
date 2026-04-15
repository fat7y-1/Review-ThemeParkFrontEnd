import { Link } from "react-router-dom"
const Home = ({ games }) => {
  return (
    <>
      <h1 className="gamesh1">Park Games</h1>
      <div className="games">
        {games.map((game) => (
          <Link to={`/${game._id}`} key={game._id} className="link">
            <div key={game._id} className="gameBox">
              <img src={game.image} alt={game.name} />
              <h2>{game.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
export default Home
