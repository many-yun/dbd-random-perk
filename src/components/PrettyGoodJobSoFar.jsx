import React from 'react'
import styled from 'styled-components'

const PrettyGoodJobSoFar = () => {
  const clickEvent = () => {
    alert('111')
  }

  return (
    <PrettyGoodJobSoFarWapper>
      <div onClick={clickEvent}>
        데이터 지옥에서 구해준 백엔드 개발자께 감사드립니다.
        <br />
        <br />
        사이트 내 모든 내용은 나무위키에서 가져옵니다.
        <br />
        나무위키 내의 내용 수정에 따라 오류가 생길 수 있습니다.
        <br />
        <br />
        오류 발견 시 최대한 빠른 시일 내에 수정하겠습니다.
      </div>
    </PrettyGoodJobSoFarWapper>
  )
}

export default PrettyGoodJobSoFar

const PrettyGoodJobSoFarWapper = styled.div`
  color: white;
  width: 250px;
  height: 200px;
  position: absolute;
  padding: 10px;
  right: 0;
  bottom: 0;
  font-size: 0.95rem;
  word-break: keep-all;
  text-align: right;
`
