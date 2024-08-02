import DeleteIcon from '../../../assets/delete-icon.svg?react';
import SearchIcon from '../../../assets/search-icon.svg?react';
import { SearchItem, useWeatherStore } from '../../../hooks/use-weather-store';
import { formatDateTime } from '../../../utils/date';

import {
  ActionIcon,
  HistoryButton,
  SearchHistoryItemWrapper,
  StyledContent,
  StyledTime,
} from './search-history-item.styled';

interface SearchHistoryItemProps {
  data: SearchItem;
  index: number;
}

export function SearchHistoryItem({ data, index }: SearchHistoryItemProps) {
  const { setSearchValue, removeSearch } = useWeatherStore();

  function handleSearchClick() {
    setSearchValue(data.keyword);
  }

  return (
    <SearchHistoryItemWrapper>
      <StyledContent>
        <div>{data.keyword}</div>
        <StyledTime dateTime={formatDateTime(data.time)}>{formatDateTime(data.time)}</StyledTime>
      </StyledContent>
      <HistoryButton onClick={handleSearchClick}>
        <ActionIcon as={SearchIcon} />
      </HistoryButton>
      <HistoryButton onClick={() => removeSearch(index)}>
        <ActionIcon as={DeleteIcon} />
      </HistoryButton>
    </SearchHistoryItemWrapper>
  );
}
