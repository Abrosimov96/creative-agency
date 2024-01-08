import styled from 'styled-components';
import { Icon } from '../icon/Icon';

type MenuPropsType = {
  items: Array<string>;
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledMenu>
      <ListItem>
        {props.items.map((item) => (
          <Item key={item}>
            <Link href="#">
              {item}
              <Icon
                iconId="stroke"
                width="10"
                height="5"
                viewBox="0 0 10 5"
              />
            </Link>
          </Item>
        ))}
      </ListItem>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav``;

const ListItem = styled.ul`
  display: flex;
  gap: 56px;
`;

const Item = styled.li``;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
`;
