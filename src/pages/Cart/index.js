import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th>.</th>
            <th>PRODUTO</th>
            <th>QTDE</th>
            <th>SUBTOTAL</th>
            <th>.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-10-masculino/26/HZM-3549-026/HZM-3549-026_zoom2.jpg?ts=1584659244&ims=326x"
                alt="Tênis"
              />
            </td>
            <td>
              <strong>Tênis top</strong>
              <span> R$129,90 </span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#00a03e" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#00a03e" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$129,90</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#00a03e" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1029,90</strong>
        </Total>
      </footer>
    </Container>
  );
}
export default Cart;
