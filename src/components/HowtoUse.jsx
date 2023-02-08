import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const HowtoUse = () => {
  const pathName = window.location.pathname
  const purePathName = pathName.replace('/', '')

  return (
    <HowtoUseWrapper>
      <HowToUseLever>
        레버를 눌러 랜덤으로 <br />
        퍽을 뽑을 수 있습니다. <br />각 아이콘을 눌러 <br />
        개별 뽑기가 가능합니다.
      </HowToUseLever>
      {purePathName !== 'killer' ? (
        <HowToUseItemAndOffering>
          레버를 눌러 랜덤으로 <br />
          아이템과 애드온, 오퍼링을 <br />
          뽑을 수 있습니다.
          <br />
          (개별 선택 불가능)
        </HowToUseItemAndOffering>
      ) : (
        <HowToUseItemAndOffering>
          레버를 눌러 랜덤으로 <br />
          살인마에 해당된 애드온과 <br />
          오퍼링을 뽑을 수 있습니다.
          <br />
          무기 아이콘을 눌러 랜덤으로 <br />
          살인마를 뽑을 수 있습니다.
        </HowToUseItemAndOffering>
      )}

      <HowToUseCheckbox>
        소유하고있는 캐릭터를 체크하여 <br />
        퍽을 제한할 수 있습니다.
      </HowToUseCheckbox>
      <ImageWarning>* 이미지 로딩 시 약 2초의 시간이 지연될 수 있습니다.</ImageWarning>
    </HowtoUseWrapper>
  )
}

export default HowtoUse

const HowtoUseWrapper = styled.div`
  font-size: 1.05rem;
  line-height: 1.6rem;
  word-break: keep-all;
  color: rgba(255, 255, 255, 0.7);

  & div {
    background-color: rgba(255, 255, 255, 0.13);
  }
`

const HowToUseLever = styled.div`
  position: absolute;
  right: -32%;
  top: 50px;
  padding: 20px;
  border-radius: 0 20px 20px 20px;
  word-break: keep-all;
`

const HowToUseItemAndOffering = styled.div`
  position: absolute;
  left: -38%;
  top: 340px;
  padding: 20px;
  border-radius: 20px 0 20px 20px;
  word-break: keep-all;
  text-align: right;
  width: 270px;
`

const HowToUseCheckbox = styled.div`
  position: absolute;
  left: -40%;
  bottom: 120px;
  padding: 20px;
  border-radius: 20px 0 20px 20px;
  text-align: right;
`

const ImageWarning = styled.p`
  position: absolute;
  font-size: 0.85rem;
  margin-top: 2px;
`
