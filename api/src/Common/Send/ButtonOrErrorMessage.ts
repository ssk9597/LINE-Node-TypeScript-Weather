import {
  // main APIs
  Client,
  // Webhook
  WebhookEvent,
} from '@line/bot-sdk';

// // Load the module
import { ButtonMessageTemplate } from '../Template/ButtonMessageTemplate';
import { ErrorMessageTemplate } from '../Template/ErrorMessageTemplate';

export const SendMessage = (client: Client, event: WebhookEvent) => {
  try {
    if (event.type !== 'message' || event.message.type !== 'text') {
      return;
    }

    const { replyToken } = event;
    const { text } = event.message;

    if (text === '今日の洋服は？') {
      client.replyMessage(replyToken, ButtonMessageTemplate());
    } else {
      client.replyMessage(replyToken, ErrorMessageTemplate());
    }
  } catch (err) {
    console.log(err);
  }
};
