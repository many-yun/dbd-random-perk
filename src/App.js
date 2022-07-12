/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import Survivor from './components/Survivor';
import Killer from './components/Killer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import './reset.css';
// import styled from 'styled-components';

// const tabChecked1 = () => {
//    const svrTab = document.querySelector('.SvrTab');
//    const klrTab = document.querySelector('.KlrTab');
//    svrTab.classList.add('Checked');
//    klrTab.classList.remove('Checked');
// };
// const tabChecked2 = () => {
//    const svrTab = document.querySelector('.SvrTab');
//    const klrTab = document.querySelector('.KlrTab');
//    klrTab.classList.add('Checked');
//    svrTab.classList.remove('Checked');
// };

function App() {
   return (
      <div className="App">
         <Router>
            <div className="Tab">
               {/* <div className="PositionTab">
                  <div className="SvrTab Checked">
                     <Link to="/survivor">생존자</Link>
                  </div>
                  <div className="KlrTab">
                     <Link to="/killer">살인마</Link>
                  </div>
               </div> */}

               <Routes>
                  <Route path="/survivor" element={<Survivor />} />
                  <Route path="/killer" element={<Killer />} />
               </Routes>
            </div>
         </Router>
      </div>
   );
}

export default App;
