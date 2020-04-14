import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { space } from 'styled-system'

import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const Jobs = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${space}
`

const StyledJob = styled.li`
  margin-bottom: 60px;
  font-family: ${FONTS.SECONDARY};
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 400;
  color: ${rgba(COLORS.ANTHRACITE, 0.9)};

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0;
    font-family: ${FONTS.PRIMARY};
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${COLORS.PRIMARY};
  }
`

const Job = ({ children }) => (
  <StyledJob>
    {children}
  </StyledJob>
)

export default Job
export { Jobs }
