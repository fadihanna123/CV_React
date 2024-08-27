import styled from 'styled-components';

export const ThirdRow = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;

  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

export const WorkList = styled.ul`
  list-style: square;
  transition: 0.3s;

  @media (max-width: 1020px) {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const StudieList = styled.ul`
  list-style: square;
  transition: 0.3s;

  @media (max-width: 1020px) {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const WorkHeading = styled.h1`
  margin: 10px;
  transition: 0.3s;
`;

export const StudieHeading = styled.h1`
  margin: 10px;
  white-space: nowrap;
  transition: 0.3s;
`;

export const StudieCol = styled.div`
  width: 15%;
  line-height: 2em;
  transition: 0.3s;

  @media (max-width: 1020px) {
    width: 100%;
    text-align: center;
  }
`;

export const WorkCol = styled.div`
  width: 50%;
  line-height: 2em;
  transition: 0.3s;

  @media (max-width: 1020px) {
    width: 100%;
    text-align: center;
  }
`;
