import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bgImage from '../assets/bg_darklord.png'

export const AppWrapper = styled.div`
  background: url(${bgImage}) no-repeat;
  background-size: cover;
  height: 100%;
  overflow-y: hidden;
`

export const BGOpacity = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  opacity: 0.7;
  position: fixed;
  top: 0;
  left: 0;
`

export const RouterWrapper = styled.div`
  min-width: 1400px;
`

export const Header = styled(Link)`
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: inline-block;
  margin: 20px;
  transition: 0.1s;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

export const GithubLinkWrapper = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  text-align: center;
  font-size: 0.8rem;

  & a {
    display: inline-block;
    margin-left: 10px;

    & img {
      width: 40px;
      height: 40px;
      transition: 0.2s;
      opacity: 0.7;
    }
  }

  & img:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`

export const PleaseUsePC = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: url(${bgImage}) no-repeat center;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 999;

  @media screen and (max-width: 1100px) {
    display: block;
  }
`

export const MobileTextWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10%;
  word-break: keep-all;
  font-size: 1.1rem;
  line-height: 1.6rem;
  display: flex;
  align-items: center;

  & p {
    color: white;
    margin: 0 auto;
    border: 2px solid rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 10px;
  }
`
