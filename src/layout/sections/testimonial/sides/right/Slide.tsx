import styled from 'styled-components';
import { FlexWrapper } from '../../../../../components/FlexWrapper.styled';
import { theme } from '../../../../../styles/Theme.styled';
import { Stars } from './Stars';

type SlidePropsType = {
  name: string;
  designation: string;
};

export const Slide = (props: SlidePropsType) => {
  return (
    <StyledSlide>
      <Stars />
      <Text>
        “There’re many variation of this a passages Ipsum available
        but the majority have suffered alteration a some form by
        injected humour randomised from this words.”
      </Text>
      <FlexWrapper gap="18px" align="center">
        <PhotoWrapper>
          <Photo />
        </PhotoWrapper>
        <FlexWrapper direction="column">
          <Name>{props.name}</Name>
          <Designation>{props.designation}</Designation>
        </FlexWrapper>
      </FlexWrapper>
    </StyledSlide>
  );
};

const StyledSlide = styled.article`
  max-width: 350px;
  padding: 32px;
  background-color: ${theme.colors.primaryDark};
  border-radius: 12px;
`;

const Text = styled.p`
  color: ${theme.colors.font};
  font-size: 18px;
  font-weight: 400;
  line-height: 150%; /* 27px */
  opacity: 0.7;

  margin: 24px 0 34px;
`;

const PhotoWrapper = styled.div``;

const Photo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #c4c4c4;
  position: relative;
`;

const Name = styled.span`
  /* 24px Bold */
  font-family: 'Syne';
  font-size: 24px;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
`;

const Designation = styled.span``;
