import styled from 'styled-components';
import { theme } from '../../../../../styles/Theme.styled';

type ProjectPropsType = {
  title?: string;
  subTitle?: string;
};

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      {props.title ? (
        <Photo>
          <SubTitle>{props.subTitle}</SubTitle>
          <Title>{props.title}</Title>
        </Photo>
      ) : (
        ''
      )}
    </StyledProject>
  );
};

const StyledProject = styled.div`
  border-radius: 12px;
  background: #d9d9d9;
  position: relative;
  padding: 24px;
`;

const Photo = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 8px;
  background-color: #0c0c1c80;
`;

const SubTitle = styled.span`
  display: inline-block;
  padding: 5px 8px;
  background-color: ${theme.colors.accent};
  border-radius: 4px;
  color: ${theme.colors.primaryDark};

  font-size: 18px;
  font-weight: 600;
  line-height: 150%; /* 27px */

  position: absolute;
  top: 540px;
  left: 48px;
`;

const Title = styled.span`
  display: inline-block;
  padding: 5px 8px;
  color: ${theme.colors.primaryDark};
  background-color: ${theme.colors.font};
  border-radius: 4px;

  /* 24px Bold */
  font-family: 'Syne';
  font-size: 24px;
  font-weight: 700;
  line-height: 120%; /* 28.8px */

  position: absolute;
  top: 582px;
  left: 48px;
`;
