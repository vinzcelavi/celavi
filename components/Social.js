import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const StyledSocial = styled.div`
  display: flex;
`

const SocialLink = styled.a`
  margin-right: 20px;
  font-family: ${FONTS.PRIMARY};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${rgba(COLORS.WHITE, 0.8)};
  transition: color 0.25s ease;

  &:hover {
    color: ${COLORS.WHITE};
  }
`

const Social = ({ children }) => (
  <StyledSocial>
    {children}
  </StyledSocial>
)

export default Social
export { SocialLink }
