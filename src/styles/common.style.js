import styled from 'styled-components'
import { Link } from 'react-router-dom'

import leverImage from '../assets/lever.png'

export const Tab = styled.div`
  color: white;
  border: 1px solid rgba(255, 255, 255, 0);
  width: 720px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 30px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: content-box;
  border: 3px solid rgba(255, 255, 255, 0.3);
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

    &:nth-child(2) {
      padding-bottom: 60px;
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
  transition: 0.2s;
  transform-origin: 26px 56px;
  cursor: pointer;

  &:hover {
    transform: rotate(45deg);
  }
  &:active {
    transform: rotate(80deg);
  }
`
