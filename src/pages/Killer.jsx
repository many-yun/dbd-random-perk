import React, { useState, useEffect } from 'react'
import Perks from '../components/Perks'
import Checkbox from '../components/Checkbox'
import ItemAddon from '../components/ItemAddon'
import HowtoUse from '../components/HowtoUse'
import KillerAddon from '../components/KillerAddon'
import PrettyGoodJobSoFar from '../components/PrettyGoodJobSoFar'

import { Tab, TabWrap, PositionTab, TabLink, KlrTab, SvrTab } from '../styles/common.style'

const Killer = () => {
  const [killerDatas, setKillerDatas] = useState(null)

  useEffect(() => {
    try {
      const getDatas = async () => {
        const res = await fetch('/api/getData')
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
  }
}

export default Killer
