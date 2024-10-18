import React, { useState, useEffect } from 'react'
import Perks from '../components/Perks'
import Checkbox from '../components/Checkbox'
import ItemAddon from '../components/ItemAddon'
import HowtoUse from '../components/HowtoUse'
import PrettyGoodJobSoFar from '../components/PrettyGoodJobSoFar'

import { Tab, PositionTab, TabLink, KlrTab, SvrTab, TabWrap } from '../styles/common.style'

const Survivor = () => {
  const [survivorDatas, setSurvivorDatas] = useState(null)

  useEffect(() => {
    try {
      const getDatas = async () => {
        const res = await fetch(
          'http://dbd-api-server-env.eba-vfmpfbem.ap-northeast-2.elasticbeanstalk.com/api/getData',
        )
        const data = await res.json()
        setSurvivorDatas(data.survivor)
      }
      getDatas()
    } catch (err) {
      console.error(err)
    }
  }, [])

  const svrPerks = survivorDatas && survivorDatas.perks
  const survivors = survivorDatas && survivorDatas.characters
  const svrItems = survivorDatas && survivorDatas.items
  const svrAddons = survivorDatas && survivorDatas.addons
  const svrOfferings = survivorDatas && survivorDatas.offerings

  return (
    <div>
      <Tab>
        <TabWrap>
          <PositionTab>
            <KlrTab>
              <TabLink to="/killer">살인마</TabLink>
            </KlrTab>
            <SvrTab className="Checked">
              <TabLink to="/survivor">생존자</TabLink>
            </SvrTab>
          </PositionTab>
          <Perks perks={svrPerks} />
          <ItemAddon items={svrItems} addons={svrAddons} offerings={svrOfferings} />
          <Checkbox characters={survivors} />
        </TabWrap>
      </Tab>
      <PrettyGoodJobSoFar />
    </div>
  )
}

export default Survivor
