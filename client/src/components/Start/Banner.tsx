import React from 'react';
import { Who, WhoContent, WhoHeading } from 'styles/startStyles';

const Banner = () => {
  return (
    <WhoContent>
      <WhoHeading>Vem är jag</WhoHeading>
      <Who>
        Jag heter Fadi Hanna och är utbildad som datatekniker
        <br /> med inriktning mot webbutvecklare.
      </Who>
    </WhoContent>
  );
};

export default Banner;
