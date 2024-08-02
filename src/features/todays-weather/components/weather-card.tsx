import { SearchHistory } from './search-history';
import { WeatherInfo } from './weather-info';

import { Card } from './weather-card.styled';

function WeatherCard() {
  return (
    <Card>
      <WeatherInfo />
      <SearchHistory />
    </Card>
  );
}

export default WeatherCard;
