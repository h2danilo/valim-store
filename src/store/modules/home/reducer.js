import produce from 'immer';

const INITIAL_STATE = {
  productList: [],
};

export default function home(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@home/FILTER_MENU_SUCCESS': {
      return produce(state, (draft) => {
        const { product } = action.payload;
        draft.productList = product;
      });
    }
    default:
      return state;
  }
}
