import { plainToClass } from 'class-transformer';

import { WeatherEntity } from '../types/weather-entity';

export interface NotFoundResponse {
  cod: string;
  message: string;
}

export function getTodaysWeather(search: string) {
  const apiEndpoint = import.meta.env.VITE_OPEN_WEATHER_MAP_API_URL as string;
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY as string;

  if (!apiEndpoint || !apiKey) {
    return null;
  }

  const url = new URL(apiEndpoint);

  const searchParams = url.searchParams;

  searchParams.set('q', search);
  searchParams.set('appid', apiKey);
  searchParams.set('units', 'metric');

  return fetch(url.href).then(async (res) => {
    const data = (await res.json()) as WeatherEntity | NotFoundResponse;

    if (data.cod !== 200) {
      return {
        error: data,
      };
    }

    return { data: plainToClass(WeatherEntity, data) };
  });
}
