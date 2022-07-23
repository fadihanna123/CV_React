import Coding from 'assets/coding.jpg';
import styled from 'styled-components';

export const WhoContent = styled.div`
  background: url(${Coding});
  height: 400px;
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-style: italic;
  background-size: cover;
  transition: 0.3s;

  @media (max-width: 1800px) {
    background-size: cover;
    height: 300px;
  }
`;

export const WhoHeading = styled.h1`
  font-style: italic;
  color: #fff;
  font-size: 52px;
  padding-top: 130px;
  height: 0;
  padding-right: 280px;
  transition: 0.3s;

  @media (max-width: 1800px) {
    margin: 0;
    padding: 0;
    height: 100px;
  }
`;

export const Who = styled.p`
  text-align: center;
  font-style: italic;
  color: #fff;
  padding-top: 60px;
  padding-right: 300px;
  transition: 0.3s;

  @media (max-width: 1800px) {
    margin: 0;
    padding: 1px;
  }
`;

export const SkillsHeading = styled.h1`
  font-style: italic;
  height: 50px;
  font-size: 32px;
  margin-left: 750px;
  transition: 0.3s;

  @media (max-width: 1800px) {
    margin: 0;
    text-align: center;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;
`;
