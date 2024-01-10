import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme.styled';

export const GetButton = () => {
  return (
    <StyledGetButton>
      Get In Touch
      <IconWrapper>
        <Icon
          iconId="message"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        />
      </IconWrapper>
    </StyledGetButton>
  );
};

const StyledGetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 19px;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  color: ${theme.colors.primaryDark};

  &::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${theme.colors.accent};
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }
`;
