import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Lever, HowToUse } from '../styles/common.style'
import * as S from '../styles/Perks.style'

const Perks = ({ perks }) => {
  if (perks) {
    const isItKiller = perks?.some(perk => perk.character === 'The Trapper')
    const checkedCharacters = isItKiller
      ? useSelector(state => state.killers) || []
      : useSelector(state => state.survivors) || [] // 초기값을 빈 배열로 설정

    console.log(checkedCharacters)
    const [randomNumArr, setRandomNumArr] = useState([0, 1, 2, 3])
    const [filteredPerks, setFilterPerks] = useState([])

    useEffect(() => {
      const updatedFilteredPerks = perks?.filter(
        perk => checkedCharacters.includes(perk.character) || perk.character === 'common',
      )
      setFilterPerks(updatedFilteredPerks)

      // 체크박스 선택 시 randomNumArr을 [0, 1, 2, 3]으로 리셋
      setRandomNumArr([0, 1, 2, 3])
    }, [checkedCharacters, perks])

    const generateRandomNumbers = () => {
      let arr = []
      while (arr.length < Math.min(4, filteredPerks.length)) {
        let randomNum = Math.floor(Math.random() * filteredPerks.length)
        if (!arr.includes(randomNum)) {
          arr.push(randomNum)
        }
      }
      return arr
    }
    console.log(filteredPerks)
    const randomPerk = e => {
      e.preventDefault()
      const newRandomNums = generateRandomNumbers()
      setRandomNumArr(newRandomNums)
    }

    const changeOnePerk = index => {
      let randomNum
      do {
        randomNum = Math.floor(Math.random() * filteredPerks.length)
      } while (randomNum === randomNumArr[index] || randomNumArr.includes(randomNum))

      const newRandomNumArr = [...randomNumArr]
      newRandomNumArr[index] = randomNum
      setRandomNumArr(newRandomNumArr)
    }

    return (
      <S.PerkSectionWrapper>
        <h2>기술</h2>
        <Lever onClick={randomPerk}></Lever>
        <S.PerksWrapper>
          {randomNumArr.map((randomNum, i) => {
            // filteredPerks 확인
            if (randomNum >= filteredPerks.length) {
              return null // undefined 방지로 null 리턴
            }
            return (
              <S.Perk key={i}>
                <img
                  src={filteredPerks[randomNum]?.img}
                  alt="perk"
                  onClick={() => changeOnePerk(i)}
                />
                <S.Info>
                  <S.PerkTitle>
                    {filteredPerks[randomNum]?.name}
                    {filteredPerks[randomNum] && filteredPerks[randomNum].character !== 'common' ? (
                      <S.Dedicated>{filteredPerks[randomNum].character} 전용 기술</S.Dedicated>
                    ) : (
                      <S.Dedicated>공용 기술</S.Dedicated>
                    )}
                  </S.PerkTitle>
                  <S.PerkTxt
                    dangerouslySetInnerHTML={{ __html: filteredPerks[randomNum]?.description }} // 안전한 접근
                  ></S.PerkTxt>
                </S.Info>
                <p>{filteredPerks[randomNum] ? filteredPerks[randomNum].name : ''}</p>
              </S.Perk>
            )
          })}
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
