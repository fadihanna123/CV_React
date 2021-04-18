import Github from "Images/Github.png";
import Linkedin from "Images/Linkedin.png";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <Row>
          <Col13>
            <h1>MittCV</h1>
          </Col13>
          <Col>
            <a
              href="https://www.linkedin.com/in/fadi-hanna-5506401b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Linkedin} alt="Linkedin Ikon" />
            </a>

            <a
              href="https://github.com/fadihanna123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon src={Github} alt="Github Ikon" />
            </a>
          </Col>
        </Row>
      </FooterBlock>
    </>
  );
};

export default Footer;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 20px;
`;
const FooterBlock = styled.footer`
  background: #f5f5f5;
  text-align: center;
  font-style: italic;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;
const Col13 = styled.div`
  width: 13%;
  @media (max-width: 1800px) {
    width: 100%;
  }
`;
const Col = styled.div`
  width: 20%;
  @media (max-width: 1800px) {
    width: 100%;
  }
`;
