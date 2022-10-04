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
import KillerAddon from '../components/KillerAddon'

const Killer = () => {
  const [filterPerks, setFilterPerks] = useState([])
  const [getCheckbox, setGetCheckbox] = useState([])

  const klrPerks = perks.Killer
  const klrNames = characters.killers
  const klrItems = items.items
  const klrAddons = items.klrAddons
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
    <div className="Tab">
      <div className="Survivor TabWrap">
        <div className="PositionTab">
          <div className="svrTab">
            <Link to="/survivor">생존자</Link>
          </div>
          <div className="KlrTab Checked">
            <Link to="/killer">살인마</Link>
          </div>
        </div>
        <Perks perks={filterPerks.length > 0 && filterPerks} />
        <KillerAddon itemsInfo={klrItems} addonsInfo={klrAddons} offeringsInfo={klrOfferings} />
        <Checkbox characters={klrNames} getCheckboxInfo={getCheckboxInfo} />
      </div>
      <HowtoUse />
    </div>
  )
}

export default Killer
