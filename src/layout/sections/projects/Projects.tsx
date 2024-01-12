import styled from 'styled-components';
import { Button } from '../../../components/Button.styled';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { SectionTitle } from '../../../components/SectionTitle';
import { theme } from '../../../styles/Theme.styled';
import { GridProjects } from './gridProjects/GridProjects';
import { ProjectsMenu } from './projectsMenu/ProjectsMenu';

export const Projects = () => {
  return (
    <StyledProjects>
      <Container>
        <SectionTitle
          title="Selected Cases Studies"
          subTitle="Some Of Our Recent Cases"
        />
        <ProjectsMenu />
        <GridProjects />
        <FlexWrapper justify="center">
          <Button btn="primary">Explore All Portfolios</Button>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  padding: ${theme.padding.section};
`;
