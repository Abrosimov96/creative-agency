import styled from 'styled-components';
import { Container } from '../../components/Container.styled';
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
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <Logo />
          <Menu items={menuItems} />
          <ActionMenu />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  min-height: 112px;
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
`;
