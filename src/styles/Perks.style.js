import styled from 'styled-components'
import perkBG from '../assets/perk-box.png'

export const HowToUseLever = styled.div`
  border-radius: 0 20px 20px 20px;
  right: -300px;
  top: 0;

  @media screen and (max-width: 1600px) {
    right: -240px;
  }
`

export const PerkSectionWrapper = styled.section`
  margin-bottom: 5px;
`

export const PerkTitle = styled.div`
  position: relative;
  background-color: rgb(89, 34, 134, 0.6);
  padding: 20px;

  & span {
    margin-left: 10px;
    opacity: 0.7;
  }
`

export const Dedicated = styled.span`
  position: absolute;
  top: 13px;
  right: 20px;
  font-size: 0.8rem;
  margin-top: 10px;
`

export const Info = styled.div`
  position: absolute;
  left: 80%;
  top: 80%;
  width: 550px;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.9);
  word-break: keep-all;
  display: none;
  cursor: default;
`

export const PerksWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Perk = styled.div`
  width: 25%;
  display: inline-block;
  background: url(${perkBG});
  background-size: contain;
  position: relative;
  margin-right: 20px;
  box-sizing: border-box;
  vertical-align: top;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  &:last-child {
    margin-right: 0;
  }
  &:hover ${Info} {
    display: block;
  }

  & img {
    width: 90%;
    height: 90%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.2s;
    -webkit-user-drag: none;

    &:hover {
      width: 100%;
      height: 100%;
    }
    &:active {
      width: 85%;
      height: 85%;
    }
  }

  & > p {
    text-align: center;
    position: absolute;
    left: 0;
    bottom: -30px;
    width: 100%;
    font-size: 0.95rem;
    word-break: keep-all;
    line-height: 1.2rem;
  }
`

export const PerkTxt = styled.div`
  padding: 20px;
  line-height: normal;
  word-break: keep-all;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  & > p {
    opacity: 0.8;
    display: none;

    & span {
      font-weight: bold;
      color: Orange;
    }
  }
  & img {
    display: none;
  }
`

export const PerkTags = styled.div`
  word-break: keep-all;
  padding: 20px;
  font-size: 0.8rem;
  opacity: 0.7;
`
