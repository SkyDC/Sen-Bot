const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === '!profile') {
    	message.reply('https://r6db.com/player/a9b8c195-bbe5-4726-93c9-814da8002014/summary');
  	}
    if (message.content === '!who') {
    	message.channel.send('@Sentient #1 :100:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
