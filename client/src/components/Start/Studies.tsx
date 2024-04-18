import React from 'react';
import CountUp from 'react-countup';
import { StudieCol, StudieHeading, StudieList } from 'styles';

const Studies: React.FC = () => {
  return (
    <StudieCol>
      <StudieHeading>Tidigare utbildningar</StudieHeading>
      <StudieList>
        <li>
          <b>Learn Front end Development </b>
          <br />
          W3schools
          <br />
          Februari
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2023}
            className='count'
          />
          - Februari
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2023}
            className='count'
          />
        </li>

        <li>
          <b>Webbutvecklingsprogrammet</b>
          <br />
          Mittuniversitetet, Sundsvall
          <br />
          Augusti
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2018}
            className='count'
          />
          - Juni
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2020}
            className='count'
          />
        </li>

        <li>
          <b>Teknikprogrammet</b>
          <br />
          Komvux, Södertälje
          <br />
          Augusti
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2013}
            className='count'
          />
          - Mars
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2018}
            className='count'
          />
        </li>
      </StudieList>
    </StudieCol>
  );
};

export default Studies;
