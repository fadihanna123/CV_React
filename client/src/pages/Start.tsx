import About from "components/About";
import Icons from "components/Icons";
import WorknStudies from "components/WorknStudies";
import {
  Row,
  SkillsHeading,
  Who,
  WhoContent,
  WhoHeading,
} from "styles/startStyles";

const Start: React.FC = () => (
  <>
    <WhoContent>
      <WhoHeading>Vem är jag</WhoHeading>
      <Who>
        Jag heter Fadi Hanna och är utbildad som datatekniker
        <br /> med inriktning mot webbutvecklare.
      </Who>
    </WhoContent>
    <About />
    <WorknStudies />
    <SkillsHeading>Kompetenser</SkillsHeading>
    <br />
    <Row>
      <Icons />
    </Row>
  </>
);

export default Start;
