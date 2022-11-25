const client = require('../main')
const { EmbedBuilder, ClientUser } = require('discord.js')
const { color } = require('console-log-colors');

client.on('messageDelete', async (message) => {

  if(message.author == null) return;
  if(message.guild.id !== '903005493914640455') return;
  if(message.partial == true) return;
  if(message.author.id === client.user.id) return;


    const embed = new EmbedBuilder()
      .setAuthor({ name: `Deleted Message Logger`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
      .setColor('White')
      .setDescription(`Message: \`${message.content}\`\nBy: <@!${message.author.id}>\nChannel: ${message.channel}`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setFooter({ text: "Message Logger", iconURL: client.user.displayAvatarURL({ dynamic: true })})
      .setTimestamp()
  
      if(message.attachments.size >= 1) {
        embed.addFields({ name: `Attachments:`, value: `${message.attachments.map(a => a.url)}`, inline: true})
      }

    const channel = client.channels.cache.get('1045466660821278750')
    channel.send({ embeds: [embed] })
    console.log(`${color.red(`[DELETE]  ${message.guild.name} | #${message.channel.name}] `)}`
    + `${color.gray(message.author.tag)}: ${message.content}`);
  })