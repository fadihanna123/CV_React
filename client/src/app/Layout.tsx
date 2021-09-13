import Footer from "inc/Footer";
import Header from "inc/Header";
import styled from "styled-components";

const Layout: React.FC = () => (
  <Container>
    <Header />
    <Footer />
  </Container>
);

export default Layout;

const Container = styled.div`
  margin: 10px;
`;
