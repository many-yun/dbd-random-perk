import react, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCheckedKillers } from '../redux/slices/checkboxSlice'
import { HowToUse } from '../styles/common.style'
import * as S from '../styles/Checkbox.style'

const Checkbox = ({ characters }) => {
  const dispatch = useDispatch()
  const checkedCharacters = useSelector(state => state.character.characters) // Redux에서 상태 가져오기

  useEffect(() => {
    const isItKiller = characters.some(character => character.en_name === 'The Trapper')
    const storedCharacters = isItKiller
      ? JSON.parse(localStorage.getItem('checkedKillers'))
      : JSON.parse(localStorage.getItem('checkedSurvivors'))

    if (storedCharacters) {
      dispatch(setCheckedKillers(storedCharacters)) // 로컬스토리지에서 가져온 상태를 Redux에 저장
    } else {
      const allCharacters = characters.map(data => data.en_name)
      dispatch(setCheckedKillers(allCharacters)) // 초기 상태로 모든 캐릭터를 저장
      localStorage.setItem(
        isItKiller ? 'checkedKillers' : 'checkedSurvivors',
        JSON.stringify(allCharacters),
      )
    }
  }, [characters, dispatch])

  /** 캐릭터 단일선택 */
  const handleSingleCheck = (checked, id) => {
    const updatedCheckedCharacters = checked
      ? [...checkedCharacters, id]
      : checkedCharacters.filter(el => el !== id)
    dispatch(setCheckedKillers(updatedCheckedCharacters)) // Redux 상태 업데이트
  }

  /** 캐릭터 전체선택/해제 */
  const handleAllCheck = checked => {
    const allIds = checked ? [] : characters.map(el => el.en_name)
    dispatch(setCheckedKillers(allIds)) // 전체선택 상태 Redux에 저장
  }

  return (
    <S.List>
      <h2>캐릭터</h2>
      <S.CheckAll
        onClick={e => handleAllCheck(e.target.checked)}
        checked={checkedCharacters?.length === characters.length}
      >
        전체선택/해제
      </S.CheckAll>
      <S.ListForm>
        {characters?.map(character => (
          <span key={character.en_name}>
            <S.ListInput
              type="checkbox"
              id={character.en_name}
              name="dlc"
              value={character.en_name}
              onChange={e => handleSingleCheck(e.target.checked, character.en_name)}
              checked={checkedCharacters?.includes(character.en_name) ? true : false}
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

export default Checkbox
