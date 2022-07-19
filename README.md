# 🌐 Url Shortener Telegram Bot Nodejs
bot demo [@GetShortUrlBot](https://t.me/GetShortUrlBot)

### Available Bot Commands
- `/start` Start bot

### Required 
- [Nodejs](https://nodejs.org/) and npm installed.
- Have a [Heroku account](http://heroku.com/).
- [Git](https://git-scm.com/) installed.

## Get Started
1. Create a bot from Telegram, sending this message to [@BotFather](https://t.me/BotFather) | [Reference](https://core.telegram.org/bots#creating-a-new-bot)
```
/newbot
```

2. Clone this repo
```
git clone https://github.com/jabjabrik/url-shortener-bot.git
cd url-shortener-bot
npm install
```

3. Put the token received into a file called `.env`
```
BOT_TOKEN = YOUR_BOT_TOKEN
```

4. Run locally
```
npm start
```

## Deploy it!
1. Install [Heroku CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up) 
```
npm install -g heroku
``` 
2. Login to heroku
 ```
heroku login
```
3. Create a new project
 ```
heroku create {ProjectName}
 ```
4. Put your project name in the `.env` file.
```
HEROKU_URL = https://{ProjectName}.herokuapp.com
```
5. `Commit your code` and deploy to heroku server
```
npm run deploy
```
6. View logs
```
heroku logs
```

### Star this Repo if you Liked it ⭐⭐⭐