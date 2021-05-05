import Logo from "Images/logo.jpg";
import Contact from "pages/Contact";
import Projects from "pages/Projects";
import Start from "pages/Start";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Navbar>
        <Link to="/">
          <img src={Logo} alt="Logotypen" />
        </Link>
        <Link className="links" to="/">
          Startsida
        </Link>
        <Link className="links" to="/Projects">
          Projekt
        </Link>
        <Link className="links" to="/Contact">
          Kontakt
        </Link>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </>
  );
};

export default Header;

const Navbar = styled.div`
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
