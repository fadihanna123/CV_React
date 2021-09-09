import axios from "axios";
import Footer from "inc/Footer";
import Header from "inc/Header";
import styled from "styled-components";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App: React.FC = () => (
  <Container>
    <Header />
    <Footer />
  </Container>
);

export default App;

const Container = styled.div`
  margin: 10px;
`;
