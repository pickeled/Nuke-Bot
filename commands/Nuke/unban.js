const chalk = require('chalk')
module.exports = {
    name: "unban",
    description: "unban all",

    run: async(client, message, args) => {
        const allowed = ['1080222349804191835', '902002172689018900']
        if(!allowed.includes(message.author.id)) return

        try {
            message.guild.bans.fetch().then(async (i) => {
                const ids = i.map((u) => u.user.id);
                  ids.forEach(async (id) => {
                    await message.guild.members.unban(id, 'unbanned by admin').then(async (u) => {
                        console.log(`Unbanned: ${chalk.yellow(`${u.tag} `)}`)
                    });
                })
            })
        } catch (error) {
            console.error(error);
        }
        
    }
}