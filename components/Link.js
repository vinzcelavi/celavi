import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${COLORS.ANTHRACITE};
  box-shadow: inset 0 -2px 0 ${rgba(COLORS.ANTHRACITE, 0.8)};
  transition: all 0.25s ease;

  &:hover {
    color: ${COLORS.YELLOW};
    box-shadow: inset 0 -2px 0 ${rgba(COLORS.YELLOW, 0.8)};
  }
`

const Link = ({ children, ...props }) => (
  <StyledLink {...props}>
    {children}
  </StyledLink>
)

export default Link
