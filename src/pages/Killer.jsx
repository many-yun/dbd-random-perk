import React, { useState, useEffect } from 'react'

// import perks from '../info/perks.json'
// import wappons from '../info/wappons.json'
// import wapponAddons from '../info/wapponAddons.json'
// import characters from '../info/characters.json'
// import offerings from '../info/offerings.json'

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
        const res = await fetch(
          'http://dbd-api-server-env.eba-vfmpfbem.ap-northeast-2.elasticbeanstalk.com/api/getData',
        )
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
  // const klrWappons = wappons
  // const klrAddons = wapponAddons
  // const klrOfferings = offerings.klrOfferings.concat(offerings.offerings)

  // const originalKillers = klrPerks.filter(datas => datas.own === true)

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
            {/* <KillerAddon
              itemsInfo={killerDatas.weapons}
              addonsInfo={killerDatas.addons}
              offeringsInfo={killerDatas.offerings}
            /> */}
            <Checkbox characters={killers} />
          </TabWrap>
        </Tab>
        <PrettyGoodJobSoFar />
      </div>
    )
  }
}

export default Killer
