import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const transFunction = 'cubic-bezier(0.77, 0, 0.175, 1)';
const transDurationIn = '0.35s';
const transDurationOut = '0.5s';
const hoverWidth = '70%';

const StyledSwipeLink = styled.a`
  position: relative;
  display: inline-flex;
  margin: 0 -20px;
  padding: 1px 20px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 24px;
  line-height: 1.5;
  font-weight: 700;
  text-decoration: none;
  color: ${({ theme }) => theme.main.text};
  overflow: hidden;
  transition: all 0.35s ${transFunction};

  span {
    z-index: 20;
    position: relative;
    transition: all ${transDurationIn} ${transFunction};
  }

  &::before,
  &::after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30%;
    height: 100%;
    background-color: ${({ theme }) => theme.swipeLink.bgHover};
  }

  &::before {
    z-index: 10;
    opacity: 1;
    transform: translateX(-110%);
    transition: all 0s ${transFunction};
  }

  &::after {
    z-index: 5;
    width: ${hoverWidth};
    opacity: 1;
    transform: translateX(190%);
    transition: all ${transDurationOut} ${transFunction};
  }

  &:hover {
    span {
      transform: translateX(12px);
    }

    &::before,
    &::after {
      width: ${hoverWidth};
      opacity: 1;
    }

    &::before {
      transform: translateX(0);
      transition: all ${transDurationIn} ${transFunction};
    }

    &::after {
      transform: translateX(0);
      transition: all 0s ${transDurationIn} ${transFunction};
    }
  }
`;

const SwipeLink = ({ children, ...props }) => (
  <StyledSwipeLink {...props}>
    <span>{children}</span>
  </StyledSwipeLink>
);

SwipeLink.propTypes = {
  children: PropTypes.any
};

export default SwipeLink;
