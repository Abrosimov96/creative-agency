import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper.styled';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme.styled';

type AwardPropsType = {
  iconId: string;
  name: string;
  location: string;
  title: string;
  text: string;
  year: string;
};

export const Award = ({
  iconId,
  name,
  location,
  title,
  text,
  year,
}: AwardPropsType) => {
  return (
    <StyledAward>
      <FlexWrapper gap="102px" align="center">
        <IconWrapper>
          <Icon
            iconId={iconId}
            width="48"
            height="48"
            viewBox="0 0 48 48"
          />
        </IconWrapper>
        <FlexWrapper gap="60px">
          <FlexWrapper direction="column" gap="16px">
            <StyledMainText>{name}</StyledMainText>
            <StyledAdditionalText>{location}</StyledAdditionalText>
          </FlexWrapper>
          <FlexWrapper direction="column" gap="16px">
            <StyledMainText>{title}</StyledMainText>
            <StyledAdditionalText>{text}</StyledAdditionalText>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
      <StyledYear>{year}</StyledYear>
    </StyledAward>
  );
};

const StyledYear = styled.span`
  color: ${theme.colors.font};
  font-family: 'Syne';
  font-size: 100px;
  font-weight: 700;
  line-height: 110%; /* 110px */
  opacity: 0.3;
`;

const StyledAward = styled.article`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;

  &:hover {
    ${StyledYear} {
      color: ${theme.colors.accent};
      opacity: 1;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  max-height: 88px;
  outline: 1px solid rgba(255, 255, 255, 0.1);
  background-color: ${theme.colors.secondaryDark};
`;

const StyledMainText = styled.span`
  color: ${theme.colors.font};
  font-family: 'Syne';
  font-size: 24px;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
`;

const StyledAdditionalText = styled.span`
  color: ${theme.colors.font};
  display: inline-block;
  max-width: 410px;
  font-size: 18px;
  font-weight: 400;
  line-height: 150%; /* 27px */
  opacity: 0.7;
`;
