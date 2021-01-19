// todos reducer ouvi todas actions, por isso precisa de um switch para filtrar qual acao pertence ao reducer
// todo reducer recebe por padrao uma variavel state e uma action!
export default function cart(state = [], action) {
  // console.log(action);
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.product, amount: 1 }];
    default:
      return state;
  }
}
