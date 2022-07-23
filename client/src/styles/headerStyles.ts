import styled from 'styled-components';

export const Navbar = styled.nav`
  margin: 10px;
  background: white;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 25px;
  transition: 0.3s;

  a {
    text-decoration: none;
    padding: 10px;
    margin-right: auto;
    font-weight: bold;
    color: black;
    transition: 0.3s;
  }

  a:hover {
    color: red;
    transition: 0.3s;
  }

  .links {
    margin-top: 100px;
    transition: 0.3s;
  }

  @media (max-width: 1800px) {
    flex-direction: column;
    transition: 0.3s;

    a {
      margin: 0 auto;
      transition: 0.3s;
    }

    .links {
      margin: 0;
      transition: 0.3s;
    }
  }
`;
