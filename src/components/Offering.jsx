import React from 'react'
import styled from 'styled-components'
import getImageURL from '../utils/getImageURL'

const Offering = ({ offeringsInfo, offeringRandomNum }) => {
  return (
    <div className="Offering">
      <h2>공물</h2>
      <OfferingWrapper>
        <OfferingImageWrapper className="OfferingBox">
          <OfferingImage src={getImageURL(offeringsInfo[offeringRandomNum].icon)} />
        </OfferingImageWrapper>
        <p>{offeringsInfo[offeringRandomNum].name}</p>
        <OfferingDescription>
          <p>
            {offeringsInfo[offeringRandomNum].name}
            <span>{offeringsInfo[offeringRandomNum].en_name}</span>
          </p>
          <span>{offeringsInfo[offeringRandomNum].description}</span>
        </OfferingDescription>
      </OfferingWrapper>
    </div>
  )
}

export default Offering

const OfferingWrapper = styled.div`
  text-align: center;
  position: relative;

  &:hover div {
    display: inline-block;
  }

  & > p {
    margin-top: 10px;
    font-size: 0.9rem;
    line-height: 1.2rem;
    word-break: keep-all;
  }
`
const OfferingImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const OfferingImage = styled.img`
  width: 101%;
  height: 101%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const OfferingDescription = styled.div`
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
