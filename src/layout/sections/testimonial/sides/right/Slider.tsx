import styled from 'styled-components';
import { FlexWrapper } from '../../../../../components/FlexWrapper.styled';
import { Slide } from './Slide';

const testimonyItems = [
  {
    name: 'David Patel',
    designation: 'Web Developer',
  },
  {
    name: 'Olivia Kim',
    designation: 'Web Developer',
  },
];

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper align="center" justify="space-between">
        {testimonyItems.map((review) => (
          <Slide {...review} />
        ))}
      </FlexWrapper>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  flex: 1;
`;
