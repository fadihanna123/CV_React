import Project1 from "Images/1.PNG";
import Project2 from "Images/2.PNG";
import Project3 from "Images/3.PNG";
import Project4 from "Images/4.PNG";
import Project5 from "Images/5.png";
import Project6 from "Images/6.PNG";
import Project7 from "Images/7.png";
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
} from "styles";

const Projects = () => (
  <>
    <ProjectsContent>
      <ProjectsHeading>Projekt</ProjectsHeading>
      <ProjectsText>Här kan du se mina tidigare projekt.</ProjectsText>
    </ProjectsContent>
    <ProjectsRow>
      <ProjectsCol>
        <Card>
          <ProjectTitle>Mitt-CV Wordpress</ProjectTitle>
          <ProjectImage src={Project7} alt="Mitt-CV Wordpress" />
          <ProjectLink
            target="_blank"
            href="https://github.com/fadihanna123/CV"
          >
            Github
          </ProjectLink>
          <ProjectLink target="_blank" href="https://mitt-cv.com/cvwordpress/">
            Webbplats
          </ProjectLink>
        </Card>
      </ProjectsCol>

      <ProjectsCol>
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
      </ProjectsCol>

      <ProjectsCol>
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
      </ProjectsCol>
    </ProjectsRow>

    <ProjectsRow>
      <ProjectsCol>
        <Card>
          <ProjectTitle>Min Frisör ASP.NET</ProjectTitle>
          <ProjectImage src={Project1} alt="MinFrisörsprojekt" />
          <ProjectLink href="https://github.com/fadihanna123/ASPNET_Projekt">
            Github
          </ProjectLink>
        </Card>
      </ProjectsCol>

      <ProjectsCol>
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
      </ProjectsCol>

      <ProjectsCol>
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
      </ProjectsCol>
    </ProjectsRow>

    <ProjectsRow>
      <ProjectsCol>
        <Card>
          <ProjectTitle>Billigast & Begagnat</ProjectTitle>
          <ProjectImage src={Project4} alt="Billigast&Begagnatsprojekt" />
          <ProjectLink href="https://github.com/fadihanna123/E-handelprojekt">
            Github
          </ProjectLink>
        </Card>
      </ProjectsCol>
    </ProjectsRow>
  </>
);

export default Projects;
