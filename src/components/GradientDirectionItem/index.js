// Write your code here
import {ListItem, ButtonEle} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, isActiveBtn, activeDirectionBtn} = props

  const activeBtn = isActiveBtn ? 1 : 0.5

  const onClickDirectionBtn = () => {
    activeDirectionBtn(eachItem.directionId)
  }

  return (
    <ListItem>
      <ButtonEle bgOpacity={activeBtn} onClick={onClickDirectionBtn}>
        {eachItem.displayText}
      </ButtonEle>
    </ListItem>
  )
}

export default GradientDirectionItem
