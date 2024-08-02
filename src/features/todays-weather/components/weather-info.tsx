import { useEffect, useState } from 'react';

import cloudImgUrl from '../../../assets/cloud.png';
import sunImgUrl from '../../../assets/sun.png';
import { useWeatherStore } from '../../../hooks/use-weather-store';
import { formatDateTime } from '../../../utils/date';
import { getTodaysWeather } from '../api/get-todays-weather';
import { WeatherEntity } from '../types/weather-entity';

import {
  CloudImage,
  LeftWrapper,
  RightWrapper,
  StyledLocation,
  StyledNotFound,
  StyledTempInfo,
  StyledTime,
  WeatherDetailWrapper,
  WeatherInfoWrapper,
} from './weather-info.styled';

export function WeatherInfo() {
  const { searchValue } = useWeatherStore();
  const [weatherData, setWeatherData] = useState<WeatherEntity>();
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue) {
        const data = await getTodaysWeather(searchValue || '');
        if (!data || data.error) {
          setIsNotFound(true);
        } else {
          setIsNotFound(false);
          setWeatherData(data.data);
        }
      }
    };

    fetchData().catch(() => {});
  }, [searchValue]);

  if (isNotFound) {
    return <StyledNotFound>Not found</StyledNotFound>;
  }

  if (!isNotFound && !weatherData) {
    return null;
  }

  return (
    <>
      {weatherData && (
        <CloudImage src={!weatherData?.HasCloud ? cloudImgUrl : sunImgUrl} alt="cloud" />
      )}
      <WeatherInfoWrapper>
        <div>Today’s Weather</div>
        <WeatherDetailWrapper>
          <LeftWrapper>
            <StyledTempInfo>{weatherData?.TempInCelsius}</StyledTempInfo>
            <div>
              H: {weatherData?.MaxTempInCelsius} L: {weatherData?.MinTempInCelsius}
            </div>
            <StyledLocation>{weatherData?.Location}</StyledLocation>
          </LeftWrapper>
          <RightWrapper>
            <StyledTime dateTime={new Date().toLocaleString()}>
              {formatDateTime(new Date())}
            </StyledTime>
            <div>Humidity: {weatherData?.HumidityWithUnit}</div>
            <div>{weatherData?.HasCloud ? 'Clouds' : 'No Cloud'}</div>
          </RightWrapper>
        </WeatherDetailWrapper>
      </WeatherInfoWrapper>
    </>
  );
}
