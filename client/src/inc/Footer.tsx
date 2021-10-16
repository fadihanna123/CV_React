import Github from "assets/Github.png";
import Linkedin from "assets/Linkedin.png";
import { Col, Col13, FooterBlock, Icon, Row } from "styles/footerStyles";

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
