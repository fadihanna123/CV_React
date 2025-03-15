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
} from '@styles/index';
import React from 'react';
import { projectList } from '@utils/consts';

const Projects: React.FC = () => (
  <>
    <ProjectsContent>
      <ProjectsHeading>Projekt</ProjectsHeading>
      <ProjectsText>Här kan du se mina tidigare projekt.</ProjectsText>
    </ProjectsContent>
    <ProjectsRow>
      {projectList.map((project: ProjectList) => {
        return (
          <ProjectsCol key={project.id}>
            <Card>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectImage src={project.image.path} alt={project.image.alt} />
              <ProjectLink target='_blank' href={project.links.githubURL}>
                <i className='fa-brands fa-github'></i>
              </ProjectLink>
              <ProjectLink target='_blank' href={project.links.URL}>
                <i className='fa-solid fa-globe'></i>
              </ProjectLink>
            </Card>
          </ProjectsCol>
        );
      })}
    </ProjectsRow>
  </>
);

export default Projects;
