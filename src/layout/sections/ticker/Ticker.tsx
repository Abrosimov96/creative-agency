import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { theme } from '../../../styles/Theme.styled';

export const Ticker = () => {
  return (
    <StyledTicker>
      <span>We Build Your Brand</span>
      <span>
        <Icon
          iconId="ticker"
          width="38px"
          height="38"
          viewBox="0 0 38 38"
        />
      </span>
      <span>Creating Unique Ideas</span>
      <span>
        <Icon
          iconId="ticker"
          width="38px"
          height="38"
          viewBox="0 0 38 38"
        />
      </span>
      <span>Ideal for Sale</span>
    </StyledTicker>
  );
};

const StyledTicker = styled.section`
  background-color: ${theme.colors.accent} !important;
  width: 100%;
  color: ${theme.colors.primaryDark};
  display: flex;
  justify-content: space-between;

  padding: 48px 0;

  span {
    font-family: 'Syne';
    font-size: 56px;
    font-weight: 700;
    line-height: 110%; /* 61.6px */
  }
`;
