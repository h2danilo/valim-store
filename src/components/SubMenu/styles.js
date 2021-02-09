import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const SideBarLink = styled(Link)`
  display: flex;
  color: #333;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#fff')};
    border-left: 4px solid #ff9e1b;
    cursor: pointer;
  }
`;

export const SideBarLabel = styled.span`
  margin-left: 16px;
`;

export const DropDownLink = styled(Link)`
  background: #fff;
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#fff')};
    border-left: 4px solid #ff9e1b;
    cursor: pointer;
  }
`;
