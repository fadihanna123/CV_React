import styled from "styled-components";

export const Icon = styled.img`
  max-width: 15px;
  max-height: 15px;
  width: auto;
  height: auto;
  display: inline-block;
`;

export const Col = styled.div`
  width: 15%;
  font-weight: bold;
  line-height: 2em;

  @media (max-width: 1800px) {
    width: 100%;
    text-align: center;
  }
`;
