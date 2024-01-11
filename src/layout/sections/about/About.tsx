import styled from 'styled-components';
import { AboutDescription } from '../../../components/AboutDescription';
import { Container } from '../../../components/Container.styled';
import { SectionTitle } from '../../../components/SectionTitle';
import { theme } from '../../../styles/Theme.styled';

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle
          subTitle="Know About Us"
          title="Creating Brands to Touch Hearts & Make Stand Out"
        />
        <AboutDescription />
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  padding: ${theme.padding.section};
`;
