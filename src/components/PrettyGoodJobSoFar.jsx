import React from 'react'
import styled from 'styled-components'

const PrettyGoodJobSoFar = () => {
  const clickEvent = () => {
    alert('111')
  }

  return (
    <PrettyGoodJobSoFarWapper>
      <div onClick={clickEvent}>
        귀찮아서 설명은 지웠습니다 ㅈㅅ합니다. 데바데 접은지 2년됏음 <br />
        살인마 애드온 추가예정
      </div>
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
