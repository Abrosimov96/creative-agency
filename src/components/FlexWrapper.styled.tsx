import styled from 'styled-components';

type FlexWrapperPropsType = {
  direction?: 'column';
  justify?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'center' | 'start' | 'end';
  wrap?: 'wrap';
  gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  gap: ${(props) => props.gap || '0'};
  height: 100%;
  position: relative;
`;
