import styled from 'styled-components'
import { Link } from 'react-router-dom'

import leverImage from '../assets/lever.png'

export const Tab = styled.div`
  color: white;
  border: 1px solid rgba(255, 255, 255, 0);
  width: 35%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 30px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: content-box;
  border: 3px solid rgba(255, 255, 255, 0.3);
  z-index: 9;

  @media screen and (max-width: 1600px) {
    padding: 20px;
  }
`
export const PositionTab = styled.div`
  position: absolute;
  left: -123px;
  top: 10px;

  & div {
    width: 120px;
    text-align: center;
    line-height: 50px;
    background-color: rgba(255, 255, 255, 0.1);
    margin-bottom: 5px;
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      width: 130px;
      background-color: rgba(255, 255, 255, 0.3);
      margin-left: -10px;
    }

    &.Checked {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  @media screen and (max-width: 1280px) {
    left: -103px;

    & div {
      width: 100px;
      line-height: 40px;

      &:hover {
        width: 110px;
        margin-left: -10px;
      }
    }
  }
`
export const TabLink = styled(Link)`
  display: block;
  font-size: 1.1rem;

  &:visited {
    color: white;
  }
`

export const KlrTab = styled.div``

export const SvrTab = styled.div``

export const TabWrap = styled.div`
  & section {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    padding: 30px;
    position: relative;

    @media screen and (max-width: 1600px) {
      padding: 20px;
    }

    &:nth-child(2) {
      padding-bottom: 60px;

      @media screen and (max-width: 1600px) {
        padding-bottom: 50px;
      }
    }

    & h2 {
      font-size: 1.3rem;
      margin-bottom: 20px;
    }
  }
`

export const Lever = styled.a`
  position: absolute;
  right: -20px;
  top: -20px;
  width: 82px;
  height: 84px;
  display: inline-block;
  background: url(${leverImage}) no-repeat;
  background-size: cover;
  transition: 0.2s;
  transform-origin: 26px 56px;
  cursor: pointer;

  @media screen and (max-width: 1600px) {
    right: -15px;
    top: -15px;
    width: 61.5px;
    height: 63px;
    transform-origin: 19.5px 42px;
  }

  &:hover {
    transform: rotate(45deg);
  }
  &:active {
    transform: rotate(80deg);
  }
`
