import React, { useState, useEffect } from 'react';
import perks from '../info/perks.json';
import { Link } from 'react-router-dom';

const svrDatas = perks.map((data) => {
   return data;
});
const svrPerks = svrDatas[0].Survivor;

// 퍽 index 랜덤추출

const Survivor = () => {
   let arr = [];
   for (let i = 0; i < 4; i++) {
      let randomNum = Math.floor(Math.random() * svrPerks.length);
      if (arr.indexOf(randomNum) === -1) arr.push(randomNum);
      else i--;
   }
   const [randomNum1, setRandomNum1] = useState(arr[0]);
   const [randomNum2, setRandomNum2] = useState(arr[1]);
   const [randomNum3, setRandomNum3] = useState(arr[2]);
   const [randomNum4, setRandomNum4] = useState(arr[3]);
   const [randomNumArr, setRandomNumArr] = useState([randomNum1, randomNum2, randomNum3, randomNum4]);

   const randomPerk = (e) => {
      e.preventDefault();
      arr.splice(0, arr.length);
      for (let i = 0; i < 4; i++) {
         let randomNum = Math.floor(Math.random() * svrPerks.length);
         if (arr.indexOf(randomNum) === -1) arr.push(randomNum);
         else i--;
      }
      setRandomNum1(arr[0]);
      setRandomNum2(arr[1]);
      setRandomNum3(arr[2]);
      setRandomNum4(arr[3]);
      setRandomNumArr(arr);
   };

   const otherPerk1 = () => {
      let randomNum = Math.floor(Math.random() * svrPerks.length);
      if (randomNum !== randomNum2 && randomNum !== randomNum3 && randomNum !== randomNum4) {
         arr.splice(0, 1, randomNum);
         setRandomNum1(arr[0]);
         setRandomNumArr(arr);
      }
   };
   const otherPerk2 = () => {
      let randomNum = Math.floor(Math.random() * svrPerks.length);
      if (randomNum !== randomNum1 && randomNum !== randomNum3 && randomNum !== randomNum4) {
         arr.splice(1, 1, randomNum);
         setRandomNum2(arr[1]);
         setRandomNumArr(arr);
      }
   };
   const otherPerk3 = () => {
      let randomNum = Math.floor(Math.random() * svrPerks.length);
      if (randomNum !== randomNum1 && randomNum !== randomNum2 && randomNum !== randomNum4) {
         arr.splice(2, 1, randomNum);
         setRandomNum3(arr[2]);
         setRandomNumArr(arr);
      }
   };
   const otherPerk4 = () => {
      let randomNum = Math.floor(Math.random() * svrPerks.length);
      if (randomNum !== randomNum1 && randomNum !== randomNum2 && randomNum !== randomNum3) {
         arr.splice(3, 1, randomNum);
         setRandomNum4(arr[3]);
         setRandomNumArr(arr);
      }
   };

   return (
      <div className="Survivor TabWrap">
         <div className="PositionTab">
            <div className="SvrTab Checked">
               <Link to="/survivor">생존자</Link>
            </div>
            <div className="KlrTab">
               <Link to="/killer">살인마</Link>
            </div>
         </div>
         <section className="Perks">
            <h2>기술</h2>
            <a href="" className="PerksLever Lever" onClick={randomPerk}></a>
            <div className="Perk" onClick={otherPerk1}>
               <img src={svrPerks[randomNum1].icon} alt="perk"></img>
               <div className="Info">
                  <div className="Title">{svrPerks[randomNum1].perk_name}</div>
                  <div className="Txt">{svrPerks[randomNum1].description}</div>
               </div>
               <p>{svrPerks[randomNum1].perk_name}</p>
            </div>
            <div className="Perk" onClick={otherPerk2}>
               <img src={svrPerks[randomNum2].icon} alt="perk"></img>
               <div className="Info">
                  <div className="Title">{svrPerks[randomNum2].perk_name}</div>
                  <div className="Txt">{svrPerks[randomNum2].description}</div>
               </div>
               <p>{svrPerks[randomNum2].perk_name}</p>
            </div>
            <div className="Perk" onClick={otherPerk3}>
               <img src={svrPerks[randomNum3].icon} alt="perk"></img>
               <div className="Info">
                  <div className="Title">{svrPerks[randomNum3].perk_name}</div>
                  <div className="Txt">{svrPerks[randomNum3].description}</div>
               </div>
               <p>{svrPerks[randomNum3].perk_name}</p>
            </div>
            <div className="Perk" onClick={otherPerk4}>
               <img src={svrPerks[randomNum4].icon} alt="perk"></img>
               <div className="Info">
                  <div className="Title">{svrPerks[randomNum4].perk_name}</div>
                  <div className="Txt">{svrPerks[randomNum4].description}</div>
               </div>
               <p>{svrPerks[randomNum4].perk_name}</p>
            </div>
         </section>
         <section className="IAO">
            <div className="ItemAddon">
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
               <label htmlFor="TheHalloween">로리</label>
               <input type="checkbox" id="OfFleshAndMud" name="dlc" value="OfFleshAndMud" />
               <label htmlFor="OfFleshAndMud">에이스</label>
               <input type="checkbox" id="SparkOfMadness" name="dlc" value="SparkOfMadness" />
               <label htmlFor="SparkOfMadness">펭민</label>
               <input type="checkbox" id="NightmareOnElmStreet" name="dlc" value="NightmareOnElmStreet" />
               <label htmlFor="NightmareOnElmStreet">쿠엔틴</label>
               <input type="checkbox" id="TheSaw" name="dlc" value="TheSaw" />
               <label htmlFor="TheSaw">탭형사</label>
               <input type="checkbox" id="CurtainCall" name="dlc" value="CurtainCall" />
               <label htmlFor="CurtainCall">케이트</label>
               <input type="checkbox" id="ShatteredBloodline" name="dlc" value="ShatteredBloodline" />
               <label htmlFor="ShatteredBloodline">아담</label>
               <input type="checkbox" id="DarknessAmongUs" name="dlc" value="DarknessAmongUs" />
               <label htmlFor="DarknessAmongUs">제프</label>
               <input type="checkbox" id="DemisOfTheFaithful" name="dlc" value="DemisOfTheFaithful" />
               <label htmlFor="DemisOfTheFaithful">제인</label>
               <input type="checkbox" id="AshVSEvelDead" name="dlc" value="AshVSEvelDead" />
               <label htmlFor="AshVSEvelDead">애쉬</label>
               <input type="checkbox" id="CursedLegacy" name="dlc" value="CursedLegacy" />
               <label htmlFor="CursedLegacy">유이</label>
               <input type="checkbox" id="ChainsOfHate" name="dlc" value="ChainsOfHate" />
               <label htmlFor="ChainsOfHate">자리나</label>
               <input type="checkbox" id="SilentHill" name="dlc" value="SilentHill" />
               <label htmlFor="SilentHill">쉐릴</label>
               <input type="checkbox" id="DescendBeyond" name="dlc" value="DescendBeyond" />
               <label htmlFor="DescendBeyond">펠릭스</label>
               <input type="checkbox" id="ABindingOfKin" name="dlc" value="ABindingOfKin" />
               <label htmlFor="ABindingOfKin">엘로디</label>
               <input type="checkbox" id="AllKill" name="dlc" value="AllKill" />
               <label htmlFor="AllKill">윤진</label>
               <input type="checkbox" id="ResidentEvil" name="dlc" value="ResidentEvil" />
               <label htmlFor="ResidentEvil">레온,질</label>
               <input type="checkbox" id="HourOfTheWitch" name="dlc" value="HourOfTheWitch" />
               <label htmlFor="HourOfTheWitch">미카엘라</label>
               <input type="checkbox" id="PortraitOfAMurder" name="dlc" value="PortraitOfAMurder" />
               <label htmlFor="PortraitOfAMurder">요나</label>
               <input type="checkbox" id="SadakoRising" name="dlc" value="SadakoRising" />
               <label htmlFor="SadakoRising">요이치</label>
               <input type="checkbox" id="RootsOfDread" name="dlc" value="RootsOfDread" />
               <label htmlFor="RootsOfDread">해디</label>
            </form>
         </section>
      </div>
   );
};

export default Survivor;
