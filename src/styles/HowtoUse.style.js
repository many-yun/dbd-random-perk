import styled from 'styled-components'

export const HowtoUseWrapper = styled.div`
  font-size: 1.05rem;
  line-height: 1.6rem;
  word-break: keep-all;
  color: rgba(255, 255, 255, 0.7);

  & div {
    background-color: rgba(255, 255, 255, 0.13);
  }
`

export const HowToUseLever = styled.div`
  position: absolute;
  right: -32%;
  top: 50px;
  padding: 20px;
  border-radius: 0 20px 20px 20px;
  word-break: keep-all;
`

export const HowToUseItemAndOffering = styled.div`
  position: absolute;
  left: -38%;
  top: 340px;
  padding: 20px;
  border-radius: 20px 0 20px 20px;
  word-break: keep-all;
  text-align: right;
  width: 270px;
`

export const HowToUseCheckbox = styled.div`
  position: absolute;
  left: -40%;
  bottom: 120px;
  padding: 20px;
  border-radius: 20px 0 20px 20px;
  text-align: right;
`

export const ImageWarning = styled.p`
  position: absolute;
  font-size: 0.85rem;
  margin-top: 2px;
`
