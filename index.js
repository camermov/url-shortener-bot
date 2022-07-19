import { } from 'dotenv/config';
import { bot } from './src/bot.js'

const { PORT, TOKEN, HEROKU_URL } = process.env; // port automated from server
const production = process.env.NODE_ENV === 'production';

if (production) {
    // code will be executed on deployment state
    bot.telegram.setWebhook(`${HEROKU_URL}/bot${TOKEN}`);
    bot.startWebhook(`/bot${TOKEN}`, null, PORT);
} else {
    // code will be executed on development state
    bot.launch();
    const myBot = (await bot.telegram.getMe()).username;
    console.log(`Server has initialized bot nickname. Nick: ${myBot}`);
};