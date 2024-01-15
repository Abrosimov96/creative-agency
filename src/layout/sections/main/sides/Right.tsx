import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper.styled';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme.styled';

export const Right = () => {
  return (
    <StyledRight>
      <RightWrapper>
        <FlexWrapper wrap="wrap" gap="40px" justify="space-between">
          <FlexWrapper direction="column" gap="40px">
            <Image1>
              <IconWrapper>
                <Icon
                  iconId={'messageNotif'}
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill={theme.colors.font}
                />
              </IconWrapper>
            </Image1>
            <Card2>Card2</Card2>
          </FlexWrapper>
          <FlexWrapper
            direction="column"
            gap="88px"
            justify="space-between">
            <Card1>
              <TitleCard>Our Team Leaders</TitleCard>
              <CirclesList>
                <Circle>
                  <span>8K</span>
                </Circle>
                <Circle></Circle>
                <Circle></Circle>
                <Circle></Circle>
              </CirclesList>
            </Card1>
            <MessageWrapper>
              <Icon
                iconId="mainMessage"
                height="50"
                width="56"
                viewBox="0 0 56 50"
              />
            </MessageWrapper>
            <Image2>Image2</Image2>
          </FlexWrapper>
        </FlexWrapper>
      </RightWrapper>
    </StyledRight>
  );
};

const StyledRight = styled.div`
  position: relative;

  width: 650px;
`;
const RightWrapper = styled.div`
  padding: 0 26px 0 13px;
  transform: translateX(58px);
  &::before {
    content: '';
    width: 366px;
    height: 366px;
    position: absolute;
    border-radius: 366px;
    background: #ceff23;
    filter: blur(300px);
    transform: translate(25%, 25%);
    z-index: -1;
  }
`;
const Image1 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 150px 150px 0px 150px;
  background-color: #d9d9d9;
  color: ${theme.colors.primaryDark};

  position: relative;

  &::before {
    content: '';
    display: flex;
    width: 66px;
    height: 66px;
    background-color: #596aff;
    border: 6px solid ${theme.colors.primaryDark};
    border-radius: 50%;

    position: absolute;
    top: 50px;
    left: -13px;
  }
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 69px;
  left: 6px;
`;

const MessageWrapper = styled.span`
  position: absolute;
  top: 245px;
  left: 240px;
`;

const Image2 = styled.div`
  border-radius: 135px 135px 8px 8px;
  width: 270px;
  height: 320px;
  color: ${theme.colors.primaryDark};
  background-color: #d9d9d9;
`;
const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 270px;
  height: 155px;
  border-radius: 16px;
  padding: 23px 23px 24px 27px;
  margin-top: 39px;
  color: ${theme.colors.primaryDark};
  background-color: ${theme.colors.font};
`;
const Card2 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 16px;
  color: ${theme.colors.primaryDark};
  background-color: ${theme.colors.font};
`;
const TitleCard = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 150%; /* 30px */
  color: ${theme.colors.primaryDark};
`;

const CirclesList = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Circle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: ${theme.colors.accent};
`;
