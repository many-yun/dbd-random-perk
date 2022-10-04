import React from 'react'
import styled from 'styled-components'

const HowtoUse = () => {
  return (
    <div>
      <HowToUseLever>
        레버를 눌러 랜덤으로 퍽을 뽑을 수 있습니다. <br />각 아이콘을 눌러 개별 뽑기가 가능합니다.
      </HowToUseLever>
      <HowToUseCheckbox>
        소유하고있는 캐릭터를 체크하여 <br />
        퍽을 제한할 수 있습니다.
        <br />
        체크 여부는 사용자 브라우저의 로컬 <br />
        저장소에 저장되어 데이터가 유지됩니다.
      </HowToUseCheckbox>
    </div>
  )
}

export default HowtoUse

const HowToUseLever = styled.div`
  position: absolute;
  right: -47%;
  top: 50px;
  background-color: rgba(255, 255, 255, 0.13);
  padding: 20px;
  border-radius: 0 20px 20px 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.4rem;
  word-break: keep-all;
`

const HowToUseCheckbox = styled.div`
  position: absolute;
  left: -43%;
  bottom: 40px;
  background-color: rgba(255, 255, 255, 0.13);
  padding: 20px;
  border-radius: 20px 0 20px 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  line-height: 1.4rem;
  word-break: keep-all;
  text-align: right;
`
