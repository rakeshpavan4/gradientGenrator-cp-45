import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  Heading,
  Para,
  UnOrderList,
  ColorPara,
  InputColorsContainer,
  ColorContainer,
  InputColor,
  ButtonContainer,
  ButtonEle,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradient: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    activeGradientValues: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  activeDirectionBtn = id => {
    this.setState({
      activeGradient: id,
    })
  }

  onClickGenerateBtn = () => {
    const {color1, color2, activeGradient} = this.state
    console.log(activeGradient)

    const gradientValue = gradientDirectionsList.filter(
      each => each.directionId === activeGradient,
    )
    console.log(gradientValue)

    const {value} = gradientValue[0]

    this.setState({activeGradientValues: `to ${value}, ${color1}, ${color2}`})
  }

  render() {
    const {activeGradient, color1, color2, activeGradientValues} = this.state
    console.log(activeGradientValues)
    return (
      <GradientContainer
        gradientColor={activeGradientValues}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>

        <UnOrderList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              eachItem={each}
              isActiveBtn={activeGradient === each.directionId}
              activeDirectionBtn={this.activeDirectionBtn}
            />
          ))}
        </UnOrderList>

        <ColorPara>Pick the Colors</ColorPara>

        <InputColorsContainer>
          <ColorContainer>
            <ColorPara>{color1}</ColorPara>
            <InputColor
              type="color"
              onChange={this.onChangeColor1}
              value={color1}
            />
          </ColorContainer>

          <ColorContainer>
            <ColorPara>{color2}</ColorPara>
            <InputColor
              type="color"
              onChange={this.onChangeColor2}
              value={color2}
            />
          </ColorContainer>
        </InputColorsContainer>

        <ButtonContainer>
          <ButtonEle onClick={this.onClickGenerateBtn}>Generate</ButtonEle>
        </ButtonContainer>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
