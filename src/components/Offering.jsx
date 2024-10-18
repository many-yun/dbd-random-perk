import React from 'react'

import {
  OfferingSection,
  OfferingWrapper,
  OfferingImageWrapper,
  OfferingImage,
  OfferingDescription,
} from '../styles/Offering.style'

const Offering = ({ offerings, offeringRandomNum }) => {
  return (
    <OfferingSection>
      <OfferingWrapper>
        <OfferingImageWrapper>
          <OfferingImage src={offerings[offeringRandomNum].img} />
        </OfferingImageWrapper>
        <p>{offerings[offeringRandomNum].name}</p>
        <OfferingDescription>
          <p>{offerings[offeringRandomNum].name}</p>
          <span
            dangerouslySetInnerHTML={{ __html: offerings[offeringRandomNum]?.description }}
          ></span>
        </OfferingDescription>
      </OfferingWrapper>
    </OfferingSection>
  )
}

export default Offering
