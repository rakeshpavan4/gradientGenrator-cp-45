import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.gradientColor});
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ededed;
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ededed;
`

export const UnOrderList = styled.ul`
  display: flex;
  padding-left: 0px;
  justify-content: space-between;
  align-items: center;
  width: 40vw;
`
export const ColorPara = styled(Para)`
  font-size: 20px;
`
export const InputColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 26vw;
`
export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputColor = styled.input`
  width: 80px;
  height: 40px;
  border: none;
  border-width: 0px;
`

export const ButtonContainer = styled.div``

export const ButtonEle = styled.button`
  border-radius: 6px;
  background-color: #00c9b7;
  opacity: 0.5;
  padding: 6px 20px 6px 20px;
  margin-top: 30px;
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  border: none;
`
