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
    emojiList: [],
    topScore: 0,
    isGameInProgress: true,
  }

  resetGame = () => {
    this.setState({
      emojiList: [],
      isGameInProgress: true,
    })
  }

  renderScoreCard = () => {
    const {emojiList} = this.state
    return <WinOrLoseCard reset={this.resetGame} score={emojiList.length} />
  }

  finishAndSetTopScore = newScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (newScore > newTopScore) {
      newTopScore = newScore
    }
    this.setState({
      topScore: newTopScore,
      emojiList: [],
      isGameInProgress: false,
    })
  }

  addElements = id => {
    const {emojiList} = this.state
    const ElementPresent = emojiList.includes(id)
    if (ElementPresent) {
      this.finishAndSetTopScore(emojiList.length)
    } else {
      if (parseInt(emojiList.length) === parseInt(12)) {
        this.finishAndSetTopScore(emojiList.length)
      }
      this.setState(prevState => ({
        emojiList: [...prevState.emojiList, id],
      }))
    }
  }

  render() {
    const {emojiList, isGameInProgress, topScore} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    return (
      <div className="mainContainer">
        <NavBar
          score={emojiList.length}
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
        <p>{emojiList.length}</p>
      </div>
    )
  }
}

export default EmojiGame
