import React, { useState, useEffect } from 'react'
import Perks from '../components/Perks'
import Checkbox from '../components/Checkbox'
import ItemAddon from '../components/ItemAddon'
import HowtoUse from '../components/HowtoUse'
import KillerAddon from '../components/KillerAddon'
import PrettyGoodJobSoFar from '../components/PrettyGoodJobSoFar'
import Loading from '../components/Loading'

import { Tab, TabWrap, PositionTab, TabLink, KlrTab, SvrTab } from '../styles/common.style'

const Killer = () => {
  const [killerDatas, setKillerDatas] = useState(null)

  useEffect(() => {
    try {
      const host =
        window.location.hostname === process.env.REACT_APP_LOCAL_IP
          ? 'http://dbd-api-server-env.eba-vfmpfbem.ap-northeast-2.elasticbeanstalk.com/api/getData'
          : '/api/getData'
      const getDatas = async () => {
        const res = await fetch(host, { cache: 'reload' })
        const data = await res.json()
        setKillerDatas(data.killer)
      }
      getDatas()
    } catch (err) {
      console.error(err)
    }
  }, [])

  const klrPerks = killerDatas && killerDatas.perks
  const killers = killerDatas && killerDatas.characters
  const klrWappons = killerDatas && killerDatas.weapons
  const klrAddons = killerDatas && killerDatas.addons
  const klrOfferings = killerDatas && killerDatas.offerings

  if (killerDatas !== null) {
    return (
      <div>
        <Tab>
          <TabWrap>
            <PositionTab>
              <KlrTab className="Checked">
                <TabLink to="/killer">살인마</TabLink>
              </KlrTab>
              <SvrTab>
                <TabLink to="/survivor">생존자</TabLink>
              </SvrTab>
            </PositionTab>
            <Perks perks={klrPerks} />
            <KillerAddon weapons={klrWappons} addons={klrAddons} offerings={klrOfferings} />
            <Checkbox characters={killers} />
          </TabWrap>
        </Tab>
        <PrettyGoodJobSoFar />
      </div>
    )
  } else {
    return <Loading />
  }
}

export default Killer
