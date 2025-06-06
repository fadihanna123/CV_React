import { FC } from 'react';

// Components
import Icons from '@components/Icons';
import { Row } from '@styles/index';
import { SkillsHeading, SkillsHeadingContainer } from '@styles/startStyles';

const Skills: FC = () => (
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

export default Skills;
