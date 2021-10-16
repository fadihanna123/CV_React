import Logo from "assets/logo.jpg";
import Contact from "pages/Contact";
import Projects from "pages/Projects";
import Start from "pages/Start";
import { Link, Route, Switch } from "react-router-dom";
import { Navbar } from "styles";

const Header: React.FC = () => (
  <>
    <header>
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
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </main>
  </>
);

export default Header;
