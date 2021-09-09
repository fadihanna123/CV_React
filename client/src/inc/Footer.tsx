import Github from "images/Github.png";
import Linkedin from "images/Linkedin.png";
import styled from "styled-components";

const Footer: React.FC = () => {
  const { REACT_APP_LINKEDIN_URL, REACT_APP_GITHUB_URL } = process.env;

  return (
    <FooterBlock>
      <Row>
        <Col13>
          <h1>MittCV</h1>
        </Col13>
        <Col>
          <a
            href={REACT_APP_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={Linkedin} alt="Linkedin Ikon" />
          </a>

          <a
            href={REACT_APP_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src={Github} alt="Github Ikon" />
          </a>
        </Col>
      </Row>
    </FooterBlock>
  );
};

export default Footer;

const Icon = styled.img`
  max-width: 40px;
  max-height: 40px;
  margin-top: 20px;
  width: auto;
  height: auto;
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
