import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    // sinal de > (maior) significa que o estilo do strong só irá ser aplicado em strong dentro de <li>
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    // como existe tbm span dentro do botao se nao colocar sinal > mexe no span do botao tbm, nesse caso só mexe no span dentro da li
    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    // margin-top: auto; => caso titulo seja muito grande e quebre linhas, o margin-top: auto, faz com que os botoes nao fiquem desalinhados, sem ele nesse caso ficaria desalinhado
    button {
      background: #00a03e;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#00a03e')};
      }

      //  rgba(0, 0, 0, 0.1); => cor preta só que com 10%(0.1) de opacidade
      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
