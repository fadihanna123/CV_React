import { Icons } from 'components';
import React from 'react';
import { Row } from 'styles';
import { SkillsHeading } from 'styles/startStyles';

const Skills: React.FC = () => {
  return (
    <>
      <SkillsHeading>Kompetenser</SkillsHeading>
      <br />
      <Row>
        <Icons />
      </Row>
    </>
  );
};

export default Skills;
