import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
// import { formatPrice } from '../../util/format';
// import api from '../../services/api';

// como actions retorna mais de uma funcao, qdo coloca o * o CartActions retorna todas as funcoes.
import * as CartActions from '../../store/modules/cart/actions';
import * as HomeActions from '../../store/modules/home/actions';

import { ProductList, InfoText, PriceText } from './styles';

// import { Container } from './styles';

export default function Home() {
  // abaixo qdo utiliza classe extend { Component }
  /* constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  } */

  // abaixo utilizando hooks
  const [products, setProducts] = useState([]);
  const menuDefault = '1';

  const amountCart = useSelector((state) =>
    state.cart.reduce((sumAmountCart, product) => {
      sumAmountCart[product.id] = product.amount;
      return sumAmountCart;
    }, {})
  );
  const productList = useSelector((state) => state.home.productList);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      /* const response = await api.get('products');

      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      })); */

      setProducts(productList);
    }
    loadProducts();
  }, [productList]);

  // carregando filtro Inicial dos produtos
  useEffect(() => {
    async function loadFilterProductsDefault() {
      dispatch(HomeActions.filterMenuRequest(menuDefault));
    }
    loadFilterProductsDefault();
  }, [menuDefault, dispatch]);

  function handleAddProduct(id) {
    // dispatch => serve para disparar uma action ao redux, serve para dizer p redux que deseja fazer alguma acao
    // const { dispatch } = this.props;

    /* dispatch({
      type: 'ADD_TO_CART',
      product,
    }); */
    // bloco acima e linha abaixo fazem msm coisa; diferenca que linha abaixo esta refatorada.
    // dispatch(CartActions.addToCart(product));

    // ex. 2, acima faz msm coisa, porem, abaixo codigo esta resumido devido a ter add no final do codigo => const mapDispatchToProps
    // const { addToCartRequest } = this.props;
    // addToCartRequest(id);
    dispatch(CartActions.addToCartRequest(id)); // trabalhando com useDispatch
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <div>
            <strong>{product.title}</strong>
            <InfoText>{product.info}</InfoText>
            <PriceText>{product.priceFormatted}</PriceText>

            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {amountCart[product.id] || 0}
              </div>

              <span>ADICIONAR</span>
            </button>
          </div>
        </li>
      ))}
    </ProductList>
  );
}
