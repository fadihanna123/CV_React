import Logo from "assets/logo.jpg";
import Contact from "pages/Contact";
import Projects from "pages/Projects";
import Start from "pages/Start";
import { Link, Route, Routes } from "react-router-dom";
import { MainHeader, Menu } from "ui";

const Header: React.FC = () => (
    <>
        <MainHeader>
            <Menu>
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
            </Menu>
        </MainHeader>
        <main>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </main>
    </>
);

export default Header;
