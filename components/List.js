import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import { rgba } from 'polished';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  ${space}
`;

const ListItem = styled.li`
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1rem;
  line-height: 1.75;
  font-weight: 400;
  color: ${({ theme }) => theme.list.text};

  &::before {
    content: '';
    display: block;
    margin-right: 10px;
    width: 16px;
    height: 1px;
    background-color: ${({ theme }) => theme.list.background};
  }
`;

const List = ({ children, ...props }) => (
  <StyledList {...props}>{children}</StyledList>
);

export default List;
export { ListItem };
