// todos reducer ouvi todas actions, por isso precisa de um switch para filtrar qual acao pertence ao reducer
// todo reducer recebe por padrao uma variavel state e uma action!
import produce from 'immer';

export default function cart(state = [], action) {
  // console.log(action);
  switch (action.type) {
    case '@cart/ADD':
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
    case '@cart/REMOVE':
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
