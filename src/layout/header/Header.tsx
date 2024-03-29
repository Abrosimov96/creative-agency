import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper.styled';

import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { ActionMenu } from './actionMenu/ActionMenu';

const menuItems = [
  'Home',
  'Pages',
  'Services',
  'Cases Study',
  'Shop',
  'Blog',
];

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper align="center" justify="space-between">
        <Logo />
        <Menu items={menuItems} />
        <ActionMenu />
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  max-width: 1790px;
  width: 100%;
  margin: 0 auto;
  min-height: 112px;
  padding: 30px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;
