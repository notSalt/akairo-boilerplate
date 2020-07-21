# akairo-boilerplate

A boilerplate for a basic discord.js bot using Akairo framework

## quick start

* Clone the repository: `git clone https://github.com/notSalt/akairo-boilerplate.git`
* Go in the directory: `cd akairo-boilerplate`
* Install dependencies: `npm install`
* Set up `config.json`: *Refer to the `config.json` below*
* Start the bot: `npm start`

> For Linux, you can use the "screen" package to keep the bot running in the background.
> You can also use a process manager such as PM2 to keep the bot online.

## config.json

```json
{
  "token": "XXXXXXXXXXXXXXXXXXXXXXXX.XXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXX", // Token for the bot
  "prefix": "!", // Prefix the bot uses
  "owners": ["253907199489736705"], // User IDs of owners
  "mongo_uri": "" // Mongo URI here
}
```
