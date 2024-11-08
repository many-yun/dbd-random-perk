import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Offering from './Offering'
import { IoMdArrowDropdown } from 'react-icons/io'

import { Lever, HowToUse } from '../styles/common.style'
import * as S from '../styles/ItemAddon.style'

const ItemAddon = ({ weapons, addons, offerings }) => {
  if (weapons && addons && offerings) {
    const checkedCharacters = useSelector(state => state.killers)

    const [addonRandomNums, setAddonRandomNums] = useState([0, 1])
    const [offeringRandomNum, setOfferingRandomNum] = useState(0)
    const [selectKillerInfo, setSelectKillerInfo] = useState(
      weapons.filter(weapon => weapon.en_character === 'The Trapper')[0],
    )
    const [displayOption, setDisplayOption] = useState('none')
    const [filteredAddons, setFilterdAddons] = useState([])
    const [filteredWappons, setFilteredWappons] = useState([])

    const pickRandom = e => {
      e.preventDefault()
      setOfferingRandomNum(Math.floor(Math.random() * offerings.length))
      randomAddon()
    }

    /** 애드온 랜덤 -> 필터링된 애드온 무작위 정렬 */
    const randomAddon = () => {
      setFilterdAddons(
        addons
          .filter(addon => addon.weapon === selectKillerInfo.en_name)
          .sort(() => Math.random() - 0.5),
      )
    }
    useEffect(() => {
      randomAddon()
    }, [selectKillerInfo])

    useEffect(() => {
      setFilteredWappons(weapons.filter(weapon => checkedCharacters.includes(weapon.en_character)))
    }, [checkedCharacters])

    /** 살인마 랜덤뽑기 */
    const randomKiller = () => {
      let newKiller
      do {
        newKiller = filteredWappons[Math.floor(Math.random() * filteredWappons.length)]
      } while (newKiller === selectKillerInfo)

      setSelectKillerInfo(newKiller)
    }

    return (
      <S.IAO>
        <S.ItemAddonOffWrapper>
          <S.ItemAddonWrapper>
            <h2>무기/애드온</h2>
            <KillerCheck>
              <CheckedKiller
                onClick={() => {
                  displayOption === 'none' ? setDisplayOption('block') : setDisplayOption('none')
                }}
              >
                {selectKillerInfo.character}
                <IoMdArrowDropdown />
              </CheckedKiller>
              <KillerOption
                style={{ display: displayOption }}
                onClick={() => setDisplayOption('none')}
              >
                {filteredWappons.map((weapon, i) => (
                  <div key={i} onClick={() => setSelectKillerInfo(weapon)}>
                    {weapon.character}
                  </div>
                ))}
              </KillerOption>
            </KillerCheck>
            <S.ItemAddonWrapperWrapper>
              <S.Item>
                <S.ItemImageWrapper onClick={randomKiller}>
                  <KillerItemImage src={selectKillerInfo.img} alt="wappon" loading="lazy" />
                  <S.ItemDescription>
                    <p>
                      {selectKillerInfo.name}
                      <span>{selectKillerInfo.en_name}</span>
                    </p>
                    <p>{selectKillerInfo.description}</p>
                  </S.ItemDescription>
                </S.ItemImageWrapper>
                <S.ItemName>{selectKillerInfo.name}</S.ItemName>
              </S.Item>
              <S.Addon>
                {addonRandomNums.map((randomNum, i) => {
                  return (
                    <S.AddonWrapper key={i}>
                      <S.AddonImageWrapper>
                        <S.AddonImage src={filteredAddons[randomNum]?.img} loading="lazy" />
                      </S.AddonImageWrapper>
                      <p>{filteredAddons[randomNum]?.name}</p>
                      <S.AddonDescription>
                        <span>
                          {filteredAddons[randomNum]?.name}
                          <b>{filteredAddons[randomNum]?.en_name}</b>
                        </span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: filteredAddons[randomNum]?.description,
                          }}
                        ></span>
                      </S.AddonDescription>
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
            <b>"레버"</b> 를 눌러 랜덤으로 선택된 살인마의 애드온과 오퍼링을 뽑을 수 있습니다.
            <br />
            <b>"무기 아이콘"</b> 을 눌러 랜덤으로 살인마를 뽑을 수 있습니다.
          </S.HowToUseItemAndOffering>
        </HowToUse>
      </S.IAO>
    )
  }
}

export default ItemAddon

const KillerCheck = styled.div`
  color: black;
  display: inline-block;
  vertical-align: bottom;
  font-size: 1rem;
  width: 50%;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 0px;
  z-index: 9;
`

const CheckedKiller = styled.div`
  border: 1px solid #ddd;
  background-color: white;
  padding: 0 5px;
  position: relative;
  font-size: 0.9rem;

  & svg {
    position: absolute;
    right: 2px;
    top: 3px;
  }
`

const KillerOption = styled.div`
  border: 1px solid #ddd;
  background-color: white;
  font-size: 0.9rem;
  max-height: 300px;
  overflow-y: scroll;

  & > div {
    padding: 0 5px;
    font-size: 0.9rem;
  }

  & > div:hover {
    background-color: #ddd;
  }
`

const KillerItemImage = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.2s;
  -webkit-user-drag: none;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`
