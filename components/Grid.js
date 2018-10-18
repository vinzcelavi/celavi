import React from 'react'
import styled from 'styled-components'

import FONTS from '../constants/fonts'
import COLORS from '../constants/colors'

const Grid = styled.div`
  display: flex;
  flex-flow: row wrapù;
  width: 100%;
`

const GridCell = styled.div`
  display: block;
  flex: 1;
  width: 100%;

  ${props => props.width &&`
    flex: 0 0 ${props.width};
    max-width: ${props.width};
  `}
`

export { GridCell }
export default Grid
