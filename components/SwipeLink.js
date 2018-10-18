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
    z-index: 20;
    position: relative;
    transition: all 0.35s ease;
  }

  &::before,
  &::after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background-color: ${COLORS.YELLOW};
    opacity: 0;
  }

  &::before {
    z-index: 10;
    transform: translateX(-60%);
    transition: all 0s ease;
  }

  &::after {
    z-index: 5;
    transform: translateX(40%);
    transition: all 0.35s ease;
  }

  &:hover {
    span {
      color: ${COLORS.WHITE};
    }

    &::before,
    &::after {
      opacity: 1;
    }

    &::before {
      transform: translateX(-30%);
      transition: all 0.35s ease;
    }

    &::after {
      transform: translateX(-30%);
      transition: all 0s 0.35s ease;
    }
  }
`

const SwipeLink = ({ children, ...props }) => (
  <StyledSwipeLink {...props}>
    <span>{children}</span>
  </StyledSwipeLink>
)

export default SwipeLink
