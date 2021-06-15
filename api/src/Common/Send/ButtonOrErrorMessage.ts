import {
  // main APIs
  Client,
  // Webhook
  WebhookEvent,
} from '@line/bot-sdk';

export const SendMessage = (client: Client, event: WebhookEvent) => {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return;
  }

  const { replyToken } = event;
  const { text } = event.message;

  if (text === '今日の洋服は？') {
    // ここで位置情報メッセージを送る
  } else {
    // ここで「そのメッセージには対応していません」と送る
  }
};
