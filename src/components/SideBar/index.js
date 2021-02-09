/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { SideBarData } from '../SideBarData';
import logo from '../../assets/images/rt166.png';
import { Nav, NavIcon, SideBarNav, SideBarWrap } from './styles';
import SubMenu from '../SubMenu';

function SideBar() {
  const [sidebar, setSidebar] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const showSideBar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#333' }}>
        <Nav>
          <NavIcon to="/">
            {/* <FaIcons.FaBars onClick={showSideBar} /> */}
            {/* <img src={logo} alt="cervejaria" onClick={showSideBar} /> */}
          </NavIcon>
        </Nav>
        <SideBarNav sidebar={sidebar}>
          <SideBarWrap>
            <NavIcon to="/">
              {/* <AiIcons.AiOutlineClose onClick={showSideBar} /> */}
              <img src={logo} alt="cervejaria" />
            </NavIcon>
            {SideBarData.map((item) => (
              <SubMenu item={item} key={item.id} />
            ))}
          </SideBarWrap>
        </SideBarNav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
