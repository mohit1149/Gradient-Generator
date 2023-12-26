import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  Heading,
  FormAndMemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomInput,
  GenerateButton,
  UnOrderList,
  FlexContainerLeft,
  FlexContainerRight,
  FlexContainer,
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
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',

    activeColorOptionId: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
  }

  onChangeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {firstColorInput, secondColorInput} = this.state

    this.setState({
      firstColor: firstColorInput,
      secondColor: secondColorInput,
    })
  }

  onClickDirection = value => {
    this.setState({activeColorOptionId: value})
  }

  renderMemeGeneratorForm = () => {
    const {
      firstColorInput,
      secondColorInput,
      firstColor,
      secondColor,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <FlexContainer>
          <FlexContainerLeft>
            <TextContent>{firstColor}</TextContent>
            <CustomInput
              type="color"
              value={firstColorInput}
              onChange={this.onChangeFirstColor}
            />
          </FlexContainerLeft>

          <FlexContainerRight>
            <TextContent>{secondColor}</TextContent>
            <CustomInput
              type="color"
              value={secondColorInput}
              onChange={this.onChangeSecondColor}
            />
          </FlexContainerRight>
        </FlexContainer>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  render() {
    const {activeColorOptionId, firstColor, secondColor} = this.state

    return (
      <AppContainer
        firstClass={firstColor}
        secondClass={secondColor}
        currentDirection={activeColorOptionId}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <TextContent>Choose Direction</TextContent>
        <UnOrderList>
          {gradientDirectionsList.map(eachGradientOption => (
            <GradientDirectionItem
              key={eachGradientOption.directionId}
              eachGradient={eachGradientOption}
              activeButtonId={eachGradientOption.value === activeColorOptionId}
              onClickDirection={this.onClickDirection}
            />
          ))}
        </UnOrderList>

        <TextContent>Pick the Colors</TextContent>
        <FormAndMemeContainer>
          {this.renderMemeGeneratorForm()}
        </FormAndMemeContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
