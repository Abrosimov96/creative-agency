import { useState } from 'react';
import styled, { css } from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper.styled';
import { theme } from '../../../../styles/Theme.styled';

const menuItems = [
  'All Projects',
  'Design',
  'Development',
  'Product Design',
  'Websites',
];

export const ProjectsMenu = () => {
  const [active, setActive] = useState<string>('All Projects');

  const activeTabHandler = (item: string) => {
    setActive(item);
  };

  return (
    <StyledMenu>
      <FlexWrapper justify="center">
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem>
              <Item
                active={active === item}
                onClick={() => activeTabHandler(item)}>
                {item}
              </Item>
            </MenuItem>
          ))}
        </MenuList>
      </FlexWrapper>
    </StyledMenu>
  );
};

const StyledMenu = styled.div`
  padding: 48px 0 64px;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MenuItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  line-height: 150%; /* 27px */
`;

type ItemPropsType = {
  active?: boolean;
};

const Item = styled.button<ItemPropsType>`
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 12px 4px;
  background-color: #ffffff10;
  ${(props) =>
    props.active &&
    css<ItemPropsType>`
      background-color: ${theme.colors.accent};
      color: ${theme.colors.primaryDark};
    `}
`;
