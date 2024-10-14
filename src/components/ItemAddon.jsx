import React, { useState, useEffect } from 'react'
import Offering from './Offering'

import { Lever, HowToUse } from '../styles/common.style'
import * as S from '../styles/ItemAddon.style'

const ItemAddon = ({ items, addons, offerings }) => {
  if (items && addons && offerings) {
    // console.log(items)
    // console.log(addons)
    // console.log(offerings)
    const [addonRandomNums, setAddons] = useState([0, 0])
    const [itemRandomNum, setItemRandomNum] = useState(0)
    const [offeringRandomNum, setOfferingRandomNum] = useState(0)
    const [filteredAddons, setFilterdAddons] = useState(
      addons.filter(addon => addon.classification === 'Toolbox'),
    )
    /** 아이템, 공물 랜덤숫자 */
    const pickRandom = e => {
      e.preventDefault()
      setItemRandomNum(Math.floor(Math.random() * items.length))
      setOfferingRandomNum(Math.floor(Math.random() * offerings.length))
    }

    const generateRandomNumbers = () => {
      let arr = []
      while (arr.length < Math.min(2, filteredAddons.length)) {
        let randomNum = Math.floor(Math.random() * filteredAddons.length)
        if (!arr.includes(randomNum)) {
          arr.push(randomNum)
        }
      }
      return arr
    }

    /** 애드온 랜덤 -> 필터링된 애드온 무작위 정렬 */
    const randomAddon = () => {
      const newRandomNums = generateRandomNumbers()
      setAddons(newRandomNums)
      setFilterdAddons(
        addons.filter(addon => addon.classification === items[itemRandomNum].classification),
      )
    }
    useEffect(() => {
      randomAddon()
      console.log(addonRandomNums)
      console.log(itemRandomNum)
      console.log(filteredAddons)
      console.log(items[itemRandomNum].classification)
    }, [itemRandomNum])

    return (
      <S.IAO>
        <S.ItemAddonOffWrapper>
          <S.ItemAddonWrapper>
            <h2>아이템/애드온</h2>
            <S.ItemAddonWrapperWrapper>
              <S.Item>
                <S.ItemImageWrapper style={{ cursor: 'default' }}>
                  <S.ItemImage src={items[itemRandomNum].img} alt="perk" loading="lazy" />
                  <S.ItemDescription>
                    <p>{items[itemRandomNum].name}</p>
                    <p dangerouslySetInnerHTML={{ __html: items[itemRandomNum]?.description }}></p>
                  </S.ItemDescription>
                </S.ItemImageWrapper>
                <S.ItemName>{items[itemRandomNum].name}</S.ItemName>
              </S.Item>
              <S.Addon>
                {addonRandomNums.map((randomNum, i) => {
                  return (
                    <S.AddonWrapper>
                      {/* <S.AddonImageWrapper>
                        {items[itemRandomNum].classification !== 'Firecracker' ? (
                          <S.AddonImage src={filteredAddons[randomNum].img} loading="lazy" />
                        ) : (
                          <p>애드온 없음</p>
                        )}
                      </S.AddonImageWrapper>
                      <p>{filteredAddons[randomNum].name}</p>
                      <S.AddonDescription>
                        <span>{filteredAddons[randomNum].name}</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: filteredAddons[randomNum]?.description,
                          }}
                        ></span>
                      </S.AddonDescription> */}
                    </S.AddonWrapper>
                  )
                })}
              </S.Addon>
            </S.ItemAddonWrapperWrapper>
          </S.ItemAddonWrapper>
          <S.OfferingSectionWrapper>
            <h2>공물</h2>
            <Offering offerings={offerings} offeringRandomNum={offeringRandomNum} />
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
}

export default ItemAddon
