import styled from "styled-components";

export const Navbar = styled.nav`
  margin: 10px;
  background: white;
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 25px;

  a {
    text-decoration: none;
    padding: 10px;
    margin-right: auto;
    font-weight: bold;
    color: black;
  }

  a:hover {
    color: red;
  }

  .links {
    margin-top: 100px;
  }

  @media (max-width: 1800px) {
    flex-direction: column;
    a {
      margin: 0 auto;
    }

    .links {
      margin: 0;
    }
  }
`;
