// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me



/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

cnst ytdl = require('ytdl core');
exports.run = async (client, message, args, ops) => {
  if (!message.member.voiceChannel) return message.channel.send('Connect to a voice channel my friend.');
  if (message.guild.me.voiceChannel) return message.channel.send('I am already connected.');
  if (args[0]) return message.channel.send('Input a url.');
  let validate = await ytdl.validateURL(args[0]);
  if (!validate) return message.channel.send('Input a **valid** url.');
  let info = await ytdl.getInfo(args[0])


// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NDkxMDMwODkzMTgwMzU0NTYy.DoE7uQ.f9oqEauLCtPIf6-BwBwkDBY-M-w');
