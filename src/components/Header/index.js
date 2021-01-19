import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
// import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  // console.log(cart);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="ValimShoes" />
      </Link>

      <Cart to="/Cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

// state.cart => .cart é nome do reducer que deseja acessar, para saber o nome do reducer olha em store/modules/rootReducer.js
export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
