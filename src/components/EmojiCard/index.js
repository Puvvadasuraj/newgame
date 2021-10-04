import './index.css'

const EmojiItem = props => {
  const {imgValues, add} = props
  const {id, emojiName, emojiUrl} = imgValues
  const implement = () => {
    add(id)
  }
  return (
    <li>
      <button type="button" className="emojiBut" onClick={implement}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiItem
