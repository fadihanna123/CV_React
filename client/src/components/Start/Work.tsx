import { FC } from 'react';
import CountUp from 'react-countup';

// Components
import { WorkCol, WorkHeading, WorkList } from '@styles/index';
import { workList } from '@utils/consts';

const Work: FC = () => (
  <WorkCol>
    <WorkHeading>Arbetsliverfarenhet</WorkHeading>
    <WorkList>
      {workList.map((work: WorkList) => {
        return (
          <li key={work.id}>
            <b>{work.title}</b>
            <br />
            {work.workPlace} {work.city ? `, ${work.city}` : ''}
            <br />
            {work.start.month}
            <CountUp
              separator=''
              duration={2}
              start={work.start.year}
              end={work.end.year}
              className='count'
            />
            - {work.end.month}
            <CountUp
              separator=''
              duration={2}
              start={0}
              end={work.end.year}
              className='count'
            />
          </li>
        );
      })}
    </WorkList>
  </WorkCol>
);

export default Work;
