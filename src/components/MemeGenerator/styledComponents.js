// Style your components here
import styled from 'styled-components'

export const OuterContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const MainContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`
export const LayoutContainer = styled.div`
  padding: 10px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`

export const MemeForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const FormInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #d7dfe9;
  color: #5a7184;
`

export const FormLabel = styled.label`
  margin-bottom: 5px;
  margin-top: 10px;
`

export const FormSelect = styled.select`
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #d7dfe9;
`

export const FormButton = styled.button`
  padding: 15px 35px;
  color: #ffffff;
  background-color #0b69ff;
  border: 0;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  align-self: flex-start;
  margin: 10px 0;
`

export const Heading = styled.h1`
  text-align: center;
  color: #35469c;
  @media screen and (min-width: 768px) {
    text-align: left;
  }
`
export const MemeImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: ${props => props.fontSize}px;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 50%;
    order: 2;
    box-sizing: border-box;
  }
`
