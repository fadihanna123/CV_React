import styled from "styled-components";
import axios from "axios";

import Header from "./inc/Header";
import Footer from "./inc/Footer";

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
