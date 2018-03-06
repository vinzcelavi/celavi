import React from 'react'
import styled from 'styled-components'
import SVG  from 'react-inlinesvg'
import { rgba } from 'polished'

import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const SAY_MY_NAME = 'Vincent Bianciotto'

const StyledLogo = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 60px 0;
  width: 34px;
  height: 48px;
  cursor: default;

  polygon {
    fill: ${COLORS.WHITE};

    & ~ polygon {
      fill: ${COLORS.WHITE};
    }
  }
`

const SayMyMame = styled.span`
  position: absolute;
  top: 15px;
  left: 45px;
  font-family: ${FONTS.PRIMARY};
  font-size: 13px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${COLORS.WHITE};

  span {
    display: inline-block;
    margin-right: 2px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:nth-child(7) {
      margin-right: 8px;
    }
  }
`

const Logo = () => (
  <StyledLogo>
    <SVG src="../static/logo-vinz.svg" />
    <SayMyMame>
      {SAY_MY_NAME}
    </SayMyMame>
  </StyledLogo>
)

export default Logo
export { SayMyMame }
