import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper.styled';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme.styled';

type ServicePropsType = {
  icon: string;
  title: string;
};

export const Service = ({ icon, title }: ServicePropsType) => {
  return (
    <StyledService>
      <FlexWrapper direction="column" gap="15px">
        <Icon iconId={icon} />
        <Title>{title}</Title>
        <Link href="#">
          <Icon
            iconId="arrowRight"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          />
        </Link>
      </FlexWrapper>
    </StyledService>
  );
};

const StyledService = styled.article`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  background-color: ${theme.colors.primaryDark};
  padding: 32px;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primaryDark};
  }
`;

const Title = styled.h3`
  font-family: 'Syne';
  font-size: 24px;
  font-weight: 700;
  line-height: 120%; /* 28.8px */
`;

const Link = styled.a``;
