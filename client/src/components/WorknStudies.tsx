import { ThirdRow } from 'styles';
import React from 'react';
import Studies from './Start/Studies';
import Work from './Start/Work';

const WorknStudies: React.FC = () => {
  return (
    <ThirdRow>
      <Work />
      <Studies />
    </ThirdRow>
  );
};

export default WorknStudies;
