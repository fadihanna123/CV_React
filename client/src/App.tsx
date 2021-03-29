import axios from "axios";
import styled from "styled-components";

import Footer from "./includes/Footer";
import Header from "./includes/Header";

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers["Content-Type"] = "application/json";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Footer />
      </Container>
    </>
  );
};
export default App;

const Container = styled.div`
  margin: 10px;
`;
