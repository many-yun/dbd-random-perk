import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Offering from './Offering'
import getImageURL from '../utils/getImageURL'
import { IoMdArrowDropdown } from 'react-icons/io'

import {
  Lever,
  IAO,
  ItemAddonWapper,
  Item,
  ItemImageWrapper,
  ItemDescription,
  ItemName,
  Addon,
} from '../styles/common'

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
    <IAO>
      <ItemAddonWapper>
        <h2>
          무기/애드온
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
        </h2>
        <Item>
          <ItemImageWrapper onClick={randomKiller}>
            <ItemImage
              src={selectKillerInfo.icon ? getImageURL(selectKillerInfo.icon) : ''}
              alt="wappon"
            />
            <ItemDescription>
              <p>
                {selectKillerInfo.name}
                <span>{selectKillerInfo.en_name}</span>
              </p>
              <p>{selectKillerInfo.description}</p>
            </ItemDescription>
          </ItemImageWrapper>
          <ItemName>{selectKillerInfo.skill}</ItemName>
        </Item>
        <Addon>
          <AddonWrapper>
            <AddonImageWrapper>
              {<AddonImage src={addons.length !== 0 ? getImageURL(addons[0].icon) : ''} />}
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
              {<AddonImage src={addons.length !== 0 ? getImageURL(addons[1].icon) : ''} />}
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

const KillerCheck = styled.div`
  color: black;
  display: inline-block;
  vertical-align: bottom;
  font-size: 1rem;
  width: 130px;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  position: absolute;
  right: 30px;
  top: 0;
  z-index: 9;
`

const CheckedKiller = styled.div`
  border: 1px solid #ddd;
  background-color: white;
  padding: 0 5px;
  position: relative;

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
  }

  & > div:hover {
    background-color: #ddd;
  }
`

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s;

  &:hover {
    width: 110%;
    height: 110%;
  }
  &:active {
    width: 90%;
    height: 90%;
  }
`

const AddonWrapper = styled.div`
  width: 120px;
  word-break: keep-all;
  text-align: center;
  display: inline-block;
  position: relative;
  vertical-align: top;

  & > p {
    margin-top: 10px;
    font-size: 0.9rem;
  }

  &:hover p:last-child {
    display: block;
  }
`

const AddonImageWrapper = styled.div`
  position: relative;

  & > p {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    line-height: 1.2rem;
  }
`

const AddonImage = styled.img`
  width: 120%;
  height: 120%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const AddonDescription = styled.p`
  width: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 85px;
  top: 60px;
  z-index: 999;
  display: none;
  text-align: left;
  line-height: 1.2rem;

  & span:first-child {
    padding: 15px;
    background-color: rgba(14, 100, 17, 0.5);
    display: block;
    font-size: 1rem;

    & b {
      margin-left: 10px;
      opacity: 0.7;
      font-size: 0.8rem;
    }
  }

  & span:last-child {
    padding: 15px;
    display: block;

    & i {
      display: block;
      margin-top: 10px;
      padding-top: 10px;
      font-size: 0.8rem;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      opacity: 0.7;
    }
  }
`
