import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-45deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: #bbb;
      }
    }

    span {
      background: #f64c75;
      color: #6d2335;
      padding: 4px 8px;
      margin: -12px 0 10px;
      border-radius: 0 0 4px 4px;
      font-weight: bold;
    }

    button {
      background: #3b9eff;
      margin: 5px 0 0;
      padding: 12px;
      height: 44px;
      font-weight: bold;
      border-radius: 4px;
      color: #15385d;
      transition: background 150ms ease-in-out;

      &:hover {
        background: ${lighten(0.03, '#3b9eff')};
      }

      &:active {
        background: ${darken(0.05, '#3b9eff')};
      }
    }

    a {
      background: none;
      color: #fff;
      margin-top: 10px;
      font-size: 16px;
      opacity: 0.7;
      transition: all 150ms ease-in-out;

      &:hover {
        opacity: 1;
      }
      
      }
    }
  }
`;
