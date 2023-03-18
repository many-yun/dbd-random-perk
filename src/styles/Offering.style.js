import styled from 'styled-components'
import offeringBox from '../assets/offering-box.png'

export const OfferingSection = styled.div`
  display: inline-block;
  width: 35%;
  padding-left: 30px;
  vertical-align: top;
  text-align: center;

  & h2 {
    text-align: left;
  }
`

export const OfferingWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover div {
    display: block;
  }

  & > p {
    margin-top: 10px;
    font-size: 0.9rem;
    line-height: 1.2rem;
    word-break: keep-all;
  }
`
export const OfferingImageWrapper = styled.div`
  text-align: center;
  position: relative;
  width: 110px;
  height: 110px;
  background: url(${offeringBox}) no-repeat;
  background-size: contain;
  margin-top: -10px;
  background-position: center;
`

export const OfferingImage = styled.img`
  width: 101%;
  height: 101%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-user-drag: none;
`

export const OfferingDescription = styled.div`
  width: 400px;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  font-size: 0.9rem;
  position: absolute;
  left: 130px;
  top: 90px;
  z-index: 999;
  display: none;

  & p {
    padding: 15px;
    background-color: rgba(198, 161, 53, 0.6);
    font-size: 1rem;

    & span {
      margin-left: 10px;
      opacity: 0.7;
    }
  }

  & > span {
    display: block;
    padding: 15px;
    line-height: 1.2rem;
    word-break: keep-all;
  }
`
