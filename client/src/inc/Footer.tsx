import React from 'react';

// Components
import Github from '@assets/Github.png';
import { Col, Icon, Row } from '@styles/footerStyles';
import MainFooter from '@ui/MainFooter';
import { githubURL } from '@utils/index';

const Footer: React.FC = () => (
  <MainFooter>
    <Row>
      <Col>
        <h1>MittCV</h1>
      </Col>
      <Col>
        <a href={githubURL} target='_blank' rel='noopener noreferrer'>
          <Icon loading='lazy' src={Github} alt='Github Ikon' />
        </a>
      </Col>
    </Row>
  </MainFooter>
);

export default Footer;
