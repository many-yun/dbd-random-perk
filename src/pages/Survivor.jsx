import React, { useState, useEffect } from 'react'

import perks from '../info/perks.json'
import items from '../info/items.json'
import characters from '../info/characters.json'
import offerings from '../info/offerings.json'
import itemAddons from '../info/itemAddons.json'

import Perks from '../components/Perks'
import Checkbox from '../components/Checkbox'
import ItemAddon from '../components/ItemAddon'
import HowtoUse from '../components/HowtoUse'
import PrettyGoodJobSoFar from '../components/PrettyGoodJobSoFar'

import { Tab, PositionTab, TabLink, KlrTab, SvrTab, TabWrap } from '../styles/common.style'

const Survivor = () => {
  const [filterPerks, setFilterPerks] = useState([])
  const [getCheckbox, setGetCheckbox] = useState([])

  const svrPerks = perks.survivor
  const svrNames = characters.survivors
  const svrItems = items
  const svrAddons = itemAddons
  const svrOfferings = offerings.svrOfferings.concat(offerings.offerings)

  const originalSurvivors = svrPerks.filter(datas => datas.own === true)

  const getCheckboxInfo = check => {
    check !== undefined && setGetCheckbox(check)
  }
  useEffect(e => {
    getCheckboxInfo(e)
  }, [])

  const DLCPerks = svrPerks.filter(
    datas => getCheckbox && getCheckbox.length > 0 && getCheckbox.includes(datas.en_name),
  )

  useEffect(() => {
    setFilterPerks(originalSurvivors.concat(DLCPerks))
  }, [getCheckbox])

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
          <Perks perks={filterPerks.length > 0 && filterPerks} />
          <ItemAddon itemsInfo={svrItems} addonsInfo={svrAddons} offeringsInfo={svrOfferings} />
          <Checkbox characters={svrNames} getCheckboxInfo={getCheckboxInfo} />
        </TabWrap>
        <HowtoUse />
      </Tab>
      <PrettyGoodJobSoFar />
    </div>
  )
}

export default Survivor
