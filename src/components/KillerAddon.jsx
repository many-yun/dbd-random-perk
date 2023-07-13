import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Offering from './Offering'
import getImageURL from '../utils/getImageURL'
import { IoMdArrowDropdown } from 'react-icons/io'

import { Lever } from '../styles/common.style'
import * as S from '../styles/ItemAddon.style'

const ItemAddon = ({ itemsInfo, addonsInfo, offeringsInfo }) => {
  const [addons, setAddons] = useState([])
  const [offeringRandomNum, setOfferingRandomNum] = useState(0)
  const [selectKillerInfo, setSelectKillerInfo] = useState(itemsInfo[0])
  const [displayOption, setDisplayOption] = useState('none')

  /** 공물 랜덤숫자 */
  const pickRandom = e => {
    e.preventDefault()
    setOfferingRandomNum(Math.floor(Math.random() * offeringsInfo.length))
    randomAddon()
  }

  /** 애드온 랜덤 -> 필터링된 애드온 무작위 정렬 */
  const randomAddon = () => {
    setAddons(
      addonsInfo
        .filter(data => data.killer === selectKillerInfo.tag)
        .sort(() => Math.random() - 0.5),
    )
  }
  useEffect(() => {
    randomAddon()
  }, [selectKillerInfo])

  /** 살인마 랜덤뽑기 */
  const randomKiller = () => {
    setSelectKillerInfo(itemsInfo[Math.floor(Math.random() * itemsInfo.length)])
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
              {selectKillerInfo.name ? selectKillerInfo.name : '살인마'}
              <IoMdArrowDropdown />
            </CheckedKiller>
            <KillerOption
              style={{ display: displayOption }}
              onClick={() => setDisplayOption('none')}
            >
              {itemsInfo.map(data => (
                <div key={data.tag} onClick={() => setSelectKillerInfo(data)}>
                  {data.name}
                </div>
              ))}
            </KillerOption>
          </KillerCheck>
          <S.ItemAddonWrapperWrapper>
            <S.Item>
              <S.ItemImageWrapper onClick={randomKiller}>
                <KillerItemImage
                  src={selectKillerInfo.icon ? getImageURL(selectKillerInfo.icon) : ''}
                  alt="wappon"
                  loading="lazy"
                />
                <S.ItemDescription>
                  <p>
                    {selectKillerInfo.name}
                    <span>{selectKillerInfo.en_name}</span>
                  </p>
                  <p>{selectKillerInfo.description}</p>
                </S.ItemDescription>
              </S.ItemImageWrapper>
              <S.ItemName>{selectKillerInfo.skill}</S.ItemName>
            </S.Item>
            <S.Addon>
              <S.AddonWrapper>
                <S.AddonImageWrapper>
                  {
                    <S.AddonImage
                      src={addons.length !== 0 ? getImageURL(addons[0].icon) : ''}
                      loading="lazy"
                    />
                  }
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
                  {
                    <S.AddonImage
                      src={addons.length !== 0 ? getImageURL(addons[1].icon) : ''}
                      loading="lazy"
                    />
                  }
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
    </S.IAO>
  )
}

export default ItemAddon

const KillerCheck = styled.div`
  color: black;
  display: inline-block;
  vertical-align: bottom;
  font-size: 1rem;
  width: 40%;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  position: absolute;
  right: 30px;
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
  height: 300px;
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
