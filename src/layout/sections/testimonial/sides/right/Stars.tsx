import styled from 'styled-components';
import { Icon } from '../../../../../components/icon/Icon';

type StarsPropsType = {
  stars?: number;
};

export const Stars = ({ stars }: StarsPropsType) => {
  return (
    <StyledStarts>
      <Icon
        iconId="star"
        height="20"
        width="20"
        viewBox="0 0 20 20"
      />
      <Icon
        iconId="star"
        height="20"
        width="20"
        viewBox="0 0 20 20"
      />
      <Icon
        iconId="star"
        height="20"
        width="20"
        viewBox="0 0 20 20"
      />
      <Icon
        iconId="star"
        height="20"
        width="20"
        viewBox="0 0 20 20"
      />
      <Icon
        iconId="star"
        height="20"
        width="20"
        viewBox="0 0 20 20"
      />
    </StyledStarts>
  );
};

const StyledStarts = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;
