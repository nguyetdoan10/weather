import { PropsWithChildren, useEffect, useState } from 'react';

import cloudImgUrl from '../../../assets/cloud.png';
import sunImgUrl from '../../../assets/sun.png';
import { useWeatherStore } from '../../../hooks/use-weather-store';
import { getTodaysWeather } from '../api/get-todays-weather';
import { WeatherEntity } from '../types/weather-entity';

import { WeatherInfo } from './weather-info';

import { Card } from './weather-card.styled';
import { StyledNotFound, Wrapper } from './weather-card-container.styled';
import { CloudImage } from './weather-info.styled';

interface WeatherCardContentProps {}

export function WeatherCardContainer({ children }: PropsWithChildren<WeatherCardContentProps>) {
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

  return (
    // <Wrapper>
    //   {weatherData && (
    //     <CloudImage src={!weatherData.HasCloud ? cloudImgUrl : sunImgUrl} alt="cloud" />
    //   )}
    <Card>
      {weatherData && (
        <CloudImage src={!weatherData.HasCloud ? cloudImgUrl : sunImgUrl} alt="cloud" />
      )}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
      {children}
    </Card>
    // </Wrapper>
  );
}
