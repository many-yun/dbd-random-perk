/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import './App.css';
import './reset.css';
import perks from './info/perks.json';
// import styled from 'styled-components';

const svrDatas = perks.map((data) => {
   return data;
});
const svrPerks = svrDatas[0].Survivor;

function App() {
   const [randomNum1, setRandomNum1] = useState(0);
   const [randomNum2, setRandomNum2] = useState(0);
   const [randomNum3, setRandomNum3] = useState(0);
   const [randomNum4, setRandomNum4] = useState(0);

   let randomNumArr = []; // 퍽 index 랜덤추출
   for (let i = 0; i < 4; i++) {
      let randomNum = Math.floor(Math.random() * svrPerks.length);
      if (randomNumArr.indexOf(randomNum) === -1) randomNumArr.push(randomNum);
      else i--;
   }

   useEffect(() => {
      setRandomNum1(randomNumArr[0]);
      setRandomNum2(randomNumArr[1]);
      setRandomNum3(randomNumArr[2]);
      setRandomNum4(randomNumArr[3]);
      console.log(randomNumArr);
   }, []);

   console.log(randomNum1);

   return (
      <div className="App">
         <div className="Tab">
            <div className="PositionTab">
               <div className="SvrTab Checked">생존자</div>
               <div className="KlrTab">살인마</div>
            </div>
            <div className="Survivor TabWrap">
               <section className="Perks">
                  <h2>기술</h2>
                  <a href="" className="PerksLever Lever"></a>
                  <div className="Perk">
                     <img src={svrPerks[randomNum1].icon} alt="perk"></img>
                     <div className="Info">
                        <div className="Title">{svrPerks[randomNum1].perk_name}</div>
                        <div className="Txt">{svrPerks[randomNum1].description}</div>
                     </div>
                  </div>
                  <div className="Perk">
                     <img src={svrPerks[randomNum2].icon} alt="perk"></img>
                     <div className="Info">
                        <div className="Title">{svrPerks[randomNum2].perk_name}</div>
                        <div className="Txt">{svrPerks[randomNum2].description}</div>
                     </div>
                  </div>
                  <div className="Perk">
                     <img src={svrPerks[randomNum3].icon} alt="perk"></img>
                     <div className="Info">
                        <div className="Title">{svrPerks[randomNum3].perk_name}</div>
                        <div className="Txt">{svrPerks[randomNum3].description}</div>
                     </div>
                  </div>
                  <div className="Perk">
                     <img src={svrPerks[randomNum4].icon} alt="perk"></img>
                     <div className="Info">
                        <div className="Title">{svrPerks[randomNum4].perk_name}</div>
                        <div className="Txt">{svrPerks[randomNum4].description}</div>
                     </div>
                  </div>
               </section>
               <section className="IAO">
                  <div class="ItemAddon">
                     <h2>아이템/애드온</h2>
                     <a href="" className="ItemLever Lever"></a>
                     <div className="Item">
                        <div></div>
                     </div>
                     <div className="Addon">
                        <div></div>
                        <div></div>
                     </div>
                  </div>
                  <div className="Offering">
                     <h2>공물</h2>
                     <div className="OfferingBox"></div>
                  </div>
               </section>
               <section className="List">
                  <h2>DLC</h2>
                  <form>
                     <input type="checkbox" id="TheHalloween" name="dlc" value="TheHalloween" />
                     <label for="TheHalloween">식구/로리</label>
                     <input type="checkbox" id="OfFleshAndMud" name="dlc" value="OfFleshAndMud" />
                     <label for="OfFleshAndMud">해그/에이스</label>
                     <input type="checkbox" id="SparkOfMadness" name="dlc" value="SparkOfMadness" />
                     <label for="SparkOfMadness">전구/펭민</label>
                     <input type="checkbox" id="Leatherface" name="dlc" value="Leatherface" />
                     <label for="Leatherface">준구</label>
                     <input type="checkbox" id="NightmareOnElmStreet" name="dlc" value="NightmareOnElmStreet" />
                     <label for="NightmareOnElmStreet">몽구/쿠엔틴</label>
                     <input type="checkbox" id="TheSaw" name="dlc" value="TheSaw" />
                     <label for="TheSaw">직구/탭형사</label>
                     <input type="checkbox" id="CurtainCall" name="dlc" value="CurtainCall" />
                     <label for="CurtainCall">방구/케이트</label>
                     <input type="checkbox" id="ShatteredBloodline" name="dlc" value="ShatteredBloodline" />
                     <label for="ShatteredBloodline">스피릿/아담</label>
                     <input type="checkbox" id="DarknessAmongUs" name="dlc" value="DarknessAmongUs" />
                     <label for="DarknessAmongUs">군단/제프</label>
                     <input type="checkbox" id="DemisOfTheFaithful" name="dlc" value="DemisOfTheFaithful" />
                     <label for="DemisOfTheFaithful">웩구/제인</label>
                     <input type="checkbox" id="AshVSEvelDead" name="dlc" value="AshVSEvelDead" />
                     <label for="AshVSEvelDead">애쉬</label>
                     <input type="checkbox" id="GhostFace" name="dlc" value="GhostFace" />
                     <label for="GhostFace">고페</label>
                     <input type="checkbox" id="CursedLegacy" name="dlc" value="CursedLegacy" />
                     <label for="CursedLegacy">오니/유이</label>
                     <input type="checkbox" id="ChainsOfHate" name="dlc" value="ChainsOfHate" />
                     <label for="ChainsOfHate">총구/자리나</label>
                     <input type="checkbox" id="SilentHill" name="dlc" value="SilentHill" />
                     <label for="SilentHill">삼각두/쉐릴</label>
                     <input type="checkbox" id="DescendBeyond" name="dlc" value="DescendBeyond" />
                     <label for="DescendBeyond">블라이트/펠릭스</label>
                     <input type="checkbox" id="ABindingOfKin" name="dlc" value="ABindingOfKin" />
                     <label for="ABindingOfKin">쌍둥이/엘로디</label>
                     <input type="checkbox" id="AllKill" name="dlc" value="AllKill" />
                     <label for="AllKill">학지운/윤진</label>
                     <input type="checkbox" id="ResidentEvil" name="dlc" value="ResidentEvil" />
                     <label for="ResidentEvil">네메시스/레온,질</label>
                     <input type="checkbox" id="Hellraiser" name="dlc" value="Hellraiser" />
                     <label for="Hellraiser">헬레이저</label>
                     <input type="checkbox" id="HourOfTheWitch" name="dlc" value="HourOfTheWitch" />
                     <label for="HourOfTheWitch">미카엘라</label>
                     <input type="checkbox" id="PortraitOfAMurder" name="dlc" value="PortraitOfAMurder" />
                     <label for="PortraitOfAMurder">까마귀/요나</label>
                     <input type="checkbox" id="SadakoRising" name="dlc" value="SadakoRising" />
                     <label for="SadakoRising">링/요이치</label>
                     <input type="checkbox" id="RootsOfDread" name="dlc" value="RootsOfDread" />
                     <label for="RootsOfDread">드레지/해디</label>
                  </form>
               </section>
            </div>
         </div>
      </div>
   );
}

export default App;
