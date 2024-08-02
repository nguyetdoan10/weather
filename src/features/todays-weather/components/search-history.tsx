import { useWeatherStore } from '../../../hooks/use-weather-store';

import { SearchHistoryItem } from './search-history-item';

import { HistoryWrapper } from './search-history.styled';

export function SearchHistory() {
  const { searchList } = useWeatherStore();

  return (
    <HistoryWrapper>
      <div>Search History</div>
      {searchList?.length ? (
        searchList?.map((searchItem, idx) => {
          return <SearchHistoryItem key={idx} data={searchItem} index={idx} />;
        })
      ) : (
        <div>No record</div>
      )}
    </HistoryWrapper>
  );
}
