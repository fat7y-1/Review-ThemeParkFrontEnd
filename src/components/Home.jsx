const Home = ({ games }) => {
  return (
    <div>
      <h1>helllll</h1>
      {games.map((game) => (
        <div key={game._id}>
          <h1>{game.name}</h1>
        </div>
      ))}
    </div>
  )
}
export default Home
