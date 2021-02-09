import React from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as Io5Icons from 'react-icons/io5';

// import { Container } from './styles';

export const SideBarData = [
  {
    id: '1',
    title: 'Destaque',
    path: '/',
    icon: <Io5Icons.IoStarOutline />,
  },
  {
    id: '2',
    title: 'Chopp',
    path: '/',
    icon: <Io5Icons.IoBeer />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        id: '2.1',
        title: 'IPA',
        path: '/',
        icon: <Io5Icons.IoBeerOutline />,
      },
      {
        id: '2.2',
        title: 'Pilsen',
        path: '/',
        icon: <Io5Icons.IoBeerOutline />,
      },
      {
        id: '2.3',
        title: 'Outros',
        path: '/',
        icon: <Io5Icons.IoBeerOutline />,
      },
    ],
  },
  {
    id: '3',
    title: 'Meus Pedidos',
    path: '/cart',
    icon: <Io5Icons.IoCartOutline />,
  },
];
