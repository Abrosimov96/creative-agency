import styled from 'styled-components';
import { Icon } from '../icon/Icon';

export const Logo = () => {
  return (
    <Link href="#">
      <Icon iconId="logo" />
      <StiledLogo>Zency</StiledLogo>
    </Link>
  );
};

const StiledLogo = styled.span``;

const Link = styled.a`
  display: flex;
  align-items: center;
`;
