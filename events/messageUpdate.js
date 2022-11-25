const client = require('../main')
const { EmbedBuilder } = require('discord.js')
const { color } = require('console-log-colors');

client.on('messageUpdate', async (oldMessage, newMessage) => {

if(oldMessage.author == null || newMessage.author == null) return;
if(oldMessage.guild.id !== '903005493914640455' || newMessage.guild.id !== '903005493914640455') return;
if(oldMessage.partial == true || newMessage.partial == true) return;
if(oldMessage.author.id === client.user.id || newMessage.author.id == client.user.id) return;

    const embed = new EmbedBuilder()
      .setAuthor({ name: `Edited Message Logger`})
      .setColor('White')
      .setDescription(`[Message](${oldMessage.url}): \`${oldMessage.content}\`\n[New Message](${newMessage.url}): \`${newMessage.content}\`\nBy: <@!${oldMessage.author.id}>\nChannel: ${oldMessage.channel}`)
      .setThumbnail(oldMessage.author.displayAvatarURL({ dynamic: true }))
      .setFooter({ text: "Message Logger"})
      .setTimestamp()
  
    const channel = client.channels.cache.get('1045466660821278750')
    channel.send({ embeds: [embed] })
    console.log(`${color.yellow(`[EDIT] ${newMessage.guild.name} | #${newMessage.channel.name}]`)} `
    + `${color.gray(oldMessage.author.tag)}: ${oldMessage.content} ${color.yellow('--->')} ${color.gray(newMessage.author.tag)}: ${newMessage.content}`);
  })

  