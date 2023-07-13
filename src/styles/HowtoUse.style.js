import styled from 'styled-components'

export const HowtoUseWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  line-height: 1.6rem;
  word-break: keep-all;
  color: rgba(255, 255, 255, 0.7);
  z-index: 0;

  & div {
    background-color: rgba(255, 255, 255, 0.13);
    font-size: 0.9rem;
    padding: 20px;

    @media screen and (max-width: 1600px) {
      padding: 15px;
    }
  }
`

export const HowToUseLever = styled.div`
  position: absolute;
  left: 70%;
  top: 10vh;
  border-radius: 0 20px 20px 20px;
  word-break: keep-all;
`

export const HowToUseItemAndOffering = styled.div`
  position: absolute;
  right: 70%;
  bottom: 40vh;
  padding: 20px;
  border-radius: 20px 0 20px 20px;
  word-break: keep-all;
  text-align: right;
`

export const HowToUseCheckbox = styled.div`
  position: absolute;
  right: 70%;
  bottom: 15vh;
  padding: 20px;
  border-radius: 20px 0 20px 20px;
  text-align: right;
`

export const ImageWarning = styled.p`
  position: absolute;
  font-size: 0.85rem;
  left: 10px;
  bottom: 10px;
`
