import React from 'react';
import styled from 'styled-components';
import { position } from 'styled-system';
import { darken } from 'polished';
import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import ProfilePic from './ProfilePic';

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 100px;
  ${position};
`;

const Name = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-family: ${FONTS.PRIMARY};
  font-size: 26px;
  line-height: 1.25;
  font-weight: 700;
  color: ${COLORS.ANTHRACITE};
`;

const JobTitle = styled.h2`
  margin: 0;
  font-family: ${FONTS.SECONDARY};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: lowercase;
  color: ${darken(0.03, COLORS.PRIMARY)};
`;

const Header = ({ position }) => (
  <StyledHeader position={position}>
    <ProfilePic />
    <Name>Vincent Bianciotto</Name>
    <JobTitle>Web Designer</JobTitle>
  </StyledHeader>
);

export default Header;
