import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  background: #f1e6b2;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    max-height: 70px;
  }
`;

export const SideBarNav = styled.nav`
  background: #fff;
  width: 170px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export const SideBarWrap = styled.div`
  width: 100%;
`;
