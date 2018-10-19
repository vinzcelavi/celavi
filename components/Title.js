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
  color: ${COLORS.ANTHRACITE};
  cursor: default;
  ${space};
  ${fontSize};
`

const Title = ({ children, ...props }) => (
  <StyledTitle {...props}>
    {children}
  </StyledTitle>
)

export default Title
