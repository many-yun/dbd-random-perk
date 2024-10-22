import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setKillers } from '../redux/slices/killersSlice'
import { setSurvivors } from '../redux/slices/survivorsSlice'
import { HowToUse } from '../styles/common.style'
import * as S from '../styles/Checkbox.style'

const Checkbox = ({ characters }) => {
  // 기본 캐릭터 목록 정의
  const defaultCharacters = [
    'common',
    'The Trapper',
    'The Wraith',
    'The Hillbilly',
    'The Nurse',
    'The Huntress',
    'Dwight Fairfield',
    'Meg Thomas',
    'Claudette Morel',
    'Jake Park',
    'Nea Karlsson',
  ]

  if (characters) {
    const isItKiller = characters?.some(character => character.en_name === 'The Trapper')
    const dispatch = useDispatch()
    const checkedCharacters = isItKiller
      ? useSelector(state => state.killers)
      : useSelector(state => state.survivors) // Redux에서 상태 가져오기

    useEffect(() => {
      const storedCharacters = isItKiller
        ? JSON.parse(localStorage.getItem('checkedKillers'))
        : JSON.parse(localStorage.getItem('checkedSurvivors'))

      if (storedCharacters) {
        // 저장된 캐릭터가 있을 경우 그걸로 설정
        isItKiller
          ? dispatch(setKillers(storedCharacters))
          : dispatch(setSurvivors(storedCharacters))
      } else {
        // 없을 경우, 기본 캐릭터들을 포함한 전체 목록 설정
        const allCharacters = characters.map(data => data.en_name)
        const initialCharacters = [
          ...defaultCharacters,
          ...allCharacters.filter(character => !defaultCharacters.includes(character)),
        ]
        isItKiller
          ? dispatch(setKillers(initialCharacters))
          : dispatch(setSurvivors(initialCharacters))
        localStorage.setItem(
          isItKiller ? 'checkedKillers' : 'checkedSurvivors',
          JSON.stringify(initialCharacters),
        )
      }
    }, [characters, dispatch])

    /** 캐릭터 단일선택 */
    const handleSingleCheck = (checked, id) => {
      let updatedCheckedCharacters
      if (checked) {
        updatedCheckedCharacters = [...checkedCharacters, id]
      } else {
        updatedCheckedCharacters = checkedCharacters.filter(
          el => el !== id && !defaultCharacters.includes(el),
        ) // 기본 캐릭터는 제거 불가
      }
      isItKiller
        ? dispatch(setKillers(updatedCheckedCharacters))
        : dispatch(setSurvivors(updatedCheckedCharacters)) // Redux 상태 업데이트
    }

    /** 캐릭터 전체선택/해제 */
    const handleAllCheck = checked => {
      const allIds = checked
        ? defaultCharacters // 기본 캐릭터들만 선택한 상태로 남기기
        : [...defaultCharacters, ...characters.map(el => el.en_name)] // 전체 선택 시 기본 캐릭터 포함
      isItKiller ? dispatch(setKillers(allIds)) : dispatch(setSurvivors(allIds))
    }

    return (
      <S.List>
        <h2>캐릭터</h2>
        <S.CheckAll
          onClick={e => handleAllCheck(e.target.checked)}
          checked={checkedCharacters?.length === characters?.length + defaultCharacters.length}
        >
          전체선택/해제
        </S.CheckAll>
        <S.ListForm>
          {characters
            ?.filter(character => !defaultCharacters.includes(character.en_name)) // 기본 캐릭터는 화면에 렌더링하지 않음
            .map(character => (
              <span key={character.en_name}>
                <S.ListInput
                  type="checkbox"
                  id={character.en_name}
                  name="dlc"
                  value={character.en_name}
                  onChange={e => handleSingleCheck(e.target.checked, character.en_name)}
                  checked={checkedCharacters?.includes(character.en_name)}
                />
                <S.ListLabel htmlFor={character.en_name}>{character.name}</S.ListLabel>
              </span>
            ))}
        </S.ListForm>
        <HowToUse>
          <S.HowToUseCheckbox>
            소유하고있는 캐릭터를 체크하여 퍽을 제한할 수 있습니다.
          </S.HowToUseCheckbox>
        </HowToUse>
      </S.List>
    )
  }
}

export default Checkbox
