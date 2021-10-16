import styled from "styled-components";

export const Icon = styled.img`
  max-width: 40px;
  max-height: 40px;
  margin-top: 20px;
  width: auto;
  height: auto;
`;

export const FooterBlock = styled.footer`
  background: #f5f5f5;
  text-align: center;
  font-style: italic;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

export const Col13 = styled.div`
  width: 13%;

  @media (max-width: 1800px) {
    width: 100%;
  }
`;
export const Col = styled.div`
  width: 20%;

  @media (max-width: 1800px) {
    width: 100%;
  }
`;
