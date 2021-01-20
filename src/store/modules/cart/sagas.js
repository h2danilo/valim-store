import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess } from './actions';

// * = funcionalidade do JS que chama generator, como se fosse um assync, no caso nao utilizou assync, devido, generator ser mais potente que o assync
function* addToCart({ id }) {
  // yield = como se fosse o await do generator, td que vier após irá aguardar execucao.
  // call =  responsavel por chamar metodos. que sao assincronos e que retornar promisses.
  const response = yield call(api.get, `/products/${id}`);

  // metodo put do saga é utilizado para disparar uma action
  yield put(addToCartSuccess(response.data));
}

// all => cadastrar varios listners, que ficar ouvindo qdo uma action for disparada para disparar essa acao
// takeLatest => se usuario clicar uma vez no botao para adicionar no carrinho e logo em seguida clicar novamente
// antes da chamada api finalizar, o saga irá descartar a primeira chamada e executar a atual (adicionando uma vez só no carrinho).
// takeLatest > 1º paramento = qual acao redux quer ouvir e 2º paramento = qual action/funcao quer disparar
export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
