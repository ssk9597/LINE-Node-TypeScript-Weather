import {
  // main APIs
  Client,
  // Webhook
  WebhookEvent,
} from '@line/bot-sdk';

import { FlexMessageTemplate } from '../Template/WeatherForecast/FlexMessageTemplate';

export const FlexMessage = async (client: Client, event: WebhookEvent): Promise<void> => {
  try {
    if (event.type !== 'message' || event.message.type !== 'location') {
      return;
    }

    const { replyToken } = event;
    const message: any = await FlexMessageTemplate(event);

    client.replyMessage(replyToken, message);
  } catch (err) {
    console.log(err);
  }
};
