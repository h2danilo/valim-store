import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

// import { Container } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_zoom2.jpg?ts=1584659244&ims=326x"
          alt="Tênis"
        />
        <strong>Tenis Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_zoom2.jpg?ts=1584659244&ims=326x"
          alt="Tênis"
        />
        <strong>Tenis Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_zoom2.jpg?ts=1584659244&ims=326x"
          alt="Tênis"
        />
        <strong>Tenis Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_zoom2.jpg?ts=1584659244&ims=326x"
          alt="Tênis"
        />
        <strong>Tenis Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_zoom2.jpg?ts=1584659244&ims=326x"
          alt="Tênis"
        />
        <strong>Tenis Legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
