/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import Main from './pages/Main'
import Survivor from './pages/Survivor'
import Killer from './pages/Killer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './reset.css'
import styled from 'styled-components'
import githubIcon from './assets/github_icon.png'

import bgImage from './assets/ForgedInFog.jpg'

function App() {
  return (
    <AppWrapper>
      <BGOpacity></BGOpacity>
      <Router>
        <Header to="/">Home</Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/survivor" element={<Survivor />} />
          <Route path="/killer" element={<Killer />} />
        </Routes>
      </Router>
      <GithubLinkWrapper>
        <a href="https://github.com/many-yun/dbd-random-perk/tree/main" target="_blank">
          <img src={githubIcon} />
        </a>
      </GithubLinkWrapper>
      <PleaseUsePC>
        <BGOpacity></BGOpacity>
        <MobileTextWrapper>
          <p>본 사이트는 PC 화면에 최적화 되었습니다.</p>
        </MobileTextWrapper>
      </PleaseUsePC>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  background: url(${bgImage}) no-repeat;
  background-size: cover;
  height: 100%;
  overflow-y: hidden;
`

const BGOpacity = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
`

const RouterWrapper = styled.div`
  min-width: 1400px;
`

const Header = styled(Link)`
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: inline-block;
  margin: 20px;
  transition: 0.1s;
  position: absolute;
  left: 0;
  top: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const GithubLinkWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 15px;
  top: 15px;

  & a {
    display: inline-block;

    & img {
      width: 100%;
      height: 100%;
      transition: 0.2s;
      opacity: 0.7;
    }
  }

  &:hover img {
    transform: scale(1.1);
    opacity: 1;
  }
`

const PleaseUsePC = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: url(${bgImage}) no-repeat center;
  width: 100%;
  height: 100%;
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`

const MobileTextWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10%;
  word-break: keep-all;
  font-size: 1.1rem;
  line-height: 1.6rem;
  display: flex;
  align-items: center;

  & p {
    color: white;
    margin: 0 auto;
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 10px;
  }
`
