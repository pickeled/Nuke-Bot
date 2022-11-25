const { ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'test',
	description: "Command ONLY for developers",
    cooldown: 3000,
	type: ApplicationCommandType.ChatInput,
            default_member_permissions: 'Administrator',

	run: async (client, interaction) => {
        if(!interaction.user.id == '762711150118174751') return interaction.reply('This interaction is restricted for developers!')
		interaction.reply({ content: `***${client.user.tag}*** ping is **${Math.round(client.ws.ping)}ms**\nGuild ID: **${interaction.guild.id}**`, ephemeral: true})
	}
};