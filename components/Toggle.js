import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  border: none;
  outline: none;
  background: none;
  -webkit-appearance: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
`;

const Icon = styled.div`
  position: relative;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background: linear-gradient(25deg, #8d77ff, #93cdff);
  transition: all 0.25s linear;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    width: 1.4rem;
    height: 1.4rem;
    background: ${({ theme }) => theme.main.body};
    border-radius: 50%;
    transform: translate(0, 0);
    transition: all 0.5s ease;
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

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleButton onClick={toggleTheme}>
      <Icon lightTheme={isLight} />
    </ToggleButton>
  );
};

export default Toggle;
