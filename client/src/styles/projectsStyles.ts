import Coding from 'assets/coding.jpg';
import styled from 'styled-components';

export const ProjectsText = styled.p`
  text-align: center;
  font-style: italic;
  color: white;
  padding-top: 60px;
  padding-right: 300px;
  transition: 0.3s;

  @media (max-width: 1800px) {
    margin: 0;
    padding: 1px;
  }
`;

export const ProjectsContent = styled.div`
  background: url(${Coding});
  height: 400px;
  color: white;
  text-align: center;
  font-size: 32px;
  font-style: italic;
  background-size: cover;
  transition: 0.3s;

  @media (max-width: 1800px) {
    background-size: cover;
    height: 220px;
  }
`;

export const ProjectsHeading = styled.h1`
  font-style: italic;
  color: white;
  font-size: 52px;
  padding-top: 130px;
  height: 0;
  padding-right: 280px;
  transition: 0.3s;

  @media (max-width: 1800px) {
    margin: 0;
    padding: 0;
    height: 100px;
    padding: 20px;
  }
`;

export const ProjectsRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  transition: 0.3s;

  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

export const ProjectsCol = styled.div`
  width: 25%;
  transition: 0.3s;

  @media (max-width: 1800px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2px 16px;
  margin: 10px;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  background: #efeae4;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
`;

export const ProjectImage = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  transition: 0.3s;
`;

export const ProjectTitle = styled.h1`
  text-align: center;
  transition: 0.3s;

  @media (max-width: 1800px) {
    font-size: 25px;
  }
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  font-size: 30px;
  margin: 5px;
  color: blue;
  transition: 0.3s;

  &:hover {
    color: #ff0000;
    transition: 0.3s;
  }

  @media (max-width: 1800px) {
    display: flex;
    flex-direction: column;
  }
`;
