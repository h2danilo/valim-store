import { put, all, takeLatest } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '../../../services/api';
// import history from '../../../services/history';
import { formatPrice } from '../../../util/format';

import { filterMenuSuccess } from './actions';

// eslint-disable-next-line no-unused-vars
function* filterMenu({ id }) {
  const response = yield api.get('products');
  const data = response.data.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
  }));

  yield put(filterMenuSuccess(data));
}

export default all([takeLatest('@home/FILTER_MENU_REQUEST', filterMenu)]);
