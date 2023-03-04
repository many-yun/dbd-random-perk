import React, { useState, useEffect } from 'react'
import Offering from './Offering'
import getImageURL from '../utils/getImageURL'

import { Lever } from '../styles/common.style'
import {
  IAO,
  ItemAddonWapper,
  Item,
  ItemImageWrapper,
  ItemDescription,
  ItemName,
  Addon,
  ItemImage,
  AddonWrapper,
  AddonImageWrapper,
  AddonImage,
  AddonDescription,
} from '../styles/ItemAddon.style'

const ItemAddon = ({ itemsInfo, addonsInfo, offeringsInfo }) => {
  const [addons, setAddons] = useState([])
  const [itemRandomNum, setItemRandomNum] = useState(0)
  const [offeringRandomNum, setOfferingRandomNum] = useState(0)

  /** 아이템, 공물 랜덤숫자 */
  const pickRandom = e => {
    e.preventDefault()
    setItemRandomNum(Math.floor(Math.random() * itemsInfo.length))
    setOfferingRandomNum(Math.floor(Math.random() * offeringsInfo.length))
  }

  /** 애드온 랜덤 -> 필터링된 애드온 무작위 정렬 */
  const randomAddon = () => {
    setAddons(
      addonsInfo
        .filter(data => data.item === itemsInfo[itemRandomNum].tag)
        .sort(() => Math.random() - 0.5),
    )
  }
  useEffect(() => {
    randomAddon()
  }, [itemRandomNum])

  return (
    <IAO>
      <ItemAddonWapper>
        <h2>아이템/애드온</h2>
        <Item>
          <ItemImageWrapper style={{ cursor: 'default' }}>
            <ItemImage src={getImageURL(itemsInfo[itemRandomNum].icon)} alt="perk" />
            <ItemDescription>
              <p>
                {itemsInfo[itemRandomNum].name}
                <span>{itemsInfo[itemRandomNum].en_name}</span>
              </p>
              <p>{itemsInfo[itemRandomNum].description}</p>
            </ItemDescription>
          </ItemImageWrapper>
          <ItemName>{itemsInfo[itemRandomNum].name}</ItemName>
        </Item>
        <Addon>
          <AddonWrapper>
            <AddonImageWrapper>
              {itemsInfo[itemRandomNum].tag !== 'firecracker' ? (
                <AddonImage src={addons.length !== 0 ? getImageURL(addons[0].icon) : ''} />
              ) : (
                <p>애드온 없음</p>
              )}
            </AddonImageWrapper>
            <p>{addons.length !== 0 && addons[0].name}</p>
            <AddonDescription>
              <span>
                {addons.length !== 0 && addons[0].name}
                <b>{addons.length !== 0 && addons[0].en_name}</b>
              </span>
              <span>
                {addons.length !== 0 && addons[0].description}
                <i>{addons.length !== 0 && addons[0].level}</i>
              </span>
            </AddonDescription>
          </AddonWrapper>
          <AddonWrapper>
            <AddonImageWrapper>
              {itemsInfo[itemRandomNum].tag !== 'firecracker' ? (
                <AddonImage src={addons.length !== 0 ? getImageURL(addons[1].icon) : ''} />
              ) : (
                <p>애드온 없음</p>
              )}
            </AddonImageWrapper>
            <p>{addons.length !== 0 && addons[1].name}</p>
            <AddonDescription>
              <span>
                {addons.length !== 0 && addons[1].name}
                <b>{addons.length !== 0 && addons[1].en_name}</b>
              </span>
              <span>
                {addons.length !== 0 && addons[1].description}
                <i>{addons.length !== 0 && addons[1].level}</i>
              </span>
            </AddonDescription>
          </AddonWrapper>
        </Addon>
      </ItemAddonWapper>
      <Offering offeringsInfo={offeringsInfo} offeringRandomNum={offeringRandomNum} />
      <Lever onClick={pickRandom}></Lever>
    </IAO>
  )
}

export default ItemAddon
