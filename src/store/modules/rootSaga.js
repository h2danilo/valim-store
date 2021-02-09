// rootSaga funcionalidade é juntar todos sagas em um unico arquivo
// all => serve para juntar varios sagas
import { all } from 'redux-saga/effects';

import cart from './cart/sagas';
import home from './home/sagas';

// qdo tiver mais sagas vai add no array ao lado do cart. ex. [cart, newsaga]
export default function* rootSaga() {
  return yield all([cart, home]);
}
