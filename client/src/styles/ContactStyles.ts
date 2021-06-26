import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: center;

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

  &:hover {
    background: black;
    color: white;
  }
`;

export const ContactBlock = styled.div`
  text-align: center;
  font-style: italic;
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
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    border-color: #0275d8;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;
    outline: 0 none;
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
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #0275d8;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px lightblue;
    outline: 0 none;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin: 10px;
  font-weight: bold;
  font-size: 19px;

  @media (max-width: 1800px) {
    text-align: center;
  }
`;

export const Col10 = styled.div`
  width: 10%;

  @media (max-width: 1800px) {
    width: 100%;
  }
`;

export const Col25 = styled.div`
  width: 25%;

  @media (max-width: 1800px) {
    width: 90%;
  }
`;
