import styled from 'styled-components';
import { Container } from '../../../components/Container.styled';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { Left } from './sides/Left';
import { Right } from './sides/Right';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          {/* LEFT */}
          <Left />

          {/* RIGHT */}
          <Right />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  padding-top: 90px;
`;
