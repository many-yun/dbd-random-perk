import React from 'react'
import styled from 'styled-components'

const PrettyGoodJobSoFar = () => {
  const clickEvent = () => {
    alert('111')
  }

  return (
    <PrettyGoodJobSoFarWapper>
      <div>
        캐릭터 개별 선택시 기본 캐릭터 <br />
        퍽이 나오지 않는 오류가 있었습니다.
        <br />
        <br />
        기본 퍽이 나오지 않는다면 캐릭터 섹션에서 "전체선택/해제" 버튼을 한번씩 클릭해주세요.
        <br />
        <br />
        Last update: 24.11.06
      </div>
    </PrettyGoodJobSoFarWapper>
  )
}

export default PrettyGoodJobSoFar

const PrettyGoodJobSoFarWapper = styled.div`
  color: white;
  width: 250px;
  position: absolute;
  padding: 10px;
  right: 0;
  bottom: 0;
  font-size: 0.95rem;
  word-break: keep-all;
  text-align: right;
  line-height: 1.2rem;
`
