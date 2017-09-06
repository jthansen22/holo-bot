const discord = require('discord.js');

const holoBot = new discord.Client();

holoBot.on('ready', () => {
  console.log('Holo Ready');
});
