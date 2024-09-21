import { Col } from 'styles';
import React from 'react';
import CreateStar from './CreateStar';

const Icons: React.FC = () => (
  <>
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
      <CreateStar count={2} alt='React' /> <br />
      <CreateStar count={4} alt='Javascript' /> <br />
      <CreateStar count={5} alt='PHP' /> <br />
      <CreateStar count={3} alt='ReactNative' /> <br />
      <CreateStar count={3} alt='wp' /> <br />
      <CreateStar count={4} alt='ASPNET' /> <br />
      <CreateStar count={3} alt='Typescript' /> <br />
      <CreateStar count={5} alt='NodeJS' /> <br />
      <CreateStar count={5} alt='SQL' /> <br />
      <CreateStar count={5} alt='Mongodb' /> <br />
      <CreateStar count={5} alt='HTML' /> <br />
      <CreateStar count={5} alt='CSS' /> <br />
      <CreateStar count={3} alt='Scss' /> <br />
      <CreateStar count={4} alt='Bootstrap' /> <br />
      <CreateStar count={2} alt='PugJS' /> <br />
      <CreateStar count={4} alt='Git' /> <br />
      <CreateStar count={5} alt='jQuery' /> <br />
      <CreateStar count={3} alt='Json' /> <br />
      <CreateStar count={4} alt='Rest' /> <br />
      <CreateStar count={4} alt='CMS' /> <br />
      <CreateStar count={4} alt='Adobe Ph' /> <br />
      <CreateStar count={4} alt='Adobe XD' /> <br />
      <CreateStar count={4} alt='Heroku' /> <br />
      <CreateStar count={4} alt='C#' /> <br />
      <CreateStar count={4} alt='Gulp' /> <br />
      <CreateStar count={4} alt='Agil' /> <br />
    </Col>
  </>
);

export default Icons;
