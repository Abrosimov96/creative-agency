import styled from 'styled-components';

import { Icon } from '../../../../../components/icon/Icon';
import { SectionTitle } from '../../../../../components/SectionTitle';
import { theme } from '../../../../../styles/Theme.styled';

export const Description = () => {
  return (
    <StyledDescription>
      <SectionTitle
        title="What Client’s Say About Us?"
        subTitle="Testimonial"
      />
      <Text>
        lorem voluptatem accusantium doloremque laudantium totam rem
        aperiam eaque ipsa quae abuz
      </Text>
      <ButtonsWrapper>
        <Button>
          <Icon
            iconId="arrow-back"
            height="20"
            width="20"
            viewBox="0 0 20 16"
          />
        </Button>
        <Button>
          <Icon
            iconId="arrow-forward"
            height="20"
            width="20"
            viewBox="0 0 20 16"
          />
        </Button>
      </ButtonsWrapper>
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  max-width: 520px;
`;

const Text = styled.p`
  margin: 24px 0 50px;
  font-size: 18px;

  font-weight: 400;
  line-height: 150%; /* 27px */

  opacity: 0.7;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Button = styled.button`
  padding: 12px;
  width: 50px;
  height: 50px;
  border: 1px solid #ffffff20;
  border-radius: 50%;
  color: ${theme.colors.accent};
  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.primaryDark};
    border: none;
  }
`;
