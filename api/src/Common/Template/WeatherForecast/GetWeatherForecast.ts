// Load the package
import {
  // Webhook
  WebhookEvent,
} from '@line/bot-sdk';

import axios from 'axios';

export const getWeatherForecastData = async (event: WebhookEvent) => {
  try {
    if (event.type !== 'message' || event.message.type !== 'location') {
      return;
    }

    // Get latitude and longitude
    const latitude: number = event.message.latitude;
    const longitude: number = event.message.longitude;

    // OpenWeatherAPI
    const openWeatherAPI: string | undefined = process.env.WEATHER_API || '';

    // OpenWeatherURL
    const openWeatherURL: string = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=ja&appid=${openWeatherAPI}`;

    const weatherData: any = await axios.get(openWeatherURL);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
};
