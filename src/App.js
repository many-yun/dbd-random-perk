/*eslint-disable*/
import React, { useEffect, useState } from 'react'
import Main from './pages/Main'
import Survivor from './pages/Survivor'
import Killer from './pages/Killer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import './reset.css'
import styled from 'styled-components'
import video from './assets/campfire-dead-by-daylight-preview.mp4'

function App() {
  return (
    <div className="App" style={{ overflow: 'hidden' }}>
      {/* <video
        muted
        autoPlay
        loop
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          opacity: '0.6',
          position: 'absolute',
          left: '0',
          top: '0',
        }}
      >
        <source src={video} type="video/mp4" style={{}} />
      </video> */}
      <Router>
        <Header to="/">Home</Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/survivor" element={<Survivor />} />
          <Route path="/killer" element={<Killer />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

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
