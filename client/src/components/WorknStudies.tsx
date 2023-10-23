import {
  StudieCol,
  StudieHeading,
  StudieList,
  ThirdRow,
  WorkCol,
  WorkHeading,
  WorkList,
} from 'styles';
import React from 'react';
import CountUp from 'react-countup';

const WorknStudies: React.FC = () => (
  <ThirdRow>
    <WorkCol>
      <WorkHeading>Arbetsliverfarenhet</WorkHeading>
      <WorkList>
        <li>
          <b>Datakonsult - Grundare</b>
          <br />
          Södertälje Techhouse
          <br />
          Oktober
          <CountUp
            separator=''
            duration={1}
            start={2023}
            end={2023}
            className='count'
          />
          - Now
        </li>

        <li>
          <b>Systemutvecklare - Grundare</b>
          <br />
          Let&apos;s code
          <br />
          Oktober
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2022}
            className='count'
          />
          - Januari
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2023}
            className='count'
          />
        </li>

        <li>
          <b>Data admin - konsult</b>
          <br />
          Academic Work
          <br />
          Oktober
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2022}
            className='count'
          />
          - November
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2022}
            className='count'
          />
        </li>

        <li>
          <b>Systemutvecklare</b>
          <br />
          Rektron, Solna
          <br />
          Januari
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2022}
            className='count'
          />
          - July
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2022}
            className='count'
          />
        </li>

        <li>
          <b>Javascript utvecklare</b>
          <br />
          Soltia AB, Tumba
          <br />
          April
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2021}
            className='count'
          />
          - December 2021
        </li>

        <li>
          <b>PHP utvecklare - konsult</b>
          <br />
          Kringelstan Webbyrå, Södertälje
          <br />
          November
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2020}
            className='count'
          />
          - December
          <CountUp
            separator=''
            start={0}
            end={2020}
            className='count'
            duration={1}
          />
        </li>

        <li>
          <b>Webbutvecklare - Praktik</b>
          <br />
          Kringelstan Webbyrå, Södertälje
          <br />
          Oktober
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2020}
            className='count'
          />
          - November
          <CountUp
            separator=''
            start={0}
            end={2020}
            className='count'
            duration={1}
          />
        </li>

        <li>
          <b>Lärare inom media- och informationsteknik.</b>
          <br />
          Wendela Hebbegymnasiet, Södertälje
          <br />
          Augusti
          <CountUp
            separator=''
            duration={1}
            start={0}
            end={2020}
            className='count'
          />
          - September
          <CountUp
            separator=''
            start={0}
            end={2020}
            className='count'
            duration={1}
          />
        </li>
      </WorkList>
    </WorkCol>
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
  </ThirdRow>
);

export default WorknStudies;
