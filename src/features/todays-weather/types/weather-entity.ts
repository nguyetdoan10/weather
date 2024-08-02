import { humidityWithUnit, temperatureInCelsius } from '../../../utils/weather';

interface CoordData {
  lon: number;
  lat: number;
}

interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

interface WindData {
  speed: number;
  deg: number;
}

interface SysData {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export class WeatherEntity {
  coord: CoordData;
  weather: Array<WeatherData>;
  base: string;
  main: MainData;
  visibility: number;
  wind: WindData;
  dt: number;
  sys: SysData;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  clouds: {
    all: number;
  };

  get Temp() {
    return Math.round(this.main.temp);
  }

  get TempInCelsius() {
    return temperatureInCelsius(this.Temp);
  }

  get MaxTemp() {
    return Math.round(this.main.temp_max);
  }

  get MaxTempInCelsius() {
    return temperatureInCelsius(this.MaxTemp);
  }

  get MinTemp() {
    return Math.round(this.main.temp_min);
  }

  get MinTempInCelsius() {
    return temperatureInCelsius(this.MinTemp);
  }

  get Humidity() {
    return Math.round(this.main.humidity);
  }

  get HumidityWithUnit() {
    return humidityWithUnit(this.Humidity);
  }

  get Location() {
    return `${this.name}, ${this.sys.country}`;
  }

  get HasCloud() {
    return this.clouds.all >= 20;
  }
}
