import CountUp from "react-countup";
import {
  ThirdRow,
  WorkCol,
  WorkHeading,
  WorkList,
  StudieCol,
  StudieHeading,
  StudieList,
} from "styles";

const WorknStudies = () => (
  <ThirdRow>
    <WorkCol>
      <WorkHeading>Arbetsliverfarenhet</WorkHeading>
      <WorkList>
        <li>
          <b>Javascript utvecklare</b>
          <br />
          Soltia AB, Tumba
          <br />
          April
          <CountUp duration={1} start={0} end={2021} className="count" />- Nu
        </li>

        <li>
          <b>PHP utvecklare</b>
          <br />
          Kringelstan Webbyrå, Södertälje
          <br />
          November
          <CountUp duration={1} start={0} end={2020} className="count" />
          - December
          <CountUp start={0} end={2020} className="count" duration={1} />
        </li>

        <li>
          <b>Webbutvecklare - Praktik</b>
          <br />
          Kringelstan Webbyrå, Södertälje
          <br />
          Oktober
          <CountUp duration={1} start={0} end={2020} className="count" />
          - November
          <CountUp start={0} end={2020} className="count" duration={1} />
        </li>

        <li>
          <b>Lärare inom media- och informationsteknik.</b>
          <br />
          Wendela Hebbegymnasiet, Södertälje
          <br />
          Augusti
          <CountUp duration={1} start={0} end={2020} className="count" />
          - September
          <CountUp start={0} end={2020} className="count" duration={1} />
        </li>
      </WorkList>
    </WorkCol>
    <StudieCol>
      <StudieHeading>Tidigare utbildningar</StudieHeading>
      <StudieList>
        <li>
          <b>Webbutvecklingsprogrammet</b>
          <br />
          Mittuniversitetet, Sundsvall
          <br />
          Augusti
          <CountUp duration={1} start={0} end={2018} className="count" />
          - Juni
          <CountUp duration={1} start={0} end={2020} className="count" />
        </li>

        <li>
          <b>Teknikprogrammet</b>
          <br />
          Komvux, Södertälje
          <br />
          Augusti
          <CountUp duration={1} start={0} end={2013} className="count" />
          - Mars
          <CountUp duration={1} start={0} end={2018} className="count" />
        </li>
      </StudieList>
    </StudieCol>
  </ThirdRow>
);

export default WorknStudies;
