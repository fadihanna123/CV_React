import React from 'react';
import CountUp from 'react-countup';
import { WorkCol, WorkHeading, WorkList } from 'styles';
import { workList } from 'utils/consts';

const Work: React.FC = () => {
  return (
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
};

export default Work;
