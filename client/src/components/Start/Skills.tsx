import { FC } from 'react';

// Components
import Icons from '@components/Icons';
import { SkillsRow } from '@styles/iconsStyles';
import { SkillsHeading, SkillsHeadingContainer } from '@styles/startStyles';

const Skills: FC = () => (
  <>
    <SkillsHeadingContainer>
      <SkillsHeading>Kompetenser</SkillsHeading>
    </SkillsHeadingContainer>
    <br />
    <SkillsRow>
      <Icons />
    </SkillsRow>
  </>
);

export default Skills;
