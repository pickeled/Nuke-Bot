const discord = require('discord.js')
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { token } = require("./config.json");
const fs = require('fs');
const client = new Client({
    partials: [
      Partials.Message,
      Partials.Channel,
      Partials.GuildMember,
      Partials.Reaction,
      Partials.GuildScheduledEvent, 
      Partials.User,
      Partials.ThreadMember,
    ],
    intents: [
      GatewayIntentBits.Guilds, 
      GatewayIntentBits.GuildMembers, 
      GatewayIntentBits.GuildBans, 
      GatewayIntentBits.GuildEmojisAndStickers, 
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildWebhooks, 
      GatewayIntentBits.GuildInvites, 
      GatewayIntentBits.GuildVoiceStates, 
      GatewayIntentBits.GuildPresences, 
      GatewayIntentBits.GuildMessages, 
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildMessageTyping, 
      GatewayIntentBits.DirectMessages, 
      GatewayIntentBits.DirectMessageReactions, 
      GatewayIntentBits.DirectMessageTyping,
      GatewayIntentBits.MessageContent, 
    ],
  });



client.commands = new Collection();
client.slashCommands = new Collection();
client.aliases = new Collection();
module.exports = client;



// ["commands", "events", "slashCommand"].forEach((handler) => {
//   require(`./handlers/${handler}`)(client);
// })


fs.readdirSync('./handlers').forEach((handler) => {
  require(`./handlers/${handler}`)(client)
});



client.login(token)