import React, { useState } from 'react'
import getImageURL from '../utils/getImageURL'

import { Lever, HowToUse } from '../styles/common.style'
import * as S from '../styles/Perks.style'

const Perks = ({ perks }) => {
  if (perks !== false) {
    let arr = []
    for (let i = 0; i < 4; i++) {
      let randomNum = Math.floor(Math.random() * perks.length)
      if (arr.indexOf(randomNum) === -1) arr.push(randomNum)
      else i--
    }
    const [randomNum1, setRandomNum1] = useState(arr[0])
    const [randomNum2, setRandomNum2] = useState(arr[1])
    const [randomNum3, setRandomNum3] = useState(arr[2])
    const [randomNum4, setRandomNum4] = useState(arr[3])
    const [randomNumArr, setRandomNumArr] = useState([
      randomNum1,
      randomNum2,
      randomNum3,
      randomNum4,
    ])
    const randomPerk = e => {
      e.preventDefault()
      arr.splice(0, arr.length)
      for (let i = 0; i < 4; i++) {
        let randomNum = Math.floor(Math.random() * perks.length)
        if (arr.indexOf(randomNum) === -1) arr.push(randomNum)
        else i--
      }
      setRandomNum1(arr[0])
      setRandomNum2(arr[1])
      setRandomNum3(arr[2])
      setRandomNum4(arr[3])
      setRandomNumArr(arr)
    }
    const otherPerk1 = () => {
      let randomNum = Math.floor(Math.random() * perks.length)
      if (randomNum !== randomNum2 && randomNum !== randomNum3 && randomNum !== randomNum4) {
        arr.splice(0, 1, randomNum)
        setRandomNum1(arr[0])
        setRandomNumArr(arr)
      }
    }
    const otherPerk2 = () => {
      let randomNum = Math.floor(Math.random() * perks.length)
      if (randomNum !== randomNum1 && randomNum !== randomNum3 && randomNum !== randomNum4) {
        arr.splice(1, 1, randomNum)
        setRandomNum2(arr[1])
        setRandomNumArr(arr)
      }
    }
    const otherPerk3 = () => {
      let randomNum = Math.floor(Math.random() * perks.length)
      if (randomNum !== randomNum1 && randomNum !== randomNum2 && randomNum !== randomNum4) {
        arr.splice(2, 1, randomNum)
        setRandomNum3(arr[2])
        setRandomNumArr(arr)
      }
    }
    const otherPerk4 = () => {
      let randomNum = Math.floor(Math.random() * perks.length)
      if (randomNum !== randomNum1 && randomNum !== randomNum2 && randomNum !== randomNum3) {
        arr.splice(3, 1, randomNum)
        setRandomNum4(arr[3])
        setRandomNumArr(arr)
      }
    }

    return (
      <S.PerkSectionWrapper>
        <h2>기술</h2>
        <Lever onClick={randomPerk}></Lever>
        <S.PerksWrapper>
          <S.Perk>
            <img
              src={perks[randomNum1] ? getImageURL(perks[randomNum1].icon) : ''}
              alt="perk"
              onClick={otherPerk1}
            />
            <S.Info>
              <S.PerkTitle>
                {perks[randomNum1] ? perks[randomNum1].perk_name : ''}
                <span>{perks[randomNum1] ? perks[randomNum1].perk_tag : ''}</span>
                {perks[randomNum1] && perks[randomNum1].name !== '공용' ? (
                  <S.Dedicated>
                    {perks[randomNum1] ? perks[randomNum1].name : ''} 전용 기술
                  </S.Dedicated>
                ) : (
                  <S.Dedicated>공용 기술</S.Dedicated>
                )}
              </S.PerkTitle>
              <S.PerkTxt>
                {perks[randomNum1] ? perks[randomNum1].description : ''}
                <p>
                  블러드웹에서{' '}
                  <span>
                    {perks[randomNum1]
                      ? perks[randomNum1].name !== '공용' && perks[randomNum1].name
                      : ''}{' '}
                    {perks[randomNum1] ? perks[randomNum1].level : ''}+
                  </span>{' '}
                  레벨을 달성하거나 비밀의 신전을 통해 활성화 할 수 있습니다.
                </p>
              </S.PerkTxt>
              <S.PerkTags>
                {perks[randomNum1] ? perks[randomNum1].tags.map(e => `#${e} `) : ''}
              </S.PerkTags>
            </S.Info>
            <p>{perks[randomNum1] ? perks[randomNum1].perk_name : ''}</p>
          </S.Perk>
          <S.Perk>
            <img
              src={perks[randomNum2] ? getImageURL(perks[randomNum2].icon) : ''}
              alt="perk"
              onClick={otherPerk2}
            />
            <S.Info>
              <S.PerkTitle>
                {perks[randomNum2] ? perks[randomNum2].perk_name : ''}
                <span>{perks[randomNum2] ? perks[randomNum2].perk_tag : ''}</span>
                {perks[randomNum2] && perks[randomNum2].name !== '공용' ? (
                  <S.Dedicated>
                    {perks[randomNum2] ? perks[randomNum2].name : ''} 전용 기술
                  </S.Dedicated>
                ) : (
                  <S.Dedicated>공용 기술</S.Dedicated>
                )}
              </S.PerkTitle>
              <S.PerkTxt>
                {perks[randomNum2] ? perks[randomNum2].description : ''}
                <p>
                  블러드웹에서{' '}
                  <span>
                    {perks[randomNum2]
                      ? perks[randomNum2].name !== '공용' && perks[randomNum2].name
                      : ''}{' '}
                    {perks[randomNum2] ? perks[randomNum2].level : ''}+
                  </span>{' '}
                  레벨을 달성하거나 비밀의 신전을 통해 활성화 할 수 있습니다.
                </p>
              </S.PerkTxt>
              <S.PerkTags>
                {perks[randomNum2] ? perks[randomNum2].tags.map(e => `#${e} `) : ''}
              </S.PerkTags>
            </S.Info>
            <p>{perks[randomNum2] ? perks[randomNum2].perk_name : ''}</p>
          </S.Perk>
          <S.Perk>
            <img
              src={perks[randomNum3] ? getImageURL(perks[randomNum3].icon) : ''}
              alt="perk"
              onClick={otherPerk3}
            />
            <S.Info>
              <S.PerkTitle>
                {perks[randomNum3] ? perks[randomNum3].perk_name : ''}
                <span>{perks[randomNum3] ? perks[randomNum3].perk_tag : ''}</span>
                {perks[randomNum3] && perks[randomNum3].name !== '공용' ? (
                  <S.Dedicated>
                    {perks[randomNum3] ? perks[randomNum3].name : ''} 전용 기술
                  </S.Dedicated>
                ) : (
                  <S.Dedicated>공용 기술</S.Dedicated>
                )}
              </S.PerkTitle>
              <S.PerkTxt>
                {perks[randomNum3] ? perks[randomNum3].description : ''}
                <p>
                  블러드웹에서{' '}
                  <span>
                    {perks[randomNum3]
                      ? perks[randomNum3].name !== '공용' && perks[randomNum3].name
                      : ''}{' '}
                    {perks[randomNum3] ? perks[randomNum3].level : ''}+
                  </span>{' '}
                  레벨을 달성하거나 비밀의 신전을 통해 활성화 할 수 있습니다.
                </p>
              </S.PerkTxt>
              <S.PerkTags>
                {perks[randomNum3] ? perks[randomNum3].tags.map(e => `#${e} `) : ''}
              </S.PerkTags>
            </S.Info>
            <p>{perks[randomNum3] ? perks[randomNum3].perk_name : ''}</p>
          </S.Perk>
          <S.Perk>
            <img
              src={perks[randomNum4] ? getImageURL(perks[randomNum4].icon) : ''}
              alt="perk"
              onClick={otherPerk4}
            />
            <S.Info>
              <S.PerkTitle>
                {perks[randomNum4] ? perks[randomNum4].perk_name : ''}
                <span>{perks[randomNum4] ? perks[randomNum4].perk_tag : ''}</span>
                {perks[randomNum4] && perks[randomNum4].name !== '공용' ? (
                  <S.Dedicated>
                    {perks[randomNum4] ? perks[randomNum4].name : ''} 전용 기술
                  </S.Dedicated>
                ) : (
                  <S.Dedicated>공용 기술</S.Dedicated>
                )}
              </S.PerkTitle>
              <S.PerkTxt>
                {perks[randomNum4] ? perks[randomNum4].description : ''}
                <p>
                  블러드웹에서{' '}
                  <span>
                    {perks[randomNum4]
                      ? perks[randomNum4].name !== '공용' && perks[randomNum4].name
                      : ''}{' '}
                    {perks[randomNum4] ? perks[randomNum4].level : ''}+
                  </span>{' '}
                  레벨을 달성하거나 비밀의 신전을 통해 활성화 할 수 있습니다.
                </p>
              </S.PerkTxt>
              <S.PerkTags>
                {perks[randomNum4] ? perks[randomNum4].tags.map(e => `#${e} `) : ''}
              </S.PerkTags>
            </S.Info>
            <p>{perks[randomNum4] ? perks[randomNum4].perk_name : ''}</p>
          </S.Perk>
        </S.PerksWrapper>
        <HowToUse>
          <S.HowToUseLever>
            <b>"레버"</b> 를 눌러 랜덤으로 <br />
            퍽을 뽑을 수 있습니다. <br />
            <b>"아이콘"</b> 을 눌러 <br />
            개별 뽑기가 가능합니다.
          </S.HowToUseLever>
        </HowToUse>
      </S.PerkSectionWrapper>
    )
  }
}

export default Perks
