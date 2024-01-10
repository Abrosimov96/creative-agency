import styled from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper.styled';
import { theme } from '../../../../styles/Theme.styled';

export const Right = () => {
  return (
    <StyledRight>
      <RightWrapper>
        <FlexWrapper wrap="wrap" gap="40px" justify="space-between">
          <FlexWrapper direction="column" gap="40px">
            <Image1>Image1</Image1>
            <Card2></Card2>
          </FlexWrapper>
          <FlexWrapper
            direction="column"
            gap="88px"
            justify="space-between">
            <Card1>
              <TitleCard>Our Team Leaders</TitleCard>
            </Card1>
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
`;
const Image1 = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 150px 150px 0px 150px;
  background-color: #d9d9d9;
  color: ${theme.colors.primaryDark};
`;
const Image2 = styled.div`
  border-radius: 135px 135px 8px 8px;
  width: 270px;
  height: 320px;
  color: ${theme.colors.primaryDark};
  background-color: #d9d9d9;
`;
const Card1 = styled.div`
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
