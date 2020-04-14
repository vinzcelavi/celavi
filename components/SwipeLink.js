import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const TRANS_FUNCTION = 'cubic-bezier(0.77, 0, 0.175, 1)'
const TRANS_DURATION_IN = '0.35s'
const TRANS_DURATION_OUT = '0.5s'
const HOVER_WIDTH = '70%'

const StyledSwipeLink = styled.a`
  position: relative;
  display: inline-flex;
  margin: 0 -20px;
  padding: 1px 20px;
  font-family: ${FONTS.PRIMARY};
  font-size: 24px;
  line-height: 1.5;
  font-weight: 700;
  text-decoration: none;
  color: ${COLORS.ANTHRACITE};
  overflow: hidden;
  transition: all 0.35s ${TRANS_FUNCTION};

  span {
    z-index: 20;
    position: relative;
    transition: all ${TRANS_DURATION_IN} ${TRANS_FUNCTION};
  }

  &::before,
  &::after {
    display: block;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background-color: ${lighten(0.1, COLORS.PRIMARY)};
  }

  &::before {
    z-index: 10;
    opacity: 1;
    transform: translateX(-110%);
    transition: all 0s ${TRANS_FUNCTION};
  }

  &::after {
    z-index: 5;
    width: ${HOVER_WIDTH};
    opacity: 1;
    transform: translateX(190%);
    transition: all ${TRANS_DURATION_OUT} ${TRANS_FUNCTION};
  }

  &:hover {
    span {
      transform: translateX(12px);
    }

    &::before,
    &::after {
      width: ${HOVER_WIDTH};
      opacity: 1;
    }

    &::before {
      transform: translateX(0);
      transition: all ${TRANS_DURATION_IN} ${TRANS_FUNCTION};
    }

    &::after {
      transform: translateX(0);
      transition: all 0s ${TRANS_DURATION_IN} ${TRANS_FUNCTION};
    }
  }
`

const SwipeLink = ({ children, ...props }) => (
  <StyledSwipeLink {...props}>
    <span>{children}</span>
  </StyledSwipeLink>
)

export default SwipeLink
