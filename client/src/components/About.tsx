import ProfileBild from 'assets/Profilbild.jpg';
import { AboutTxt, Col50, ProfilePhoto, TxtRow } from 'styles/aboutStyles';
import React from 'react';

const About: React.FC = () => (
  <TxtRow>
    <Col50>
      <AboutTxt>
        Jag är en glad, social person som trivs med livet och har hjärtat på
        rätt
        <br />
        plats! Sedan år 2010 blev jag genast intresserad av webbutveckling, och
        har fortsatt med det spåret sedan dess. NJag har utbildat mig till
        utvecklare, med fokus på webbutveckling. Jag skulle kalla mig en
        Fullstack utvecklare, eftersom jag arbetade med båda Backend (PHP, Node
        JS) och frontend-utveckling (JavaScript, React, Angular, TypeScript,
        HTML, CSS, etc.).
      </AboutTxt>
    </Col50>
    <Col50>
      <ProfilePhoto
        src={ProfileBild}
        aria-label='Profilbild'
        loading='lazy'
        alt='Profilbild'
      />
    </Col50>
  </TxtRow>
);

export default About;
