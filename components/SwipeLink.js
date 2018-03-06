import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const StyledSwipeLink = styled.a`
  position: relative;
  display: inline-flex;
  margin: 0 -10px;
  padding: 2px 10px;
  font-family: ${FONTS.PRIMARY};
  font-size: 24px;
  line-height: 1.5;
  font-weight: 700;
  text-decoration: none;
  color: ${COLORS.WHITE};
  transition: all 0.35s ease;

  span {
    z-index: 2;
    position: relative;
    transition: all 0.35s ease;
  }

  &::after {
    z-index: 1;
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: -20%;
    width: 80%;
    height: 100%;
    background-color: ${rgba(COLORS.YELLOW, 0)};
    transition: all 0.35s ease;
  }

  &:hover {
    span {
      color: ${COLORS.WHITE};
      transform: translateX(-2px);
    }

    &::after {
      left: -10px;
      background-color: ${rgba(COLORS.YELLOW, 0.9)};
    }
  }
`

const SwipeLink = ({ children, ...props }) => (
  <StyledSwipeLink {...props}>
    <span>{children}</span>
  </StyledSwipeLink>
)

export default SwipeLink
