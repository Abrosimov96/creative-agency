import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Logo = () => {
  return (
    <Link href="#">
      <Icon
        iconId="logo"
        width="28"
        height="28"
        viewBox="0 0 28 28"
      />
      <StiledLogo>Zency</StiledLogo>
    </Link>
  );
};

const StiledLogo = styled.span``;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 30px;
`;
