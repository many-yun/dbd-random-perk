import styled from 'styled-components'
import itemBox from '../assets/item-box.png'

export const HowToUseItemAndOffering = styled.div`
  border-radius: 20px 0 20px 20px;
  left: -300px;
  top: 10px;

  @media screen and (max-width: 1600px) {
    left: -240px;
  }
`

export const OfferingSectionWrapper = styled.div`
  width: 35%;
`

export const ItemAddonOffWrapper = styled.div`
  display: flex;
`

export const IAO = styled.section`
  margin-bottom: 5px;
  position: relative;
`

export const ItemAddonWrapper = styled.div`
  width: 65%;
  position: relative;
`

export const ItemAddonWrapperWrapper = styled.div`
  display: flex;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  align-items: center;
`

export const Item = styled.div`
  width: 40%;
  text-align: center;
  position: relative;

  & > div {
    width: 70%;
    background: url(${itemBox}) no-repeat;
    background-size: contain;
    display: inline-block;
  }
`

export const ItemImageWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover div {
    display: block;
  }
`

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  -webkit-user-drag: none;
`

export const ItemDescription = styled.div`
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

export const ItemName = styled.p`
  margin-top: 10px;
  word-break: keep-all;
  font-size: 1rem;
  line-height: 1.2rem;
`

export const Addon = styled.div`
  width:60%;
  display:flex;
  justify-content: space-evenly;

  & > div > div {
    width: 100%;
    background: url(${itemBox}) no-repeat;
    background-size: contain;
    display: inline-block;
    margin-right: 5px;

    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
`

export const AddonWrapper = styled.div`
  width: 32%;
  word-break: keep-all;
  text-align: center;
  display: inline-block;
  position: relative;
  vertical-align: top;

  & > p {
    margin-top: 10px;
    font-size: 0.9rem;
    line-height: 1.1rem;
  }

  &:hover p:last-child {
    display: block;
  }
`

export const AddonImageWrapper = styled.div`
  position: relative;

  & > p {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
    line-height: 1.2rem;
  }
`

export const AddonImage = styled.img`
  width: 120%;
  height: 120%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-user-drag: none;
`

export const AddonDescription = styled.p`
  width: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  left: 85px;
  top: 60px;
  z-index: 999;
  display: none;
  text-align: left;
  line-height: 1.2rem;

  & > span:first-child {
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

  & > span:last-child {
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
