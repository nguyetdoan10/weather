import { useState } from 'react';

import DarkModeIcon from '../../../assets/dark-mode-icon.svg?react';
import LightModeIcon from '../../../assets/light-mode-icon.svg?react';
import SearchIcon from '../../../assets/search-icon.svg?react';
import { useThemeModeStore } from '../../../hooks/use-theme-mode-store';
import { useWeatherStore } from '../../../hooks/use-weather-store';
import { ThemeMode } from '../../../theme';

import {
  InputWrapper,
  SearchInputLabel,
  StyledButton,
  StyledInput,
  StyledThemeModeIcon,
  Wrapper,
} from './search-input.styled';

const iconMaps: Record<
  ThemeMode,
  React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >
> = {
  dark: LightModeIcon,
  light: DarkModeIcon,
};

export function SearchInput() {
  const [keyword, setKeyword] = useState('');
  const { mode, toggleThemeMode } = useThemeModeStore();

  const { setSearchValue } = useWeatherStore();

  function handleSearch() {
    setSearchValue(keyword);
  }

  return (
    <>
      <Wrapper>
        <InputWrapper>
          <SearchInputLabel htmlFor="search">Country</SearchInputLabel>
          <StyledInput
            placeholder="Ex: Singapore, SG"
            id="search"
            autoComplete="off"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </InputWrapper>
        <StyledButton disabled={!keyword} onClick={handleSearch}>
          <StyledThemeModeIcon as={SearchIcon} />
        </StyledButton>
        <StyledButton onClick={toggleThemeMode}>
          <StyledThemeModeIcon as={iconMaps[mode]} />
        </StyledButton>
      </Wrapper>
    </>
  );
}
