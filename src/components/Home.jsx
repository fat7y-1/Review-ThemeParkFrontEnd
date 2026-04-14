const Home = (props) => {
  return (
    <div>
      <h1>helllll</h1>
      {props.games.map((game) => (
        <div>
          <h1 style={{ color: "white" }}>{game.name}</h1>
        </div>
      ))}
    </div>
  )
}
export default Home
