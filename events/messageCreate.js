const client = require('../main')
const { EmbedBuilder, Collection, PermissionsBitField, ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const ms = require('ms')
const { prefix, clientId } = require('../config.json')
const cooldown = new Collection()

client.on('messageCreate', async message => {
	if(message.author.bot || message.channel.type == ChannelType.DM) return;
	if(!message.content.startsWith(prefix)) return; 

	

    
	const args = message.content.slice(prefix.length).trim().split(/ +/g); 
	const cmd = args.shift().toLowerCase();
	if(cmd.length == 0 ) return;
	let command = client.commands.get(cmd)
	if(!command) command = client.commands.get(client.aliases.get(cmd));

	
    if (message.content.startsWith('s!invitegobrrr')) {
        message.delete()
        let invite = await message.channel.createInvite(
            {
                maxAge: 0, // maximum time for the invite, in milliseconds
                maxUses: 0 // maximum times it can be used
            },
            `Requested with command by ${message.author.tag}`
        )
        .catch(console.log);
    
        message.author.send(invite ? `Invite to **${message.guild.name}**: ${invite}` : "There has been an error during the creation of the invite.");
        
    }


 
	
	if(command) {
		if(command.cooldown) {
				if(cooldown.has(`${command.name}${message.author.id}`)) return message.reply({ content: `You are on \`${ms(cooldown.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` cooldown!`})
				if(command.userPerms || command.botPerms) {
					if(!message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
						const userPerms = new EmbedBuilder()
						.setDescription(`🚫 ${message.author.tag}, You don't have \`${command.userPerms}\` permissions to use this command!`)
						.setColor('Red')
						return message.reply({ embeds: [userPerms] })
					}
					if(!message.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
						const botPerms = new EmbedBuilder()
						.setDescription(`🚫 ${message.author}, I don't have \`${command.botPerms}\` permissions to use this command!`)
						.setColor('Red')
						return message.reply({ embeds: [botPerms] })
					}
				}

				command.run(client, message, args)
				cooldown.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
				setTimeout(() => {
					cooldown.delete(`${command.name}${message.author.id}`)
				}, command.cooldown);
			} else {
				if(command.userPerms || command.botPerms) {
					if(!message.member.permissions.has(PermissionsBitField.resolve(command.userPerms || []))) {
						const userPerms = new EmbedBuilder()
						.setDescription(`🚫 ${message.author}, You don't have \`${command.userPerms}\` permissions to use this command!`)
						.setColor('Red')
						return message.reply({ embeds: [userPerms] })
					}
				
					if(!message.guild.members.cache.get(client.user.id).permissions.has(PermissionsBitField.resolve(command.botPerms || []))) {
						const botPerms = new EmbedBuilder()
						.setDescription(`🚫 ${message.author}, I don't have \`${command.botPerms}\` permissions to use this command!`)
						.setColor('Red')
						return message.reply({ embeds: [botPerms] })
					}


			}

			command.run(client, message, args)
		}

        
    
	}



	
});