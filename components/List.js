import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { rgba } from 'polished'

import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${space}
`

const ListItem = styled.li`
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  font-family: ${FONTS.SECONDARY};
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 400;
  color: ${rgba(COLORS.ANTHRACITE, 0.8)};

  &::before {
    content: "";
    display: block;
    margin-right: 10px;
    width: 16px;
    height: 1px;
    background-color: ${rgba(COLORS.ANTHRACITE, 0.4)};
  }
`

const List = ({ children, ...props }) => (
  <StyledList {...props}>
    {children}
  </StyledList>
)

export default List
export { ListItem }
