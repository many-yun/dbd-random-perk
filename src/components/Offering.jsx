import React from 'react'
import getImageURL from '../utils/getImageURL'

import {
  OfferingSection,
  OfferingWrapper,
  OfferingImageWrapper,
  OfferingImage,
  OfferingDescription,
} from '../styles/Offering.style'

const Offering = ({ offeringsInfo, offeringRandomNum }) => {
  return (
    <OfferingSection>
      <h2>공물</h2>
      <OfferingWrapper>
        <OfferingImageWrapper>
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
    </OfferingSection>
  )
}

export default Offering
