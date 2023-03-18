/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import Main from './pages/Main'
import Survivor from './pages/Survivor'
import Killer from './pages/Killer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/reset.css'
import {
  AppWrapper,
  BGOpacity,
  RouterWrapper,
  Header,
  GithubLinkWrapper,
  PleaseUsePC,
  MobileTextWrapper,
} from './styles/App.style'
import githubIcon from './assets/github_icon.png'

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
