import styled from 'styled-components';
import { Button } from '../../../../components/Button.styled';
import { Icon } from '../../../../components/icon/Icon';

export const AboutDescription = () => {
  return (
    <StyledDescription>
      <DescriptionWrapper>
        <Description>
          lorem voluptatem accusantium doloremque lorem sit laudantium
          totam rem aperiam eaque ipsa quae inventore lorem. Aperiamag
          eaque ipsa quae ab illo inventore accusantium
        </Description>
        <ButtonsWrapper>
          <Button btn="secondary">Our Mission</Button>
          <Button btn="outlined">Our Vision</Button>
        </ButtonsWrapper>
        <Text>
          lorem voluptatem accusantium doloremque laudantium totamua
          rem aperiam eaque ipsa quae abuz
        </Text>
        <ListItems>
          <Item>
            <Icon
              iconId="check"
              width="17"
              height="16"
              viewBox="0 0 17 16"
            />
            <span>Your success is our priority</span>
          </Item>
          <Item>
            <Icon
              iconId="check"
              width="17"
              height="16"
              viewBox="0 0 17 16"
            />
            <span>Leading the way bright future</span>
          </Item>
        </ListItems>
        <div>
          <Button btn="primary">Know More About Us</Button>
        </div>
      </DescriptionWrapper>
      <Photo />
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 64px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 520px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%; /* 27px */
  opacity: 0.7;
  margin-bottom: 40px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%; /* 27px */
  opacity: 0.7;
  margin-bottom: 19px;
`;

const ListItems = styled.ul`
  margin-bottom: 40px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  & + li {
    margin-top: 16px;
  }

  span {
    font-size: 18px;
    font-weight: 400;
    line-height: 150%; /* 27px */
    opacity: 0.7;
  }
`;

const Photo = styled.div`
  border-radius: 24px;
  min-width: 700px;
  max-height: 456px;
  background-color: #d9d9d9;
`;
