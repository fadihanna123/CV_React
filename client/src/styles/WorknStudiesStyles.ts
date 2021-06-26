import styled from "styled-components";

export const ThirdRow = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

export const WorkList = styled.ul`
  list-style: square;

  @media (max-width: 1800px) {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const StudieList = styled.ul`
  list-style: square;

  @media (max-width: 1800px) {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const WorkHeading = styled.h1`
  margin: 10px;
`;

export const StudieHeading = styled.h1`
  margin: 10px;
  white-space: nowrap;
`;

export const StudieCol = styled.div`
  width: 15%;
  line-height: 2em;

  @media (max-width: 1800px) {
    width: 100%;
    text-align: center;
  }
`;

export const WorkCol = styled.div`
  width: 50%;
  line-height: 2em;

  @media (max-width: 1800px) {
    width: 100%;
    text-align: center;
  }
`;
