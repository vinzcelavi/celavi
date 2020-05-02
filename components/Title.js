import React from 'react';
import styled from 'styled-components';
import { space, fontSize } from 'styled-system';

const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: 60px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 40px;
  line-height: 1.5;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.anthracite};
  cursor: default;
  ${space};
  ${fontSize};
`;

const Title = ({ children, ...props }) => (
  <StyledTitle {...props}>{children}</StyledTitle>
);

export default Title;
