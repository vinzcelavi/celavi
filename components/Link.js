import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.main.text};
  box-shadow: inset 0 -2px 0 ${({ theme }) => theme.link.boxShadow};
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: inset 0 -2px 0 ${({ theme }) => theme.link.boxShadowHover};
  }
`;

const Link = ({ children, ...props }) => (
  <StyledLink {...props}>{children}</StyledLink>
);

export default Link;
