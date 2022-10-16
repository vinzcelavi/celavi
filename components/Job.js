import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import PropTypes from 'prop-types';

const Jobs = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${space}
`;

const StyledJob = styled.li`
  margin-bottom: 60px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 400;
  color: ${({ theme }) => theme.main.text};

  h2 {
    margin: 0;
  }

  h3 {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Job = ({ children }) => <StyledJob>{children}</StyledJob>;

Job.propTypes = {
  children: PropTypes.any
};

export default Job;
export { Jobs };
