import ProfileBild from "Images/Profilbild.jpg";
import styled from "styled-components";

const About = () => {
  return (
    <TxtRow>
      <Col50>
        <AboutTxt>
          Jag är en glad, social person som trivs med livet och har hjärtat på
          rätt
          <br />
          plats! Föddes i Syrien där jag studerade i åtta år. Kom till Sverige
          för
          <br />
          över 10 år sedan. När jag kom hit 2007 började intressera mig för
          <br />
          Webbutveckling, och sedan dess är jag fast. Har utbildat mig till
          <br />
          utvecklare, med fokus på webbutveckling. Just nu arbetar jag med
          <br />
          JavaScript (React), TypeScript, HTML, CSS, Strapi m.m. Men jag själv
          <br />
          skulle kalla mig för en Fullstack utvecklare, då jag arbetat både med
          <br /> Backend (PHP) samt Frontend utveckling (JavaScript, React,
          TypeScript,
          <br />
          HTML, CSS etc.). Har ni några funderingar är ni välkomna att höra av
          er.
        </AboutTxt>
      </Col50>
      <Col25>
        <ProfilePhoto src={ProfileBild} alt="Profilbild"></ProfilePhoto>
      </Col25>
    </TxtRow>
  );
};

export default About;

const TxtRow = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1800px) {
    flex-direction: column;
    width: 100%;
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
  display: block;
  max-width: 100%;
  max-height: 90%;
  height: auto;
`;
