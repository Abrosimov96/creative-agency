import styled from 'styled-components';
import { Button } from '../../../../components/Button.styled';
import { FlexWrapper } from '../../../../components/FlexWrapper.styled';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme.styled';

export const Left = () => {
  return (
    <StyledLeft>
      <FlexWrapper direction="column">
        <Title>Design For The Human Experience</Title>
        <Text>
          Lorem voluptatem accusantium dolorem quis its tium totamrem
          aperiam eaque ipsaquae inventore
        </Text>
        <SubscribtionForm action="submit">
          <FlexWrapper align="center" gap="10px">
            <Icon
              iconId="message"
              width="20"
              height="18"
              viewBox="0 0 20 18"
            />
            <Field type="text" placeholder="Enter mail address" />
          </FlexWrapper>
          <Button btn={'primary'}>Subscribe Now</Button>
        </SubscribtionForm>
      </FlexWrapper>
    </StyledLeft>
  );
};

const StyledLeft = styled.div`
  max-width: 630px;
  position: relative;
`;
const Title = styled.h1`
  font-family: 'Syne';
  font-size: 96px;
  font-weight: 700;
  line-height: 110%; /* 105.6px */
  margin-bottom: 32px;
`;
const Text = styled.p`
  font-family: 'Syne';
  font-size: 24px;
  font-weight: 400;
  line-height: 150%; /* 36px */
  margin-bottom: 64px;
`;
const SubscribtionForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-left: 40px;
  max-width: 520px;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
`;

const Field = styled.input`
  background-color: transparent;
  appearance: none;
  border: none;
  outline: none;

  color: ${theme.colors.font};

  font-size: 18px;
  font-weight: 400;
  line-height: 150%; /* 27px */

  &:focus {
    border-bottom: 1px solid ${theme.colors.font};
  }
`;
