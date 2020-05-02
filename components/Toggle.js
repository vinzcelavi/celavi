import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  outline: none;
  -webkit-appearance: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: space-between;
  width: 8rem;
  height: 4rem;
  margin: 0 auto;
  padding: 0.5rem;
  font-size: 0.5rem;
  background: ${({ theme }) => theme.toggle.gradient};
  border: 2px solid ${({ theme }) => theme.toggle.border};
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;

  svg {
    position: relative;
    height: 2.5rem;
    width: 2.5rem;
    transition: all 0.3s linear;

    &[data-name='sun'] {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &[data-name='moon'] {
      transform: ${({ lightTheme }) =>
        lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleButton onClick={toggleTheme}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        data-name="sun"
      >
        <path d="M18.1 5.1c0 .3-.1.6-.3.9l-1.4 1.4-.9-.8 2.2-2.2c.3.1.4.4.4.7zm-.5 5.3h3.2c0 .3-.1.6-.4.9s-.5.4-.8.4h-2v-1.3zm-6.2-5V2.2c.3 0 .6.1.9.4s.4.5.4.8v2h-1.3zm6.4 11.7c-.3 0-.6-.1-.8-.3l-1.4-1.4.8-.8 2.2 2.2c-.2.2-.5.3-.8.3zM6.2 4.9c.3 0 .6.1.8.3l1.4 1.4-.8.9-2.2-2.3c.2-.2.5-.3.8-.3zm5.2 11.7h1.2v3.2c-.3 0-.6-.1-.9-.4s-.4-.5-.4-.8l.1-2zm-7-6.2h2v1.2H3.2c0-.3.1-.6.4-.9s.5-.3.8-.3zM6.2 16l1.4-1.4.8.8-2.2 2.2c-.2-.2-.3-.5-.3-.8s.1-.6.3-.8z" />
        <circle cx="12" cy="11" r="4" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        data-name="moon"
      >
        <path d="M17.39 15.14A7.33 7.33 0 0 1 11.75 1.6c.23-.11.56-.23.79-.34a8.19 8.19 0 0 0-5.41.45 9 9 0 1 0 7 16.58 8.42 8.42 0 0 0 4.29-3.84 5.3 5.3 0 0 1-1.03.69z" />
      </svg>
    </ToggleButton>
  );
};

export default Toggle;
