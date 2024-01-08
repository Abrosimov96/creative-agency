import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';

export const GetButton = () => {
  return (
    <StyledGetButton>
      Get In Touch
      <Icon
        iconId="message"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      />
    </StyledGetButton>
  );
};

const StyledGetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 19px;
`;
