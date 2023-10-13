import Coding from 'assets/coding.jpg';
import styled from 'styled-components';
import { AlertProps } from 'types';

export const Row = styled.div`
  display: flex;
  justify-content: center;
  transition: 0.3s;

  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

export const SendBtn = styled.button`
  margin: 10px;
  padding: 15px;
  background: black;
  color: white;
  display: flex;
  margin: 0 auto;
  border-radius: 15px;
  font-size: 17px;
  transition: 0.3s;

  &:hover {
    background: black;
    color: white;
    transition: 0.3s;
  }
`;

export const ContactBlock = styled.div`
  text-align: center;
  font-style: italic;
  transition: 0.3s;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid gray;
  appearance: none;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #0275d8;
    box-shadow:
      0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px lightblue;
    outline: 0 none;
    transition: 0.3s;
  }
`;

export const MyTxtarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid gray;
  appearance: none;
  border-radius: 0.25rem;
  margin-bottom: 10px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #0275d8;
    box-shadow:
      0 1px 1px rgba(0, 0, 0, 0.075) inset,
      0 0 8px lightblue;
    outline: 0 none;
    transition: 0.3s;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin: 10px;
  font-weight: bold;
  font-size: 19px;
  transition: 0.3s;

  @media (max-width: 1800px) {
    text-align: center;
  }
`;

export const Col10 = styled.div`
  width: 10%;
  transition: 0.3s;

  @media (max-width: 1800px) {
    width: 100%;
  }
`;

export const Col25 = styled.div`
  width: 25%;
  transition: 0.3s;

  @media (max-width: 1800px) {
    width: 98%;
  }
`;

export const ContactContent = styled.div`
  background: url(${Coding});
  height: 400px;
  color: white;
  text-align: center;
  font-size: 32px;
  font-style: italic;
  background-size: cover;
  margin-bottom: 100px;
  transition: 0.3s all;

  @media (max-width: 1800px) {
    background-size: cover;
    height: 220px;
  }
`;

export const ContactHeading = styled.h1`
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

export const Alert = styled.div<AlertProps>`
  text-align: center;
  font-size: 20px;
  color: ${(props) => (props.error ? 'red' : '#5cb85c')};
  background: #000;
  margin: 10px;
  padding: 10px;
  transition: 0.3s all;
`;

export const ContactText = styled.p`
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
