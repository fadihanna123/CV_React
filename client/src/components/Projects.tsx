import Project3 from 'assets/2.PNG';
import Project10 from 'assets/5.png';
import Project8 from 'assets/6.PNG';
import {
  Card,
  ProjectImage,
  ProjectLink,
  ProjectsCol,
  ProjectsContent,
  ProjectsHeading,
  ProjectsRow,
  ProjectsText,
  ProjectTitle,
} from 'styles';
import React from 'react';

const Projects: React.FC = () => (
  <>
    <ProjectsContent>
      <ProjectsHeading>Projekt</ProjectsHeading>
      <ProjectsText>Här kan du se mina tidigare projekt.</ProjectsText>
    </ProjectsContent>
    <ProjectsRow>
      <ProjectsCol>
        <Card>
          <ProjectTitle>Intranätet(Dashboard)</ProjectTitle>
          <ProjectImage src={Project3} alt='Intranätsprojekt' />
          <ProjectLink
            target='_blank'
            href='https://github.com/fadihanna123/Intranat'
          >
            Github
          </ProjectLink>
          <ProjectLink
            target='_blank'
            href='https://intranet.gssonsel.se.185-133-206-116.bb.kringelstan.se/index.php'
          >
            Webbplats
          </ProjectLink>
        </Card>
      </ProjectsCol>
      <ProjectsCol>
        <Card>
          <ProjectTitle>PixabayFinder</ProjectTitle>
          <ProjectImage src={Project8} alt='PixabayFinder' />
          <ProjectLink
            target='_blank'
            href='https://github.com/fadihanna123/PixaBayFinder'
          >
            Github
          </ProjectLink>
        </Card>
      </ProjectsCol>
      <ProjectsCol>
        <Card>
          <ProjectTitle>Datahjälp</ProjectTitle>
          <ProjectImage src={Project10} alt='Datahjälpsprojekt' />
          <ProjectLink
            target='_blank'
            href='https://github.com/fadihanna123/DatahjalpProjekt'
          >
            Github
          </ProjectLink>
          <ProjectLink
            target='_blank'
            href='https://fadihanna123.github.io/DatahjalpProjekt/index.html'
          >
            Webbplats
          </ProjectLink>
        </Card>
      </ProjectsCol>
    </ProjectsRow>
  </>
);

export default Projects;
