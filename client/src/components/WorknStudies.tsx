import { FC } from 'react';

// Components
import { ThirdRow } from '@styles/index';
import Studies from './Start/Studies';
import Work from './Start/Work';

const WorknStudies: FC = () => (
  <ThirdRow>
    <Work />
    <Studies />
  </ThirdRow>
);

export default WorknStudies;
