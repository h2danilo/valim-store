import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

// como actions retorna mais de uma funcao, qdo coloca o * o CartActions retorna todas as funcoes.
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

// import { Container } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');
    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));
    this.setState({ products: data });
  }

  handleAddProduct = (product) => {
    // dispatch => serve para disparar uma action ao redux, serve para dizer p redux que deseja fazer alguma acao
    // const { dispatch } = this.props;

    /* dispatch({
      type: 'ADD_TO_CART',
      product,
    }); */
    // bloco acima e linha abaixo fazem msm coisa; diferenca que linha abaixo esta refatorada.
    // dispatch(CartActions.addToCart(product));

    // ex. 2, acima faz msm coisa, porem, abaixo codigo esta resumido devido a ter add no final do codigo => const mapDispatchToProps
    const { addToCart } = this.props;
    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amountCart } = this.props;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {amountCart[product.id] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = (state) => ({
  amountCart: state.cart.reduce((amountCart, product) => {
    amountCart[product.id] = product.amount;
    return amountCart;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
