import { ThirdRow } from 'styles';
import React from 'react';
import { Studies, Work } from './Start';

const WorknStudies: React.FC = () => {
  return (
    <ThirdRow>
      <Work />
      <Studies />
    </ThirdRow>
  );
};

export default WorknStudies;
