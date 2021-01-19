// todos reducer ouvi todas actions, por isso precisa de um switch para filtrar qual acao pertence ao reducer
// todo reducer recebe por padrao uma variavel state e uma action!
import produce from 'immer';

export default function cart(state = [], action) {
  // console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      // return [...state, { ...action.product, amount: 1 }]; //ex. sem utilizar produce do immer
      // abaixo exemplo utilizando produce do immer. draft seria uma copia do state que pode ser alterado e que após ser alterado o produce aplica esse draft como resultado final;
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    case 'REMOVE_FROM_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    default:
      return state;
  }
}
