import React from 'react';
import { Who, WhoContent, WhoHeading } from 'styles/startStyles';

const Banner = () => {
  return (
    <WhoContent>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <WhoHeading>Vem är jag</WhoHeading>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Who>
          Jag heter Fadi Hanna och är utbildad som datatekniker
          <br /> med inriktning mot webbutvecklare.
        </Who>
      </div>
    </WhoContent>
  );
};

export default Banner;
