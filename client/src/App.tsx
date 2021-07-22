import axios from "axios";
import Footer from "includes/Footer";
import Header from "includes/Header";
import styled from "styled-components";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => (
  <Container>
    <Header />
    <Footer />
  </Container>
);

export default App;

const Container = styled.div`
  margin: 10px;
`;
