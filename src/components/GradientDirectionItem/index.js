// Write your code here
import {ChangeButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachGradient, activeButtonId, onClickDirection} = props
  const {displayText, value} = eachGradient
  const onClickDirectionButton = () => {
    onClickDirection(value)
  }

  return (
    <ListItem>
      <ChangeButton
        onClick={onClickDirectionButton}
        type="button"
        activeButtonId={activeButtonId}
      >
        {displayText}
      </ChangeButton>
    </ListItem>
  )
}

export default GradientDirectionItem
