import styled from 'styled-components';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { theme } from '../../../styles/Theme.styled';
import { Description } from './sides/left/Description';
import { Slider } from './sides/right/Slider';

export const Testimonial = () => {
  return (
    <StyledTestimonial>
      <Container>
        <FlexWrapper gap="40px">
          <Description />
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledTestimonial>
  );
};

const StyledTestimonial = styled.section`
  padding: ${theme.padding.section};
`;
