import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { space, fontSize } from 'styled-system';

const StyledParagraph = styled.p`
  margin-bottom: 30px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 400;
  color: ${({ theme }) => rgba(theme.colors.anthracite, 0.8)};
  ${space};
  ${fontSize};

  strong {
    font-weight: 700;
  }
`;

const Paragraph = ({ children, ...props }) => (
  <StyledParagraph {...props}>{children}</StyledParagraph>
);

export default Paragraph;
