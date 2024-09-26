import React from 'react';
import styled from 'styled-components';
import { position } from 'styled-system';
import ProfilePic from './ProfilePic';
import Social, { SocialLink } from '../components/Social';
import PropTypes from 'prop-types';

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 100px;
  ${position};
`;

const Name = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 26px;
  line-height: 1.25;
  font-weight: 700;
  color: ${({ theme }) => theme.main.text};
  transition: all 0.45s ease;
`;

const JobTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.header.jobTitle};
  transition: all 0.45s ease;
`;

const Header = ({ position }) => (
  <StyledHeader position={position}>
    <ProfilePic />

    <div>
      <Name>Vincent Bianciotto</Name>
      <JobTitle>Front-End Designer</JobTitle>
    </div>

    <div>
      <Social>
        <SocialLink href="https://instagram.com/vinzcelavi" insta>
          Instagram
        </SocialLink>
        <SocialLink href="https://github.com/vinzcelavi" github>Github</SocialLink>
        <SocialLink href="https://x.com/vinzcelavi" x>
          X
        </SocialLink>
      </Social>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  position: PropTypes.array
};

export default Header;
