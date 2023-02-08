import react, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Checkbox = ({ characters, getCheckboxInfo }) => {
  /** 로리는 생존자/살인마 여부 판단 후 로컬스토리지 저장 */
  const checkedCharacter =
    characters[0].name === '로리'
      ? JSON.parse(localStorage.getItem('dbd_survivor'))
      : JSON.parse(localStorage.getItem('dbd_killer'))

  const [checkedCharacters, setCheckedCharacters] = useState(checkedCharacter)

  characters[0].name === '로리'
    ? localStorage.setItem('dbd_survivor', JSON.stringify(checkedCharacters))
    : localStorage.setItem('dbd_killer', JSON.stringify(checkedCharacters))

  characters[0].name === '로리'
    ? checkedCharacter === null &&
      localStorage.setItem('dbd_survivor', JSON.stringify(characters.map(data => data.id)))
    : checkedCharacter === null &&
      localStorage.setItem('dbd_killer', JSON.stringify(characters.map(data => data.id)))

  /** 캐릭터 단일선택 */
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckedCharacters(prev => [...prev, id])
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckedCharacters(checkedCharacters.filter(el => el !== id))
    }
  }

  /** 캐릭터 전체선택/해제 */
  const handleAllCheck = checked => {
    if (!checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = []
      characters.forEach(el => idArray.push(el.id))
      setCheckedCharacters(idArray)
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckedCharacters([])
    }
  }

  useEffect(() => {
    getCheckboxInfo(checkedCharacters)
  }, [checkedCharacters])

  return (
    <List>
      <h2>캐릭터</h2>
      <CheckAll
        onClick={e => handleAllCheck(e.target.checked)}
        checked={checkedCharacters.length === characters.length ? true : false}
      >
        전체선택/해제
      </CheckAll>
      <ListForm>
        {characters?.map(data => (
          <span key={data.id}>
            <ListInput
              type="checkbox"
              id={data.id}
              name="dlc"
              value={data.id}
              onChange={e => handleSingleCheck(e.target.checked, data.id)}
              checked={checkedCharacters.includes(data.id) ? true : false}
            />
            <ListLabel htmlFor={data.id}>
              {data.name}
              {data.nickname && data.name !== data.nickname ? '·' : ''}
              {data.nickname && data.name !== data.nickname ? data.nickname : ''}
            </ListLabel>
          </span>
        ))}
      </ListForm>
    </List>
  )
}

export default Checkbox

const List = styled.section`
  position: relative;
`

const CheckAll = styled.button`
  position: absolute;
  right: 30px;
  top: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  line-height: 25px;
  height: 25px;
  cursor: pointer;
  border: none;
  transition: 0.2s;

  &:hover {
    background-color: white;
  }
`

const ListForm = styled.form`
  height: 120px;
  overflow-y: scroll;
`

const ListInput = styled.input`
  &[type='checkbox'] {
    display: none;
  }

  &[type='checkbox'] + label {
    cursor: pointer;
    /* background-color: red; */
    background-color: rgba(255, 255, 255, 0.2);
    color: #444;
    font-weight: bold;
  }

  &[type='checkbox']:hover + label {
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
  }

  &[type='checkbox']:checked + label {
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
  }
`

const ListLabel = styled.label`
  margin-right: 10px;
  margin-bottom: 5px;
  display: inline-block;
  line-height: 1.5rem;
  padding: 0 10px;
  border-radius: 0.75rem;
  transition: 0.1s;
  font-size: 0.95rem;
`
