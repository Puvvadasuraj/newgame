import './index.css'

const NavBar = props => {
  const {score, top, progress} = props
  return (
    <div className="navContainer">
      <div className="navPart1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="img"
        />
        <h1>Emoji Game</h1>
      </div>
      {progress && (
        <div className="navPart2">
          <p className="scoreElement">Score: {score}</p>
          <p>Top Score: {top}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
