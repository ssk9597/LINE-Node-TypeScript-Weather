import {
  // main APIs
  Client,
  // Webhook
  WebhookEvent,
} from '@line/bot-sdk';

export const FlexMessage = async (client: Client, event: WebhookEvent) => {
  try {
    if (event.type !== 'message' || event.message.type !== 'location') {
      return;
    }

    const { replyToken } = event;
    const message = '';

    client.replyMessage(replyToken, message);
  } catch (err) {
    console.log(err);
  }
};
