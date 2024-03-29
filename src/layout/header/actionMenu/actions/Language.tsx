import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { theme } from '../../../../styles/Theme.styled';

type LanguagePropsType = {
  languages: Array<string>;
};

export const Language = (props: LanguagePropsType) => {
  return (
    <StyledLanguage>
      <Icon
        iconId="language"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
      />
      <LanguageSelect>
        {props.languages.map((lang) => (
          <LanguageOption>{lang}</LanguageOption>
        ))}
      </LanguageSelect>
    </StyledLanguage>
  );
};

const StyledLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const LanguageSelect = styled.select`
  cursor: pointer;
  color: ${theme.colors.font};
  background-color: transparent;
  border: none;
`;
const LanguageOption = styled.option``;
