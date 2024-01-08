import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper.styled';
import { GetButton } from './actions/GetButton';
import { Language } from './actions/Language';

const languages = ['English', 'Russia', 'Bulgaria'];

export const ActionMenu = () => {
  return (
    <StyledActionMenu>
      <FlexWrapper gap="49px" align="center">
        <Language languages={languages} />
        <GetButton />
      </FlexWrapper>
    </StyledActionMenu>
  );
};

const StyledActionMenu = styled.aside``;
