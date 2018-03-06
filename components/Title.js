import React from 'react'
import styled from 'styled-components'
import { space, fontSize } from 'styled-system'
import { rgba } from 'polished'

import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: 60px;
  font-family: ${FONTS.PRIMARY};
  font-size: 40px;
  line-height: 1.5;
  font-weight: 300;
  color: ${COLORS.WHITE};
  cursor: default;
  ${space}
  ${fontSize}

  strong {
    font-weight: 500;
  }

  u {
    text-decoration: none;
    padding-bottom: 3px;
    box-shadow: inset 0 -30px 0 ${rgba(COLORS.WHITE, 0.07)};
  }

  &,
  strong,
  span {
    &::selection {
      background-color: ${COLORS.YELLOW};
    }
  }
`

const Title = ({ children, ...props }) => (
  <StyledTitle {...props}>
    {children}
  </StyledTitle>
)

export default Title
