import styled from 'styled-components';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { SectionTitle } from '../../../components/SectionTitle';
import { theme } from '../../../styles/Theme.styled';
import { Award } from './award/Award';

const awardItems = [
  {
    iconId: 'medal',
    name: 'Dribble',
    location: 'Sydney, Australia',
    title: 'UI/UX Designer',
    text: 'Cultivating market leadership from the inside out. We’re the brand builders for better.',
    year: '2010',
  },
  {
    iconId: 'piedestal',
    name: 'Dribble',
    location: 'Sydney, Australia',
    title: 'UI/UX Designer',
    text: 'Cultivating market leadership from the inside out. We’re the brand builders for better.',
    year: '2018',
  },
  {
    iconId: 'cup',
    name: 'Dribble',
    location: 'Sydney, Australia',
    title: 'UI/UX Designer',
    text: 'Cultivating market leadership from the inside out. We’re the brand builders for better.',
    year: '2021',
  },
];

export const Awards = () => {
  return (
    <StyledAwards>
      <Container>
        <SectionTitle
          subTitle="Some Of Our Recent Cases"
          title="Selected Cases Studies"
        />
        <FlexWrapper direction="column">
          {awardItems.map((item) => (
            <Award key={item.iconId} {...item} />
          ))}
        </FlexWrapper>
      </Container>
    </StyledAwards>
  );
};

const StyledAwards = styled.section`
  padding: ${theme.padding.section};
  color: ${theme.colors.accent};
`;
