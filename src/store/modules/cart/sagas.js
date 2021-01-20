import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

// * = funcionalidade do JS que chama generator, como se fosse um assync, no caso nao utilizou assync, devido, generator ser mais potente que o assync
function* addToCart({ id }) {
  // select => responsavel por buscar informacao dentro de um estado
  const productExists = yield select((state) =>
    state.cart.find((p) => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque!');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    // yield = como se fosse o await do generator, td que vier após irá aguardar execucao.
    // call =  responsavel por chamar metodos. que sao assincronos e que retornar promisses.
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    // metodo put do saga é utilizado para disparar uma action
    yield put(addToCartSuccess(data));
    // history.push('/cart');
    history.push('/cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque!');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

// all => cadastrar varios listners, que ficar ouvindo qdo uma action for disparada para disparar essa acao
// takeLatest => se usuario clicar uma vez no botao para adicionar no carrinho e logo em seguida clicar novamente
// antes da chamada api finalizar, o saga irá descartar a primeira chamada e executar a atual (adicionando uma vez só no carrinho).
// takeLatest > 1º paramento = qual acao redux quer ouvir e 2º paramento = qual action/funcao quer disparar
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
