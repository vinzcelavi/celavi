import React from 'react';
import styled from 'styled-components';
import { space, fontSize } from 'styled-system';
import PropTypes from 'prop-types';

const StyledParagraph = styled.p`
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 400;
  color: ${({ theme }) => theme.main.secondaryText};
  ${space};
  ${fontSize};
  transition: all 0.45s ease;

  strong {
    font-weight: 700;
  }
`;

const Paragraph = ({ children, ...props }) => (
  <StyledParagraph {...props}>{children}</StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.any
};

export default Paragraph;
