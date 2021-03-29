import styled from "styled-components";

import Project1 from "../Images/1.PNG";
import Project2 from "../Images/2.PNG";
import Project3 from "../Images/3.PNG";
import Project4 from "../Images/4.PNG";
import Project5 from "../Images/5.png";
import Project6 from "../Images/6.PNG";
import Project7 from "../Images/7.png";
import Coding from "../Images/coding.jpg";

const Projects = () => {
  return (
    <>
      <ProjectsContent>
        <ProjectsHeading>Projekt</ProjectsHeading>
        <ProjectsText>Här kan du se mina tidigare projekt.</ProjectsText>
      </ProjectsContent>
      <Row>
        <Col>
          <Card>
            <ProjectTitle>Mitt-CV Wordpress</ProjectTitle>
            <ProjectImage src={Project7} alt="Mitt-CV Wordpress" />
            <ProjectLink
              target="_blank"
              href="https://github.com/fadihanna123/CV"
            >
              Github
            </ProjectLink>
            <ProjectLink
              target="_blank"
              href="https://mitt-cv.com/cvwordpress/"
            >
              Webbplats
            </ProjectLink>
          </Card>
        </Col>

        <Col>
          <Card>
            <ProjectTitle>Intranätet(Dashboard) PHP</ProjectTitle>
            <ProjectImage src={Project2} alt="Intranätsprojekt" />
            <ProjectLink
              target="_blank"
              href="https://github.com/fadihanna123/Intranat"
            >
              Github
            </ProjectLink>
            <ProjectLink
              target="_blank"
              href="https://intranet.gssonsel.se.185-133-206-116.bb.kringelstan.se/index.php"
            >
              Webbplats
            </ProjectLink>
          </Card>
        </Col>

        <Col>
          <Card>
            <ProjectTitle>PixabayFinder React</ProjectTitle>
            <ProjectImage src={Project6} alt="PixabayFinder" />
            <ProjectLink
              target="_blank"
              href="https://github.com/fadihanna123/PixaBayFinder"
            >
              Github
            </ProjectLink>
            <ProjectLink
              target="_blank"
              href="https://fadihanna123.github.io/PixabayFinder/"
            >
              Webbplats
            </ProjectLink>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <ProjectTitle>Min Frisör ASP.NET</ProjectTitle>
            <ProjectImage src={Project1} alt="MinFrisörsprojekt" />
            <ProjectLink href="https://github.com/fadihanna123/ASPNET_Projekt">
              Github
            </ProjectLink>
          </Card>
        </Col>

        <Col>
          <Card>
            <ProjectTitle>Blogging PHP</ProjectTitle>
            <ProjectImage src={Project3} alt="Bloggingsprojekt" />
            <ProjectLink
              target="_blank"
              href="https://github.com/fadihanna123/BloggProjekt"
            >
              Github
            </ProjectLink>
          </Card>
        </Col>

        <Col>
          <Card>
            <ProjectTitle>Datahjälp</ProjectTitle>
            <ProjectImage src={Project5} alt="Datahjälpsprojekt" />
            <ProjectLink
              target="_blank"
              href="https://github.com/fadihanna123/DatahjalpProjekt"
            >
              Github
            </ProjectLink>
            <ProjectLink
              target="_blank"
              href="https://fadihanna123.github.io/DatahjalpProjekt/index.html"
            >
              Webbplats
            </ProjectLink>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <ProjectTitle>Billigast & Begagnat</ProjectTitle>
            <ProjectImage src={Project4} alt="Billigast&Begagnatsprojekt" />
            <ProjectLink href="https://github.com/fadihanna123/E-handelprojekt">
              Github
            </ProjectLink>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Projects;

const ProjectsText = styled.p`
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

const ProjectsContent = styled.div`
  background: url(${Coding});
  height: 400px;
  color: white;
  text-align: center;
  font-size: 32px;
  font-style: italic;
  background-size: cover;
  @media (max-width: 1800px) {
    background-size: cover;
    height: 220px;
  }
`;

const ProjectsHeading = styled.h1`
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
    padding: 20px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  @media (max-width: 1800px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  width: 25%;
  @media (max-width: 1800px) {
    width: 100%;
  }
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: 2px 16px;
  margin: 10px;
  text-align: center;
  border: 1px solid black;
  border-radius: 10px;
  background: #efeae4;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
`;

const ProjectTitle = styled.h1`
  text-align: center;
  @media (max-width: 1800px) {
    font-size: 25px;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
  font-size: 30px;
  margin: 5px;
  color: blue;
  &:hover {
    color: red;
  }
  @media (max-width: 1800px) {
    display: flex;
    flex-direction: column;
  }
`;
