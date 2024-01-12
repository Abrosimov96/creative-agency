import styled from 'styled-components';
import { theme } from '../styles/Theme.styled';
import { FlexWrapper } from './FlexWrapper.styled';

type SectionTitlePropsType = {
  subTitle: string;
  title: string;
};

export const SectionTitle = ({
  subTitle,
  title,
}: SectionTitlePropsType) => {
  return (
    <StyledSectionTitle>
      <FlexWrapper direction="column">
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
      </FlexWrapper>
    </StyledSectionTitle>
  );
};

const StyledSectionTitle = styled.div``;

const SubTitle = styled.h4`
  color: ${theme.colors.accent};
  text-align: center;

  font-size: 18px;
  font-weight: 600;
  line-height: 150%; /* 27px */
  text-transform: capitalize;
`;

const Title = styled.h2`
  color: ${theme.colors.font};
  text-align: center;

  /* 56Px Bold */
  font-family: 'Syne';
  font-size: 56px;
  font-weight: 700;
  line-height: 110%; /* 61.6px */
`;
