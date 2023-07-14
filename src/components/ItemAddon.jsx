import React, { useState, useEffect } from 'react'
import Offering from './Offering'
import getImageURL from '../utils/getImageURL'

import { Lever, HowToUse } from '../styles/common.style'
import * as S from '../styles/ItemAddon.style'

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
    <S.IAO>
      <S.ItemAddonOffWrapper>
        <S.ItemAddonWrapper>
          <h2>아이템/애드온</h2>
          <S.ItemAddonWrapperWrapper>
            <S.Item>
              <S.ItemImageWrapper style={{ cursor: 'default' }}>
                <S.ItemImage
                  src={getImageURL(itemsInfo[itemRandomNum].icon)}
                  alt="perk"
                  loading="lazy"
                />
                <S.ItemDescription>
                  <p>
                    {itemsInfo[itemRandomNum].name}
                    <span>{itemsInfo[itemRandomNum].en_name}</span>
                  </p>
                  <p>{itemsInfo[itemRandomNum].description}</p>
                </S.ItemDescription>
              </S.ItemImageWrapper>
              <S.ItemName>{itemsInfo[itemRandomNum].name}</S.ItemName>
            </S.Item>
            <S.Addon>
              <S.AddonWrapper>
                <S.AddonImageWrapper>
                  {itemsInfo[itemRandomNum].tag !== 'firecracker' ? (
                    <S.AddonImage
                      src={addons.length !== 0 ? getImageURL(addons[0].icon) : ''}
                      loading="lazy"
                    />
                  ) : (
                    <p>애드온 없음</p>
                  )}
                </S.AddonImageWrapper>
                <p>{addons.length !== 0 && addons[0].name}</p>
                <S.AddonDescription>
                  <span>
                    {addons.length !== 0 && addons[0].name}
                    <b>{addons.length !== 0 && addons[0].en_name}</b>
                  </span>
                  <span>
                    {addons.length !== 0 && addons[0].description}
                    <i>{addons.length !== 0 && addons[0].level}</i>
                  </span>
                </S.AddonDescription>
              </S.AddonWrapper>
              <S.AddonWrapper>
                <S.AddonImageWrapper>
                  {itemsInfo[itemRandomNum].tag !== 'firecracker' ? (
                    <S.AddonImage
                      src={addons.length !== 0 ? getImageURL(addons[1].icon) : ''}
                      loading="lazy"
                    />
                  ) : (
                    <p>애드온 없음</p>
                  )}
                </S.AddonImageWrapper>
                <p>{addons.length !== 0 && addons[1].name}</p>
                <S.AddonDescription>
                  <span>
                    {addons.length !== 0 && addons[1].name}
                    <b>{addons.length !== 0 && addons[1].en_name}</b>
                  </span>
                  <span>
                    {addons.length !== 0 && addons[1].description}
                    <i>{addons.length !== 0 && addons[1].level}</i>
                  </span>
                </S.AddonDescription>
              </S.AddonWrapper>
            </S.Addon>
          </S.ItemAddonWrapperWrapper>
        </S.ItemAddonWrapper>
        <S.OfferingSectionWrapper>
          <h2>공물</h2>
          <Offering offeringsInfo={offeringsInfo} offeringRandomNum={offeringRandomNum} />
        </S.OfferingSectionWrapper>
      </S.ItemAddonOffWrapper>
      <Lever onClick={pickRandom}></Lever>
      <HowToUse>
        <S.HowToUseItemAndOffering>
          <b>"레버"</b> 를 눌러 랜덤으로 아이템과 애드온, 오퍼링을 뽑을 수 있습니다.
          <br />
          (개별 선택 불가능)
        </S.HowToUseItemAndOffering>
      </HowToUse>
    </S.IAO>
  )
}

export default ItemAddon
