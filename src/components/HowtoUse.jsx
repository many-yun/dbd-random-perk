import React from 'react'
import { useParams } from 'react-router-dom'

import {
  HowtoUseWrapper,
  HowToUseLever,
  HowToUseItemAndOffering,
  HowToUseCheckbox,
  ImageWarning,
} from '../styles/HowtoUse.style'

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
