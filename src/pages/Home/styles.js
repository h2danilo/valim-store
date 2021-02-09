import styled from 'styled-components';
import { darken } from 'polished';

export const InfoText = styled.span`
  color: #333;
  font-size: 12px;
  max-width: 350px;
  overflow-wrap: break-word;
  line-height: 20px;
`;

export const PriceText = styled.span`
  font-size: 21px;
  font-weight: bold;
  margin: 5px 0 20px;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  list-style: none;

  li {
    display: flex;
    background: #fff;
    border-radius: 4px;
    padding: 15px;
    max-width: 600px;

    img {
      align-self: center;
      max-width: 200px;
    }

    > div {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-content: space-between;
      max-width: 300px;

      // sinal de > (maior) significa que o estilo do strong só irá ser aplicado em strong dentro de <li>
      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
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
  }
`;
