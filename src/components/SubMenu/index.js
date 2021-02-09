/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as HomeActions from '../../store/modules/home/actions';

import { SideBarLink, SideBarLabel, DropDownLink } from './styles';

function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [menuSelect, setmenuSelect] = useState('1');
  const dispatch = useDispatch();

  const showSubnav = () => setSubnav(!subnav);

  function saveMenuSelect(item) {
    const { id } = item;

    setmenuSelect(id);
    dispatch(HomeActions.filterMenuRequest(id));

    if (item.subNav) {
      showSubnav();
    }
  }

  return (
    <>
      <SideBarLink
        // to={item.path === '/' ? `/home/${item.id}` : item.path}
        to={item.path}
        // onClick={item.subNav && showSubnav}
        onClick={() => saveMenuSelect(item)}
      >
        <div>
          {item.icon}
          <SideBarLabel>{item.title}</SideBarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SideBarLink>
      {subnav &&
        item.subNav.map((it) => (
          <DropDownLink
            to={it.path}
            key={it.id}
            onClick={() => saveMenuSelect(it)}
          >
            {it.icon}
            <SideBarLabel>{it.title}</SideBarLabel>
          </DropDownLink>
        ))}
    </>
  );
}

export default SubMenu;
