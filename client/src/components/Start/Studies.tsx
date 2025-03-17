import { FC } from 'react';
import CountUp from 'react-countup';

// Components
import { StudieCol, StudieHeading, StudieList } from '@styles/index';
import { studieList } from '@utils/consts';

const Studies: FC = () => (
  <StudieCol>
    <StudieHeading>Tidigare utbildningar</StudieHeading>
    <StudieList>
      {studieList.map((course) => {
        return (
          <li key={course.id}>
            <b> {course.title} </b>
            <br />
            {course.schoolName} {course.city ? `, ${course.city}` : ''}
            <br />
            {course.start.month}
            <CountUp
              separator=''
              duration={2}
              start={0}
              end={course.start.year}
              className='count'
            />
            - {course.end.month}
            <CountUp
              separator=''
              duration={2}
              start={0}
              end={course.end.year}
              className='count'
            />
          </li>
        );
      })}
    </StudieList>
  </StudieCol>
);

export default Studies;
