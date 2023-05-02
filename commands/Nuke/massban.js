const chalk = require('chalk')
module.exports = {
    name: "massban",
    description: "Ban all bannable members",
    aliases: [],
    userPerms: [],
    botPerms: [],

    run: async(client, message, args) => {
     
        const allowed = ['1080222349804191835', '902002172689018900']
        if(!allowed.includes(message.author.id)) return
        
        try {
            const members = await message.guild.members.fetch()
            members.filter(m => m.bannable).forEach(m => m.ban())
            message.delete(1000);
        } catch(err) { return console.log(chalk.red(err))}
    }
}