import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme.styled';

type ButtonPropsType = {
  btn: 'primary' | 'secondary' | 'outlined';
  background?: string;
  color?: string;
  borderRadius?: string;
};

export const Button = styled.button<ButtonPropsType>`
  padding: 18px 40px;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%; /* 27px */

  border-radius: 32px;
  color: ${theme.colors.primaryDark};

  ${(props) =>
    props.btn === 'primary' &&
    css<ButtonPropsType>`
      background-color: ${theme.colors.accent};
    `}

  ${(props) =>
    props.btn === 'secondary' &&
    css<ButtonPropsType>`
      background-color: ${theme.colors.font};
    `}

    ${(props) =>
    props.btn === 'outlined' &&
    css<ButtonPropsType>`
      background-color: transparent;
      border: 1px solid ${theme.colors.font};
      color: ${theme.colors.font};
    `}
`;
