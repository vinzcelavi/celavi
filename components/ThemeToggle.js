import React from 'react';
import styled from 'styled-components';

const toggleWidth = 74;
const togglePadding = 8;
const iconWidth = 20;

const Style = styled.button`
  border: none;
  outline: none;
  background: none;
  -webkit-appearance: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 0;
  width: ${toggleWidth}px;
  padding: ${togglePadding}px;
  display: flex;
  align-items: center;
  font-size: 0.815rem;
  background: ${({ theme }) => theme.toggle.background};
  cursor: pointer;
  border-radius: 1000px;
  overflow: hidden;
  transition: all 0.45s ease;

  &::before {
    /* content: ''; */
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 3px 14px rgba(0, 0, 0, 0.1);
  }

  > span {
    z-index: 10;
    position: absolute;
    top: 50%;
    left: 10px;
    color: #6565b5;
    opacity: 1;
    transform: translateY(-50%);
    transition: all 0.45s ease;

    &:last-child {
      left: auto;
      right: 10px;
      color: #fe5f77;
      opacity: 0;
    }
  }

  ${({ lightTheme }) =>
    lightTheme &&
    `
    > span:first-child {
      opacity: 0;
    }

    > span:last-child {
      opacity: 1;
    }
  `};
`;

const IconWrapper = styled.div`
  z-index: 10;
  position: relative;
  transform: translateX(${(toggleWidth - (togglePadding * 2)) - iconWidth}px);
  transition: all 0.45s ease;

  ${({ lightTheme }) =>
    lightTheme &&
  `
    transform: translateX(0);
  `};
`;

const Icon = styled.div`
  position: relative;
  height: ${iconWidth}px;
  width: ${iconWidth}px;
  color: ${({ theme }) => theme.main.text};
  background: linear-gradient(25deg, #8d77ff, #93cdff);
  border-radius: 50%;
  transition: all 0.25s linear;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 90%;
    height: 90%;
    background: ${({ theme }) => theme.toggle.background};
    border-radius: 50%;
    transform: translate(0, 0);
    transition: all 0.45s ease;
  }

  ${({ lightTheme }) =>
    lightTheme &&
    `
    background: linear-gradient(25deg, #ff3c71, #ff8815);

    &::before {
      transform: translate(100%, -100%);
    }
  `};
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  
  return (
    <Style lightTheme={isLight} onClick={toggleTheme}>
      <span>Light</span>
      <IconWrapper lightTheme={isLight}>
        <Icon lightTheme={isLight} />
      </IconWrapper>
      <span>Dark</span>
    </Style>
  );
};

export default ThemeToggle;
