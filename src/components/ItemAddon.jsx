import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Offering from './Offering'
import getImageURL from '../utils/getImageURL'

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
  font-size: 1rem;
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
