import React from 'react'
import styled from 'styled-components'
import Spinner from '../assets/spinner.gif'

const Loading = () => {
  return (
    <Background>
      <img src={Spinner} />
    </Background>
  )
}
export default Loading

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.5;

  & img {
    width: 100px;
  }
`
