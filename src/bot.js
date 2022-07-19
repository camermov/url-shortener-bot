import { Telegraf } from 'telegraf';
import { getShortUrl } from './api.js';

// initialize bot
export const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    ctx.replyWithChatAction('typing');
    const { id } = ctx.chat;
    const { first_name } = ctx.chat;
    bot.telegram.sendMessage(id, ` Welcome ${first_name}👋👋, Have a Great Day.\nSend me the <b>🔗Link</b> and I'll shorten it for you.`, {
        parse_mode: 'HTML'
    });
});

bot.on('text', async (ctx) => {
    ctx.replyWithChatAction('typing');
    const { id } = ctx.chat;
    const { text } = ctx.message;
    const shortedUrl = await getShortUrl(text);
    bot.telegram.sendMessage(id, shortedUrl ? `Here's your short url ⬇️ ⬇️\n\n<b>Short link with Bitly:</b>\n🌐 ${shortedUrl.bitly}\n<b>Short link with TinyURL:</b>\n🌐 ${shortedUrl.tinyUrl}\n<b>Short link with Clean Url:</b>\n🌐 ${shortedUrl.cleanUrl}` : '<b>Please send valid url</b>\n\nfor example <i>https://www.google.com</i>', {
        parse_mode: 'HTML'
    });
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));