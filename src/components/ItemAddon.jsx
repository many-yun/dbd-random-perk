import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Offering from './Offering'
import getImageURL from '../utils/getImageURL'

const ItemAddon = ({ itemsInfo, addonsInfo, offeringsInfo }) => {
  const [items, setItems] = useState([])
  const [addons, setAddons] = useState([])
  const [Offerings, setOfferings] = useState([])
  const [itemRandomNum, setItemRandomNum] = useState(0)
  const [offeringRandomNum, setOfferingRandomNum] = useState(0)
  const [addonRandomNum, setAddonRandomNum] = useState([0, 1])

  /** 아이템, 공물 랜덤숫자 */
  useEffect(() => {
    setItemRandomNum(Math.floor(Math.random() * itemsInfo.length))
    setOfferingRandomNum(Math.floor(Math.random() * offeringsInfo.length))
  }, [])

  /** 뽑힌 아이템에 해당되는 애드온 */
  useEffect(() => {
    setAddons(addonsInfo.filter(data => data.item === itemsInfo[itemRandomNum].tag))
  }, [itemsInfo[itemRandomNum].tag])

  /** 애드온 랜덤숫자 */
  const randomAddonNum = () => {
    // addonRandomNum[0] == addonRandomNum[1] &&
    const randomNum1 = Math.floor(
      Math.random() * addonsInfo.filter(data => data.item === itemsInfo[itemRandomNum].tag).length,
    )
    const randomNum2 = Math.floor(
      Math.random() * addonsInfo.filter(data => data.item === itemsInfo[itemRandomNum].tag).length,
    )
    randomNum1 !== randomNum2 && setAddonRandomNum([randomNum1, randomNum2])
  }
  useEffect(() => {
    randomAddonNum()
  }, [])

  const pickRandom = e => {
    e.preventDefault()
    setItemRandomNum(Math.floor(Math.random() * itemsInfo.length))
    setOfferingRandomNum(Math.floor(Math.random() * offeringsInfo.length))
    randomAddonNum()
  }

  return (
    <section className="IAO">
      <div className="ItemAddon">
        <h2>아이템/애드온</h2>
        <div className="Item">
          <ItemImageWrapper>
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
        </div>
        <div className="Addon">
          <AddonWrapper>
            <AddonImageWrapper>
              <AddonImage
                src={addons.length !== 0 ? getImageURL(addons[addonRandomNum[0]].icon) : ''}
              />
            </AddonImageWrapper>
            <p>{addons.length !== 0 && addons[addonRandomNum[0]].name}</p>
            <AddonDescription>
              <span>
                {addons.length !== 0 && addons[addonRandomNum[0]].name}
                <b>{addons.length !== 0 && addons[addonRandomNum[0]].en_name}</b>
              </span>
              <span>{addons.length !== 0 && addons[addonRandomNum[0]].description}</span>
            </AddonDescription>
          </AddonWrapper>
          <AddonWrapper>
            <AddonImageWrapper>
              <AddonImage
                src={addons.length !== 0 ? getImageURL(addons[addonRandomNum[1]].icon) : ''}
              />
            </AddonImageWrapper>
            <p>{addons.length !== 0 && addons[addonRandomNum[1]].name}</p>
            <AddonDescription>
              <span>
                {addons.length !== 0 && addons[addonRandomNum[1]].name}
                <b>{addons.length !== 0 && addons[addonRandomNum[1]].en_name}</b>
              </span>
              <span>{addons.length !== 0 && addons[addonRandomNum[1]].description}</span>
            </AddonDescription>
          </AddonWrapper>
        </div>
      </div>
      <Offering offeringsInfo={offeringsInfo} offeringRandomNum={offeringRandomNum} />
      <a href="" className="ItemLever Lever" onClick={pickRandom}></a>
    </section>
  )
}

export default ItemAddon

const ItemName = styled.p`
  margin-top: 10px;
  word-break: keep-all;
  font-size: 0.9rem;
  line-height: 1.2rem;
`

const ItemImageWrapper = styled.div`
  position: relative;

  &:hover div {
    display: block;
  }
`

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`
const ItemDescription = styled.div`
  width: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 0.9rem;
  line-height: 1.2rem;
  word-break: keep-all;
  position: absolute;
  left: 85px;
  top: 85px;
  z-index: 999;
  display: none;
  text-align: left;

  & p:first-child {
    background-color: rgba(14, 100, 17, 0.5);
    padding: 15px;
    display: block;
    font-size: 1rem;

    & span {
      opacity: 0.7;
      margin-left: 10px;
    }
  }
  & p:last-child {
    padding: 15px;
  }
`

const AddonWrapper = styled.div`
  width: 120px;
  word-break: keep-all;
  text-align: center;
  display: inline-block;
  position: relative;

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
  width: 300px;
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

    & b {
      margin-left: 10px;
      opacity: 0.7;
    }
  }

  & span:last-child {
    padding: 15px;
    display: block;
  }
`
