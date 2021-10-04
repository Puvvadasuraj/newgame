/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiItem from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  resetGame = () => {
    this.setState({
      clickedList: [],
      isGameInProgress: true,
    })
  }

  renderScoreCard = () => {
    const {clickedList} = this.state
    const {emojisList} = this.props
    const isWon = clickedList.length === emojisList.length
    return (
      <WinOrLoseCard
        won={isWon}
        resetBut={this.resetGame}
        score={clickedList.length}
      />
    )
  }

  finishAndSetTopScore = newScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (newScore > newTopScore) {
      newTopScore = newScore
    }
    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  addElements = id => {
    const {clickedList} = this.state
    const ElementPresent = clickedList.includes(id)
    if (ElementPresent) {
      this.finishAndSetTopScore(clickedList.length)
    } else {
      if (parseInt(clickedList.length) === parseInt(12)) {
        this.finishAndSetTopScore(clickedList.length)
      }
      this.setState(prevState => ({
        clickedList: [...prevState.clickedList, id],
      }))
    }
  }

  render() {
    const {clickedList, isGameInProgress, topScore} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    return (
      <div className="mainContainer">
        <NavBar
          score={clickedList.length}
          top={topScore}
          progress={isGameInProgress}
        />
        <div className="bottomContainer">
          {isGameInProgress ? (
            <ul className="ulContainer">
              {shuffledEmojisList().map(each => (
                <EmojiItem
                  imgValues={each}
                  key={each.id}
                  add={this.addElements}
                />
              ))}
            </ul>
          ) : (
            this.renderScoreCard()
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
