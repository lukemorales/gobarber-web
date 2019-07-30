import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.section`
  max-width: 600px;
  margin: 50px auto;

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

    hr {
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
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
  }

  > button {
    width: 100%;
    background: #f64c75;
    margin: 15px 0 0;
    padding: 12px;
    height: 44px;
    font-weight: bold;
    border-radius: 4px;
    color: #5d313b;
    transition: background 150ms ease-in-out;

    &:hover {
      background: ${lighten(0.02, '#f64c75')};
    }

    &:active {
      background: ${darken(0.05, '#f64c75')};
    }
  }
`;
