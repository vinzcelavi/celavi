import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import COLORS from '../constants/colors';

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.anthracite};
  box-shadow: inset 0 -2px 0 ${({ theme }) => rgba(theme.colors.anthracite, 0.8)};
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0 -2px 0 ${({ theme }) => rgba(theme.colors.primary, 0.8)};
  }
`;

const Link = ({ children, ...props }) => (
  <StyledLink {...props}>{children}</StyledLink>
);

export default Link;
