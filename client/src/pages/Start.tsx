import Coding from "Images/coding.jpg";
import ProfileBild from "Images/Profilbild.jpg";
import Star from "Images/star.png";
import CountUp from "react-countup";
import styled from "styled-components";

const Start = () => {
  return (
    <>
      <WhoContent>
        <WhoHeading>Vem är jag</WhoHeading>
        <Who>
          Jag heter Fadi Hanna och är utbildad som datatekniker
          <br /> med inriktning mot webbutvecklare.
        </Who>
      </WhoContent>
      <TxtRow>
        <Col50>
          <AboutTxt>
            Jag heter Fadi Hanna och är 28 år gammal. Jag föddes i Syrien där
            jag
            <br /> studerade i 8 år. Jag är en social person med hjärtat på rätt
            ställe.
            <br /> Jag började lära mig webbutveckling år 2010 och sedan dess
            gillade jag
            <br /> den. Jag är utbildad webbutvecklare med särskilt intresse för
            PHP, React,
            <br /> Wordpress, Mysql och många andra. Jag brinner för IT och
            teknik.
            <br /> Självklart har jag klarat grundläggande och gymnasial svenska
            samt andra
            <br /> kurser bland annat kurser inom data/IT. Just nu är jag
            färdigutbildad
            <br /> datatekniker med inriktning mot webbutveckling. Jag är också
            <br />
            tillgänglig för eventuella praktikplatser. Jag är så bra i<br />
            webbutveckling och önskar att vara mellan er. Det är mycket
            intressant
            <br /> som är kvar att berätta för er om mig och ser emot att träffa
            er i<br /> intervjun.
          </AboutTxt>
        </Col50>
        <Col25>
          <ProfilePhoto src={ProfileBild} alt="Profilbild"></ProfilePhoto>
        </Col25>
      </TxtRow>
      <ThirdRow>
        <WorkCol>
          <WorkHeading>Arbetsliverfarenhet</WorkHeading>
          <WorkList>
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
      <SkillsHeading>Kompetenser</SkillsHeading>
      <br />
      <Row>
        <Col>
          React
          <br />
          Javascript
          <br /> PHP
          <br /> React Native
          <br /> Wordpress
          <br />
          ASP.NET
          <br /> Typescript
          <br /> Node JS
          <br /> MySQL
          <br /> Mongodb
          <br /> HTML
          <br /> CSS
          <br /> SASS
          <br /> Bootstrap
          <br /> PugJS
          <br /> Git
          <br /> jQuery
          <br /> JSON
          <br /> Restful och API
          <br /> CMS
          <br /> Adobe Photoshop
          <br /> Adobe XD
          <br /> Heroku
          <br /> C#
          <br /> Gulp
          <br /> Agil
        </Col>
        <Col>
          <Icon src={Star} alt="react"></Icon>
          <Icon src={Star} alt="react"></Icon>
          <Icon src={Star} alt="react"></Icon>
          <Icon src={Star} alt="react"></Icon>
          <br />

          <Icon src={Star} alt="Javascript"></Icon>
          <Icon src={Star} alt="Javascript"></Icon>
          <Icon src={Star} alt="Javascript"></Icon>
          <Icon src={Star} alt="Javascript"></Icon>
          <br />

          <Icon src={Star} alt="PHP"></Icon>
          <Icon src={Star} alt="PHP"></Icon>
          <Icon src={Star} alt="PHP"></Icon>
          <Icon src={Star} alt="PHP"></Icon>
          <Icon src={Star} alt="PHP"></Icon>
          <br />

          <Icon src={Star} alt="ReactNative"></Icon>
          <Icon src={Star} alt="ReactNative"></Icon>
          <Icon src={Star} alt="ReactNative"></Icon>
          <br />

          <Icon src={Star} alt="wp"></Icon>
          <Icon src={Star} alt="wp"></Icon>
          <Icon src={Star} alt="wp"></Icon>
          <br />

          <Icon src={Star} alt="ASPNET"></Icon>
          <Icon src={Star} alt="ASPNET"></Icon>
          <Icon src={Star} alt="ASPNET"></Icon>
          <Icon src={Star} alt="ASPNET"></Icon>
          <br />

          <Icon src={Star} alt="Typescript"></Icon>
          <Icon src={Star} alt="Typescript"></Icon>
          <Icon src={Star} alt="Typescript"></Icon>
          <br />

          <Icon src={Star} alt="NodeJS"></Icon>
          <Icon src={Star} alt="NodeJS"></Icon>
          <Icon src={Star} alt="NodeJS"></Icon>
          <Icon src={Star} alt="NodeJS"></Icon>
          <Icon src={Star} alt="NodeJS"></Icon>
          <br />

          <Icon src={Star} alt="SQL"></Icon>
          <Icon src={Star} alt="SQL"></Icon>
          <Icon src={Star} alt="SQL"></Icon>
          <Icon src={Star} alt="SQL"></Icon>
          <Icon src={Star} alt="SQL"></Icon>
          <br />

          <Icon src={Star} alt="Mongodb"></Icon>
          <Icon src={Star} alt="Mongodb"></Icon>
          <Icon src={Star} alt="Mongodb"></Icon>
          <Icon src={Star} alt="Mongodb"></Icon>
          <Icon src={Star} alt="Mongodb"></Icon>
          <br />

          <Icon src={Star} alt="HTML"></Icon>
          <Icon src={Star} alt="HTML"></Icon>
          <Icon src={Star} alt="HTML"></Icon>
          <Icon src={Star} alt="HTML"></Icon>
          <Icon src={Star} alt="HTML"></Icon>
          <br />

          <Icon src={Star} alt="CSS"></Icon>
          <Icon src={Star} alt="CSS"></Icon>
          <Icon src={Star} alt="CSS"></Icon>
          <Icon src={Star} alt="CSS"></Icon>
          <Icon src={Star} alt="CSS"></Icon>
          <br />

          <Icon src={Star} alt="Sass"></Icon>
          <Icon src={Star} alt="Sass"></Icon>
          <Icon src={Star} alt="Sass"></Icon>
          <br />

          <Icon src={Star} alt="Bootstrap"></Icon>
          <Icon src={Star} alt="Bootstrap"></Icon>
          <Icon src={Star} alt="Bootstrap"></Icon>
          <Icon src={Star} alt="Bootstrap"></Icon>
          <br />

          <Icon src={Star} alt="PugJS"></Icon>
          <Icon src={Star} alt="PugJS"></Icon>
          <Icon src={Star} alt="PugJS"></Icon>
          <br />

          <Icon src={Star} alt="Git"></Icon>
          <Icon src={Star} alt="Git"></Icon>
          <Icon src={Star} alt="Git"></Icon>
          <Icon src={Star} alt="Git"></Icon>
          <br />

          <Icon src={Star} alt="jQuery"></Icon>
          <Icon src={Star} alt="jQuery"></Icon>
          <Icon src={Star} alt="jQuery"></Icon>
          <Icon src={Star} alt="jQuery"></Icon>
          <Icon src={Star} alt="jQuery"></Icon>
          <br />

          <Icon src={Star} alt="Json"></Icon>
          <Icon src={Star} alt="Json"></Icon>
          <Icon src={Star} alt="Json"></Icon>
          <br />

          <Icon src={Star} alt="Rest"></Icon>
          <Icon src={Star} alt="Rest"></Icon>
          <Icon src={Star} alt="Rest"></Icon>
          <Icon src={Star} alt="Rest"></Icon>
          <br />

          <Icon src={Star} alt="CMS"></Icon>
          <Icon src={Star} alt="CMS"></Icon>
          <Icon src={Star} alt="CMS"></Icon>
          <Icon src={Star} alt="CMS"></Icon>
          <br />

          <Icon src={Star} alt="Adobe Ph"></Icon>
          <Icon src={Star} alt="Adobe Ph"></Icon>
          <Icon src={Star} alt="Adobe Ph"></Icon>
          <Icon src={Star} alt="Adobe Ph"></Icon>
          <br />

          <Icon src={Star} alt="Adobe XD"></Icon>
          <Icon src={Star} alt="Adobe XD"></Icon>
          <Icon src={Star} alt="Adobe XD"></Icon>
          <Icon src={Star} alt="Adobe XD"></Icon>
          <br />

          <Icon src={Star} alt="Heroku"></Icon>
          <Icon src={Star} alt="Heroku"></Icon>
          <Icon src={Star} alt="Heroku"></Icon>
          <Icon src={Star} alt="Heroku"></Icon>
          <br />

          <Icon src={Star} alt="C#"></Icon>
          <Icon src={Star} alt="C#"></Icon>
          <Icon src={Star} alt="C#"></Icon>
          <Icon src={Star} alt="C#"></Icon>
          <br />

          <Icon src={Star} alt="Gulp"></Icon>
          <Icon src={Star} alt="Gulp"></Icon>
          <Icon src={Star} alt="Gulp"></Icon>
          <Icon src={Star} alt="Gulp"></Icon>
          <br />

          <Icon src={Star} alt="Agil"></Icon>
          <Icon src={Star} alt="Agil"></Icon>
          <Icon src={Star} alt="Agil"></Icon>
          <Icon src={Star} alt="Agil"></Icon>
          <br />
        </Col>
      </Row>
    </>
  );
};

export default Start;

const WhoContent = styled.div`
  background: url(${Coding});
  height: 400px;
  color: white;
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
  color: white;
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
  color: white;
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

const WorkList = styled.ul`
  list-style: square;
  @media (max-width: 1800px) {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const StudieList = styled.ul`
  list-style: square;
  @media (max-width: 1800px) {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const WorkHeading = styled.h1`
  margin: 10px;
`;
const StudieHeading = styled.h1`
  margin: 10px;
  white-space: nowrap;
`;

const Icon = styled.img`
  width: 15px;
  height: 15px;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
`;

const ThirdRow = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

const TxtRow = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1800px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Col = styled.div`
  width: 15%;
  font-weight: bold;
  line-height: 2em;
  @media (max-width: 1800px) {
    width: 100%;
    text-align: center;
  }
`;

const StudieCol = styled.div`
  width: 15%;
  line-height: 2em;
  @media (max-width: 1800px) {
    width: 100%;
    text-align: center;
  }
`;

const WorkCol = styled.div`
  width: 50%;
  line-height: 2em;
  @media (max-width: 1800px) {
    width: 100%;
    text-align: center;
  }
`;

const Col25 = styled.div`
  width: 25%;
  margin-top: 100px;
  margin-left: 50px;
  @media (max-width: 1800px) {
    width: 100%;
    margin: 0;
  }
`;

const Col50 = styled.div`
  width: 50%;
  @media (max-width: 1800px) {
    width: 100%;
    margin: 0;
  }
`;

const AboutTxt = styled.p`
  text-align: center;
  font-size: 32px;
  margin-top: 100px;
`;

const ProfilePhoto = styled.img`
  width: 100%;
  height: 90%;
`;
