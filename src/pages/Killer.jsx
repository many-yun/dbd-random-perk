import React, { useState, useEffect } from 'react'

import perks from '../info/perks.json'
import wappons from '../info/wappons.json'
import wapponAddons from '../info/wapponAddons.json'
import characters from '../info/characters.json'
import offerings from '../info/offerings.json'

import Perks from '../components/Perks'
import Checkbox from '../components/Checkbox'
import ItemAddon from '../components/ItemAddon'
import HowtoUse from '../components/HowtoUse'
import KillerAddon from '../components/KillerAddon'
import PrettyGoodJobSoFar from '../components/PrettyGoodJobSoFar'

import { Tab, TabWrap, PositionTab, TabLink, KlrTab, SvrTab } from '../styles/common.style'

const Killer = () => {
  const [filterPerks, setFilterPerks] = useState([])
  const [getCheckbox, setGetCheckbox] = useState([])

  const klrPerks = perks.killer
  const klrNames = characters.killers
  const klrWappons = wappons
  const klrAddons = wapponAddons
  const klrOfferings = offerings.klrOfferings.concat(offerings.offerings)

  const originalKillers = klrPerks.filter(datas => datas.own === true)

  const getCheckboxInfo = check => {
    check !== undefined && setGetCheckbox(check)
  }
  useEffect(e => {
    getCheckboxInfo(e)
  }, [])

  const DLCPerks = klrPerks.filter(
    datas => getCheckbox && getCheckbox.length > 0 && getCheckbox.includes(datas.en_name),
  )

  useEffect(() => {
    setFilterPerks(originalKillers.concat(DLCPerks))
  }, [getCheckbox])

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
          <Perks perks={filterPerks.length > 0 && filterPerks} />
          <KillerAddon itemsInfo={klrWappons} addonsInfo={klrAddons} offeringsInfo={klrOfferings} />
          <Checkbox characters={klrNames} getCheckboxInfo={getCheckboxInfo} />
        </TabWrap>
      </Tab>
      <PrettyGoodJobSoFar />
    </div>
  )
}

export default Killer
