import { put, all, takeLatest } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '../../../services/api';
// import history from '../../../services/history';
import { formatPrice } from '../../../util/format';
import { SideBarData } from '../../../components/SideBarData';

import { filterMenuSuccess } from './actions';

function* filterMenu({ payload }) {
  const response = yield api.get('products');
  const data = response.data.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
  }));

  // Se Menu tiver subNavigator então não aplica filtro, enqto nao selecionar um item dele
  const menu = SideBarData.find((a) => a.id === payload.id);
  if (menu !== undefined) {
    if (menu.subNav) {
      return;
    }
  }

  // const dataFiltered = data.filter((prod) => prod.idMenu === payload.id);
  const dataFiltered2 = data.filter((prod) =>
    prod.idMenu2.includes(payload.id)
  );
  yield put(filterMenuSuccess(dataFiltered2));
}

export default all([takeLatest('@home/FILTER_MENU_REQUEST', filterMenu)]);
