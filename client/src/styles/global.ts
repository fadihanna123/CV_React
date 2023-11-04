import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    list-style: none;
    font-size: 100%;
    transition: 0.3s;
  }

  label
  {
    text-align: left;
  }

  img
  {
    max-width: 100%;
    width: auto;
    height: auto;
    transition: 0.3s;
  }

  .count
  {
    margin: 5px;
    transition: 0.3s;
  }

  @media (max-width: 1500px)
  {
    body
    {
      margin: 0;
      padding: 0;
      font-size: 100%;
      width: 100%;
    }

  }

`;
