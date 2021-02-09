export function filterMenuRequest(id) {
  return {
    type: '@home/FILTER_MENU_REQUEST',
    payload: { id },
  };
}

export function filterMenuSuccess(product) {
  return {
    type: '@home/FILTER_MENU_SUCCESS',
    payload: { product },
  };
}
