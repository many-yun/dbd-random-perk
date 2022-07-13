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

   // 체크박스 전체선택
   const svrDatas = [
      { id: 'LaurieStrode', name: '로리' },
      { id: 'AceVisconti', name: '에이스' },
      { id: 'FengMin', name: '펭민' },
      { id: 'QuentinSmith', name: '쿠엔틴' },
      { id: 'DetectiveDavidTapp', name: '탭형사' },
      { id: 'KateDenson', name: '케이트' },
      { id: 'AdamFrancis', name: '아담' },
      { id: 'JeffreyJeffJohansen', name: '제프' },
      { id: 'JaneRomero', name: '제인' },
      { id: 'AshJ.Williams', name: '애쉬' },
      { id: 'NancyWheeler', name: '낸시' },
      { id: 'SteveHarrington', name: '스티브' },
      { id: 'YuiKimura', name: '유이' },
      { id: 'ZarinaKassir', name: '자리나' },
      { id: 'CherylMason', name: '쉐릴' },
      { id: 'FelixRichter', name: '펠릭스' },
      { id: 'ÉlodieRakoto', name: '엘로디' },
      { id: 'Yun-JinLee', name: '윤진' },
      { id: 'JillValentine', name: '질' },
      { id: 'LeonScottKennedy', name: '레온' },
      { id: 'MikaelaReid', name: '미카엘라' },
      { id: 'JonahVasquez', name: '요나' },
      { id: 'YoichiAsakawa', name: '요이치' },
      { id: 'HaddieKaur', name: '해디' },
   ];

   const [checkedItems, setCheckedItems] = useState(svrDatas.map((data) => data.id));

   const handleSingleCheck = (checked, id) => {
      if (checked) {
         // 단일 선택 시 체크된 아이템을 배열에 추가
         setCheckedItems((prev) => [...prev, id]);
      } else {
         // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
         setCheckedItems(checkedItems.filter((el) => el !== id));
      }
   };

   const handleAllCheck = (checked) => {
      if (!checked) {
         // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
         const idArray = [];
         svrDatas.forEach((el) => idArray.push(el.id));
         setCheckedItems(idArray);
      } else {
         // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
         setCheckedItems([]);
      }
   };

   // 체크박스 목록 mapping
   // const onCheckAll = (checked) => {
   //    if (checked) {
   //       const checkedItemsArr = [];
   //       svrDatas.forEach((data) => checkedItemsArr.push(data.id));
   //       setCheckedItems(checkedItemsArr);
   //    } else {
   //       setCheckedItems([]);
   //    }
   // };

   const SvrCheckboxes = (props) => {
      const svrCheckbox = svrDatas.map((data) => {
         return (
            <>
               <input
                  type="checkbox"
                  id={data.id}
                  name="dlc"
                  value={data.id}
                  onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                  checked={checkedItems.includes(data.id) ? true : false}
               />
               <label htmlFor={data.id}>{data.name}</label>
            </>
         );
      });
      return svrCheckbox;
   };

   // 로컬스토리지 체크박스 저장
   const localArr = JSON.parse(sessionStorage.getItem('survivor')) || checkedItems;
   // const getSurvivor = localStorage.getItem('survivor') || checkedItems;
   localStorage.setItem('survivor', JSON.stringify(localArr));

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
            <div className="Perk">
               <img src={svrPerks[randomNum1].icon} alt="perk" onClick={otherPerk1}></img>
               <div className="Info">
                  <div className="Title">
                     {svrPerks[randomNum1].perk_name}
                     <span>{svrPerks[randomNum1].perk_tag}</span>
                  </div>
                  <div className="Txt">{svrPerks[randomNum1].description}</div>
                  <div className="Tags">{svrPerks[randomNum1].tags.map((e) => `#${e} `)}</div>
               </div>
               <p>{svrPerks[randomNum1].perk_name}</p>
            </div>
            <div className="Perk">
               <img src={svrPerks[randomNum2].icon} alt="perk" onClick={otherPerk2}></img>
               <div className="Info">
                  <div className="Title">
                     {svrPerks[randomNum2].perk_name}
                     <span>{svrPerks[randomNum2].perk_tag}</span>
                  </div>
                  <div className="Txt">{svrPerks[randomNum2].description}</div>
                  <div className="Tags">{svrPerks[randomNum2].tags.map((e) => `#${e} `)}</div>
               </div>
               <p>{svrPerks[randomNum2].perk_name}</p>
            </div>
            <div className="Perk">
               <img src={svrPerks[randomNum3].icon} alt="perk" onClick={otherPerk3}></img>
               <div className="Info">
                  <div className="Title">
                     {svrPerks[randomNum3].perk_name}
                     <span>{svrPerks[randomNum3].perk_tag}</span>
                  </div>
                  <div className="Txt">{svrPerks[randomNum3].description}</div>
                  <div className="Tags">{svrPerks[randomNum3].tags.map((e) => `#${e} `)}</div>
               </div>
               <p>{svrPerks[randomNum3].perk_name}</p>
            </div>
            <div className="Perk">
               <img src={svrPerks[randomNum4].icon} alt="perk" onClick={otherPerk4}></img>
               <div className="Info">
                  <div className="Title">
                     {svrPerks[randomNum4].perk_name}
                     <span>{svrPerks[randomNum4].perk_tag}</span>
                  </div>
                  <div className="Txt">{svrPerks[randomNum4].description}</div>
                  <div className="Tags">{svrPerks[randomNum4].tags.map((e) => `#${e} `)}</div>
               </div>
               <p>{svrPerks[randomNum4].perk_name}</p>
            </div>
         </section>
         <section className="IAO">
            <div className="ItemAddon">
               <h2>아이템/애드온</h2>
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
            <a href="" className="ItemLever Lever"></a>
         </section>
         <section className="List">
            <h2>DLC</h2>
            <button
               type="button"
               onClick={(e) => handleAllCheck(e.target.checked)}
               checked={checkedItems.length === svrDatas.length ? true : false}>
               전체선택
            </button>
            <form>
               <SvrCheckboxes data={svrDatas} />
               {/* <input type="checkbox" id="TheHalloween" name="dlc" value="TheHalloween" />
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
               <label htmlFor="RootsOfDread">해디</label> */}
            </form>
         </section>
      </div>
   );
};

export default Survivor;
