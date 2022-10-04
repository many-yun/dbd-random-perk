import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import perks from '../info/perks.json'
import items from '../info/items.json'
import characters from '../info/characters.json'
import offerings from '../info/offerings.json'

import Perks from '../components/Perks'
import Checkbox from '../components/Checkbox'
import ItemAddon from '../components/ItemAddon'
import HowtoUse from '../components/HowtoUse'

const Survivor = () => {
  const [filterPerks, setFilterPerks] = useState([])
  const [getCheckbox, setGetCheckbox] = useState([])

  const svrPerks = perks.Survivor
  const svrNames = characters.survivors
  const svrItems = items.items
  const svrAddons = items.svrAddons
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
    <div className="Tab">
      <div className="Survivor TabWrap">
        <div className="PositionTab">
          <div className="SvrTab Checked">
            <Link to="/survivor">생존자</Link>
          </div>
          <div className="KlrTab">
            <Link to="/killer">살인마</Link>
          </div>
        </div>
        <Perks perks={filterPerks.length > 0 && filterPerks} />
        <ItemAddon itemsInfo={svrItems} addonsInfo={svrAddons} offeringsInfo={svrOfferings} />
        <Checkbox characters={svrNames} getCheckboxInfo={getCheckboxInfo} />
      </div>
      <HowtoUse />
    </div>
  )
}

export default Survivor
