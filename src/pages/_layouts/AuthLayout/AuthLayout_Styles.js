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
      padding: 12px;
      height: 44px;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.7;
      border: 1px solid #fff;
      border-radius: 4px;
      transition: all 150ms ease-in-out;

      &:hover {
        background: #fff;
        opacity: 1;
        color: #8959c1;
      }

      &:active {
        background: #ddd;
        border-color: #ddd;
      }

      &:nth-child(5) {
        margin-top: 10px;
        border: none;
        padding: 0;
        height: auto;

        &:hover {
          opacity: 1;
          background: none;
          color: #fff;
        }

        &:active {
          background: none;
          border-color: none;
        }
      }
    }
  }
`;
