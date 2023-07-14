import styled from 'styled-components'

export const HowToUseCheckbox = styled.div`
  left: -300px;
  top: 40px;
  border-radius: 20px 0 20px 20px;

  @media screen and (max-width: 1600px) {
    left: -240px;
  }
`

export const List = styled.section`
  position: relative;
`

export const CheckAll = styled.button`
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
  font-size: 0.9rem;

  @media screen and (max-width: 1600px) {
    right: 20px;
    top: 20px;
    font-size: 0.8rem;
  }

  &:hover {
    background-color: white;
  }
`

export const ListForm = styled.form`
  height: 120px;
  overflow-y: scroll;

  @media screen and (max-width: 1600px) {
    height: 80px;
  }
`

export const ListInput = styled.input`
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

export const ListLabel = styled.label`
  margin-right: 10px;
  margin-bottom: 7px;
  display: inline-block;
  line-height: 1.5rem;
  padding: 0 10px;
  border-radius: 0.75rem;
  transition: 0.1s;
  font-size: 0.85rem;

  @media screen and (max-width: 1600px) {
    font-size: 0.8rem;
    line-height: 1.3rem;
    padding: 0 7px;
  }

  @media screen and (max-width: 1280px) {
    margin-right: 5px;
    margin-bottom: 2px;
  }
`
