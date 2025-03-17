import { FC } from 'react';

// Components
import About from '@components/About';
import WorknStudies from '@components/WorknStudies';
import Banner from './Start/Banner';
import Skills from './Start/Skills';

const Start: FC = () => (
  <>
    <Banner />
    <About />
    <WorknStudies />
    <Skills />
  </>
);

export default Start;
