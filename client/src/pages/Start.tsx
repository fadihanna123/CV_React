import About from "components/About";
import Icons from "components/Icons";
import WorknStudies from "components/WorknStudies";
import Coding from "images/coding.jpg";
import styled from "styled-components";

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

const WhoContent = styled.div`
  background: url(${Coding});
  height: 400px;
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-style: italic;
  background-size: cover;

  @media (max-width: 1800px) {
    background-size: cover;
    height: 300px;
  }
`;

const WhoHeading = styled.h1`
  font-style: italic;
  color: #fff;
  font-size: 52px;
  padding-top: 130px;
  height: 0;
  padding-right: 280px;

  @media (max-width: 1800px) {
    margin: 0;
    padding: 0;
    height: 100px;
  }
`;

const Who = styled.p`
  text-align: center;
  font-style: italic;
  color: #fff;
  padding-top: 60px;
  padding-right: 300px;

  @media (max-width: 1800px) {
    margin: 0;
    padding: 1px;
  }
`;

const SkillsHeading = styled.h1`
  font-style: italic;
  height: 50px;
  font-size: 32px;
  margin-left: 750px;

  @media (max-width: 1800px) {
    margin: 0;
    text-align: center;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;
