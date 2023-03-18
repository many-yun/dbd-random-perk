import React from 'react'
import styled from 'styled-components'

const PrettyGoodJobSoFar = () => {
  const clickEvent = () => {
    alert('111')
  }

  return (
    <PrettyGoodJobSoFarWapper>
      <div onClick={clickEvent}>PrettyGoodJobSoFar</div>
    </PrettyGoodJobSoFarWapper>
  )
}

export default PrettyGoodJobSoFar

const PrettyGoodJobSoFarWapper = styled.div`
  color: white;
  width: 200px;
  height: 200px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  right: 0;
  bottom: 0;
`
