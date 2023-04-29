import Github from 'assets/Github.png';
import Linkedin from 'assets/Linkedin.png';
import { Col, Icon, Row } from 'styles/footerStyles';
import { MainFooter } from '../ui/MainFooter';
import { githubURL, linkedinurl } from 'utils/envs';
import React from 'react';

const Footer: React.FC = () => (
  <MainFooter>
    <Row>
      <Col>
        <h1>MittCV</h1>
      </Col>
      <Col>
        <a href={linkedinurl} target='_blank' rel='noopener noreferrer'>
          <Icon src={Linkedin} alt='Linkedin Ikon' />
        </a>

        <a href={githubURL} target='_blank' rel='noopener noreferrer'>
          <Icon src={Github} alt='Github Ikon' />
        </a>
      </Col>
    </Row>
  </MainFooter>
);

export default Footer;
