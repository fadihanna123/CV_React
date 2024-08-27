import Icons from 'components/Icons';
import React from 'react';
import { Row } from 'styles';
import { SkillsHeading, SkillsHeadingContainer } from 'styles/startStyles';

const Skills: React.FC = () => {
  return (
    <>
      <SkillsHeadingContainer>
        <SkillsHeading>Kompetenser</SkillsHeading>
      </SkillsHeadingContainer>
      <br />
      <Row>
        <Icons />
      </Row>
    </>
  );
};

export default Skills;
