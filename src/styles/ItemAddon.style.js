import styled from 'styled-components'
import itemBox from '../assets/item-box.png'

export const IAO = styled.section`
  margin-bottom: 5px;
  position: relative;
`

export const ItemAddonWapper = styled.div`
  display: inline-block;
  width: 65%;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;

  & > div {
    display: inline-block;
    vertical-align: middle;
  }
`

export const Item = styled.div`
  margin-right: 20px;
  width: 140px;
  text-align: center;

  & > div {
    width: 100px;
    height: 100px;
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

  & > div > div {
    width: 80px;
    height: 80px;
    background: url(${itemBox}) no-repeat;
    background-size: contain;
    display: inline-block;
    margin-right: 5px;
`

export const AddonWrapper = styled.div`
  width: 120px;
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
