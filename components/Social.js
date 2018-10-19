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
  color: ${rgba(COLORS.ANTHRACITE, 0.9)};
  transition: color 0.25s ease;

  &:hover {
    color: ${COLORS.BLACK};
  }

  ${props => props.dribbble && `
    &:hover {
      color: #ea4c89;
    }
  `}

  ${props => props.twitter && `
    &:hover {
      color: #00aced;
    }
  `}
`

const Social = ({ children }) => (
  <StyledSocial>
    {children}
  </StyledSocial>
)

export default Social
export { SocialLink }
