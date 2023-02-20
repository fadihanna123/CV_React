import ProfileBild from 'assets/Profilbild.jpg';
import { Col25 } from 'styles';
import { AboutTxt, Col50, ProfilePhoto, TxtRow } from 'styles/aboutStyles';
import React from 'react';

const About: React.FC = () => (
  <TxtRow>
    <Col50>
      <AboutTxt>
        Jag är en glad, social person som trivs med livet och har hjärtat på
        rätt
        <br />
        plats! Föddes i Syrien där jag studerade i åtta år. Kom till Sverige för
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
        HTML, CSS etc.). Har ni några funderingar är ni välkomna att höra av er.
      </AboutTxt>
    </Col50>
    <Col25>
      <ProfilePhoto
        src={ProfileBild}
        aria-label='Profilbild'
        loading='lazy'
        alt='Profilbild'
      />
    </Col25>
  </TxtRow>
);

export default About;
