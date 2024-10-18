import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Main = () => {
  return (
    <MainWrapper>
      <MainTitle>
        Dead by Daylight 랜덤퍽 사이트
        <p>Dead by Daylight Random Perk Roulette</p>
      </MainTitle>
      <PositionLinkWrapper>
        <PositionLink to="/killer">
          <LinkWrapper>
            살인마<p>KILLER</p>
          </LinkWrapper>
        </PositionLink>
        <PositionLink to="/survivor">
          <LinkWrapper>
            생존자<p>SURVIVOR</p>
          </LinkWrapper>
        </PositionLink>
      </PositionLinkWrapper>
      <MainFooter style={{ color: 'rgba(255,255,255,.5)' }}>
        <p>본 사이트는 포트폴리오 용이며, 상업적인 용도가 아닙니다.</p>
        <p>본 사이트에 사용된 모든 정보는 나무위키의 DEAD BY DAYLIGHT 문서에서 가져왔습니다.</p>
      </MainFooter>
    </MainWrapper>
  )
}

export default Main

const MainWrapper = styled.div`
  display: flex;
`

const MainTitle = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 40px;
  color: white;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);

  & p {
    font-size: 1.2rem;
    opacity: 0.2;
    margin-top: 20px;
  }
`

const PositionLinkWrapper = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const PositionLink = styled(Link)`
  width: 300px;
  height: 300px;
  font-size: 2rem;
  text-align: center;
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 30px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  position: relative;

  &:first-child {
    margin-right: 20px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const LinkWrapper = styled.div`
  font-weight: bold;
  font-size: 2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & p {
    margin-top: 15px;
    font-size: 1.1rem;
    opacity: 0.2;
    font-weight: normal;
    letter-spacing: 1rem;
    padding-left: 10px;
  }
`

const MainFooter = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  line-height: 1.3rem;
`
