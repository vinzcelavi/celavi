import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const StyledParagraph = styled.p`
  margin-bottom: 30px;
  font-family: ${FONTS.SECONDARY};
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 400;
  color: ${COLORS.ANTHRACITE};
  ${space}

  strong {
    font-weight: 700;
  }
`

const Paragraph = ({ children, ...props }) => (
  <StyledParagraph {...props}>
    {children}
  </StyledParagraph>
)

export default Paragraph
