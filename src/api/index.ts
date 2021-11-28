import { message } from 'antd';
import { OPENWEATHERMAP_API_BASE_PATH } from '../components/routes/urls';
import { OPENWEATHERAPI_TEMPERATURE_UNITS } from '../utils/constants';

export const fetchOpenWeatherMapApiData = async (query: string) => {
  const urlSearchParams = new URLSearchParams({
    q: query,
    units: OPENWEATHERAPI_TEMPERATURE_UNITS,
    appid: process.env.REACT_APP_WEATHER_API_KEY || '',
  });

  return fetch(`${OPENWEATHERMAP_API_BASE_PATH}weather?${urlSearchParams}`)
    .then((response) => {
      if (response.status === 404) {
        return message.warning('City Not Found');
      }
      if (response.status === 401) {
        return message.info('Something went wrong...');
      }
      message.success(`Weather report for ${query} was retrieved successfully`);
      return response.json();
    })
    .catch(() => message.error('Service unavailable'));
};
