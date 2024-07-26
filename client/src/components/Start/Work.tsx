import React from 'react';
import CountUp from 'react-countup';
import { WorkCol, WorkHeading, WorkList } from 'styles';

const Work: React.FC = () => {
  return (
    <WorkCol>
      <WorkHeading>Arbetsliverfarenhet</WorkHeading>
      <WorkList>
        <li>
          <b>Fullstack utvecklare - Praktik</b>
          <br />
          Luday
          <br />
          April
          <CountUp
            separator=''
            duration={1}
            start={2024}
            end={2024}
            className='count'
          />
          - Nu
        </li>

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
          - Nu
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
  );
};

export default Work;
