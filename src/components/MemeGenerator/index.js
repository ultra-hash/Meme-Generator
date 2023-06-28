import {Component} from 'react'
import {
  OuterContainer,
  MainContainer,
  MemeForm,
  Heading,
  FormInput,
  FormLabel,
  FormSelect,
  FormButton,
  MemeImageContainer,
  LayoutContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    submitted: false,
    memeDetails: {
      imageUrl: '',
      topText: '',
      bottomText: '',
      fontSize: '',
    },
  }

  onChangeText = event => {
    switch (event.target.id) {
      case 'imageUrl':
        this.setState({imageUrl: event.target.value})
        break

      case 'topText':
        this.setState({topText: event.target.value})
        break

      case 'bottomText':
        this.setState({bottomText: event.target.value})
        break

      case 'fontSize':
        this.setState({fontSize: event.target.value})
        break

      default:
        break
    }
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.setState(prevState => ({
      submitted: true,
      memeDetails: {
        imageUrl: prevState.imageUrl,
        topText: prevState.topText,
        bottomText: prevState.bottomText,
        fontSize: prevState.fontSize,
      },
    }))
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSize,
      submitted,
      memeDetails,
    } = this.state
    return (
      <OuterContainer>
        <MainContainer>
          <Heading>Meme Generator</Heading>
          <LayoutContainer>
            {submitted && (
              <MemeImageContainer
                imageUrl={memeDetails.imageUrl}
                fontSize={memeDetails.fontSize}
                data-testid="meme"
              >
                <p>{memeDetails.topText}</p>
                <p>{memeDetails.bottomText}</p>
              </MemeImageContainer>
            )}

            <MemeForm onSubmit={this.onFormSubmit}>
              <FormLabel htmlFor="imageUrl">Image Url</FormLabel>
              <FormInput
                id="imageUrl"
                type="text"
                value={imageUrl}
                onChange={this.onChangeText}
                placeholder="Enter the Image Url"
              />
              <FormLabel htmlFor="topText">Top Text</FormLabel>
              <FormInput
                id="topText"
                type="text"
                value={topText}
                onChange={this.onChangeText}
                placeholder="Enter the Top Text"
              />
              <FormLabel htmlFor="bottomText">Bottom Text</FormLabel>
              <FormInput
                id="bottomText"
                type="text"
                value={bottomText}
                onChange={this.onChangeText}
                placeholder="Enter the Bottom Text"
              />
              <FormLabel htmlFor="fontSize">Font Size</FormLabel>
              <FormSelect
                id="fontSize"
                onChange={this.onChangeText}
                value={fontSize}
              >
                {fontSizesOptionsList.map(item => (
                  <option value={item.optionId} key={item.optionId}>
                    {item.displayText}
                  </option>
                ))}
              </FormSelect>
              <FormButton type="submit">Generate</FormButton>
            </MemeForm>
          </LayoutContainer>
        </MainContainer>
      </OuterContainer>
    )
  }
}

export default MemeGenerator
