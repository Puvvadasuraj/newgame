import './index.css'

const WinOrLoseCard = props => {
  const {resetBut, score, won} = props
  let text
  let img
  let label
  if (won) {
    text = 'You Won'
    img = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    label = 'Best Score'
  } else {
    text = 'You Lose'
    img = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    label = 'Score'
  }
  return (
    <div className="winContainer">
      <div>
        <h1 className="text">{text}</h1>
        <p className="score">{label}</p>
        <p className="scoreText">{score}/12</p>
        <button type="button" className="resetBut" onClick={resetBut}>
          Play Again
        </button>
      </div>
      <img src={img} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
