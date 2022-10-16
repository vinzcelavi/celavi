import React from 'react';
import styled from 'styled-components';
import { space, fontSize } from 'styled-system';
import PropTypes from 'prop-types';

const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: 60px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 40px;
  line-height: 1.5;
  font-weight: 300;
  color: ${({ theme }) => theme.main.text};
  cursor: default;
  ${space};
  ${fontSize};
  transition: all 0.45s ease;
`;

const Title = ({ children, ...props }) => (
  <StyledTitle {...props}>{children}</StyledTitle>
);

Title.propTypes = {
  children: PropTypes.any
};

export default Title;
